import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import AIChatWidget from "@/components/AIChatWidget";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, Loader2 } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const categories = [
    { id: 'devices', label: 'Medical Devices' },
    { id: 'consumables', label: 'Consumables' },
    { id: 'ppe', label: 'PPE Equipment' },
    { id: 'equipment', label: 'Medical Equipment' }
  ];

  const filteredProducts = products.filter(product => {
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
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
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
                          const product = products.find(p => p.id === id);
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
                </>
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
