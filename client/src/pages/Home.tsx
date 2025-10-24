import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import devicesImage from "@assets/generated_images/Medical_devices_category_image_3e32dfe6.png";
import consumablesImage from "@assets/generated_images/Medical_consumables_category_image_36ec9d1e.png";
import ppeImage from "@assets/generated_images/PPE_equipment_category_image_46d9ab7c.png";
import equipmentImage from "@assets/generated_images/Medical_equipment_category_image_9844a6fa.png";
import { Truck, Shield, Headphones, DollarSign } from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Medical Devices",
      productCount: 45,
      imageUrl: devicesImage,
      category: "devices"
    },
    {
      title: "Consumables",
      productCount: 120,
      imageUrl: consumablesImage,
      category: "consumables"
    },
    {
      title: "PPE Equipment",
      productCount: 68,
      imageUrl: ppeImage,
      category: "ppe"
    },
    {
      title: "Medical Equipment",
      productCount: 52,
      imageUrl: equipmentImage,
      category: "equipment"
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to healthcare facilities worldwide"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products meet international quality and safety standards"
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "24/7 customer service and technical assistance"
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Best value for premium medical equipment and supplies"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive range of medical equipment and supplies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.category} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Medtech</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best service and products to healthcare providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover-elevate"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AIChatWidget />
      <Footer />
    </div>
  );
}
