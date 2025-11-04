// src/pages/Products.tsx
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
    queryKey: ["/api/products"],
  });

  // ──────────────────────────────────────────────────────────────
  // 1. Category definition (id → label) – ONE source of truth
  // ──────────────────────────────────────────────────────────────
  const categories = [
    { id: "devices", label: "Medical Devices" },
    { id: "ppe", label: "PPE " },
    { id: "consumables", label: "Consumables" },
    { id: "equipment", label: "Medical Equipment" },
  ];

  const getCategoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id;

  // ──────────────────────────────────────────────────────────────
  // 2. Filtering logic – uses the REAL `category` field
  // ──────────────────────────────────────────────────────────────
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
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
            {/* ───────────────────── Sidebar ───────────────────── */}
            <aside className="w-full md:w-64 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-semibold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or SKU..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                    data-testid="input-search"
                  />
                </div>
              </div>

              {/* Category filters */}
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div key={cat.id} className="flex items-center gap-2">
                      <Checkbox
                        id={cat.id}
                        checked={selectedCategories.includes(cat.id)}
                        onCheckedChange={() => handleCategoryToggle(cat.id)}
                        data-testid={`checkbox-${cat.id}`}
                      />
                      <Label htmlFor={cat.id} className="cursor-pointer">
                        {cat.label}
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

            {/* ───────────────────── Main grid ───────────────────── */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredProducts.length} product
                      {filteredProducts.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        sku={product.sku}
                        imageUrl={product.imageUrl || undefined}
                        inStock={product.inStock}
                        onViewDetails={(id) => {
                          const p = products.find((x) => x.id === id);
                          setSelectedProduct(p ?? null);
                        }}
                      />
                    ))}
                  </div>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        No products found matching your criteria.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────── Modals & Footer ───────────────────── */}
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
