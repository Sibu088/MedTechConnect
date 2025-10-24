import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProductSchema, insertContactMessageSchema } from "@shared/schema";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Product routes
  app.get("/api/products", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      
      if (category) {
        const products = await storage.getProductsByCategory(category);
        res.json(products);
      } else {
        const products = await storage.getAllProducts();
        res.json(products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProductById(req.params.id);
      if (!product) {
        res.status(404).json({ error: "Product not found" });
        return;
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(400).json({ error: "Invalid product data" });
    }
  });

  // Contact message routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(400).json({ error: "Invalid contact data" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // AI Chat route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;

      if (!message) {
        res.status(400).json({ error: "Message is required" });
        return;
      }

      const systemPrompt = `You are a helpful customer service assistant for Medtech, a medical equipment and supplies company. 
You help customers with:
- Product inquiries and specifications
- Pricing information (all prices are in South African Rands - ZAR)
- Quote requests
- General questions about medical devices, consumables, PPE equipment, and medical equipment
- Certifications (CE, FDA, ISO 13485, SABS)
- Delivery and support information

Be professional, friendly, and knowledgeable. If you don't know something specific, recommend the customer contact sales at +1 (555) 123-4567 or sales@medtech.com.`;

      const messages = [
        { role: "system" as const, content: systemPrompt },
        ...(conversationHistory || []),
        { role: "user" as const, content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      });

      const reply = completion.choices[0]?.message?.content || "I apologize, I'm having trouble responding right now. Please contact our team directly.";

      res.json({ reply });
    } catch (error) {
      console.error("Error in chat:", error);
      res.status(500).json({ 
        error: "Failed to process chat message",
        reply: "I apologize, I'm experiencing technical difficulties. Please contact our team at sales@medtech.com or call +1 (555) 123-4567."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
