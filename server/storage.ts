import { 
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type ContactMessage,
  type InsertContactMessage 
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private contactMessages: Map<string, ContactMessage>;
  private productIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.contactMessages = new Map();
    this.productIdCounter = 1;
    this.messageIdCounter = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = String(this.productIdCounter++);
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = String(this.productIdCounter++);
    const product: Product = { 
      ...insertProduct, 
      id,
      specifications: insertProduct.specifications ?? null,
      certifications: insertProduct.certifications ?? null,
      inStock: insertProduct.inStock ?? 0,
      imageUrl: insertProduct.imageUrl ?? null
    };
    this.products.set(id, product);
    return product;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = String(this.messageIdCounter++);
    const message: ContactMessage = { 
      ...insertMessage, 
      id,
      company: insertMessage.company ?? null
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
