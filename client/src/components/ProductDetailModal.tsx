import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, FileText } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailModal({ product, open, onOpenChange }: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-product-detail">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold" data-testid="text-product-title">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No Image Available
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                {product.inStock > 0 ? (
                  <Badge variant="secondary" data-testid="badge-availability">In Stock</Badge>
                ) : (
                  <Badge variant="outline" data-testid="badge-availability">Out of Stock</Badge>
                )}
              </div>
              <p className="text-4xl font-bold text-primary mb-6" data-testid="text-detail-price">
                ${product.price}
              </p>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" data-testid="button-request-quote">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
              <Button variant="outline" data-testid="button-download-datasheet">
                <FileText className="w-4 h-4 mr-2" />
                Datasheet
              </Button>
            </div>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="description" className="flex-1" data-testid="tab-description">Description</TabsTrigger>
                <TabsTrigger value="specs" className="flex-1" data-testid="tab-specs">Specifications</TabsTrigger>
                <TabsTrigger value="certs" className="flex-1" data-testid="tab-certs">Certifications</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p className="text-sm leading-relaxed">{product.description}</p>
              </TabsContent>
              <TabsContent value="specs" className="space-y-2">
                {product.specifications && product.specifications.length > 0 ? (
                  <ul className="space-y-2">
                    {product.specifications.map((spec, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No specifications available</p>
                )}
              </TabsContent>
              <TabsContent value="certs" className="space-y-2">
                {product.certifications && product.certifications.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary">{cert}</Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No certifications listed</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
