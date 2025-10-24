import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import AIChatWidget from "@/components/AIChatWidget";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import type { Product } from "@shared/schema";
import devicesImage from "@assets/generated_images/Medical_devices_category_image_3e32dfe6.png";
import consumablesImage from "@assets/generated_images/Medical_consumables_category_image_36ec9d1e.png";
import ppeImage from "@assets/generated_images/PPE_equipment_category_image_46d9ab7c.png";
import equipmentImage from "@assets/generated_images/Medical_equipment_category_image_9844a6fa.png";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Digital Patient Monitor',
      sku: 'DPM-2024-001',
      price: '2499.00',
      description: 'Advanced digital patient monitoring system with multi-parameter display.',
      specifications: ['Display: 15-inch HD', 'Parameters: ECG, SpO2, NIBP', 'Battery: 4 hours'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      inStock: 15,
      imageUrl: devicesImage,
      category: 'devices'
    },
    {
      id: '2',
      name: 'Surgical Gloves (Box of 100)',
      sku: 'SG-2024-002',
      price: '24.99',
      description: 'Latex-free surgical gloves, powder-free, sterile.',
      specifications: ['Material: Nitrile', 'Size: Medium', 'Quantity: 100 pairs'],
      certifications: ['CE', 'FDA'],
      inStock: 250,
      imageUrl: consumablesImage,
      category: 'consumables'
    },
    {
      id: '3',
      name: 'N95 Respirator Masks',
      sku: 'N95-2024-003',
      price: '89.99',
      description: 'NIOSH-approved N95 respirator masks, box of 20.',
      specifications: ['Filtration: 95%', 'Quantity: 20 masks', 'Adjustable nose clip'],
      certifications: ['NIOSH', 'CE', 'FDA'],
      inStock: 180,
      imageUrl: ppeImage,
      category: 'ppe'
    },
    {
      id: '4',
      name: 'Hospital Bed - Electric',
      sku: 'HB-2024-004',
      price: '3499.00',
      description: 'Fully electric hospital bed with adjustable positions and side rails.',
      specifications: ['Weight capacity: 450 lbs', 'Adjustable height', 'Lockable wheels'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      inStock: 8,
      imageUrl: equipmentImage,
      category: 'equipment'
    },
    {
      id: '5',
      name: 'Ultrasound Machine',
      sku: 'US-2024-005',
      price: '12999.00',
      description: 'Portable ultrasound machine with high-resolution imaging.',
      specifications: ['Display: 21-inch LED', 'Probes: 3 included', 'Battery: 2 hours'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      inStock: 3,
      imageUrl: devicesImage,
      category: 'devices'
    },
    {
      id: '6',
      name: 'Disposable Syringes (100 pack)',
      sku: 'DS-2024-006',
      price: '19.99',
      description: 'Sterile disposable syringes with needles, 10ml capacity.',
      specifications: ['Volume: 10ml', 'Needle: 21G', 'Quantity: 100'],
      certifications: ['CE', 'FDA'],
      inStock: 320,
      imageUrl: consumablesImage,
      category: 'consumables'
    }
  ];

  const categories = [
    { id: 'devices', label: 'Medical Devices' },
    { id: 'consumables', label: 'Consumables' },
    { id: 'ppe', label: 'PPE Equipment' },
    { id: 'equipment', label: 'Medical Equipment' }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-8">Our Products</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                    data-testid="input-search"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryToggle(category.id)}
                        data-testid={`checkbox-${category.id}`}
                      />
                      <Label htmlFor={category.id} className="cursor-pointer">
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedCategories.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategories([])}
                    className="mt-3"
                    data-testid="button-clear-filters"
                  >
                    Clear filters
                  </Button>
                )}
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    sku={product.sku}
                    price={product.price}
                    imageUrl={product.imageUrl || undefined}
                    inStock={product.inStock}
                    onViewDetails={(id) => {
                      const product = mockProducts.find(p => p.id === id);
                      setSelectedProduct(product || null);
                    }}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      />
      
      <AIChatWidget />
      <Footer />
    </div>
  );
}
