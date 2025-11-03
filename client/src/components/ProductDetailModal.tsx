import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@shared/schema";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductDetailModal({
  product,
  open,
  onOpenChange,
}: ProductDetailModalProps) {
  if (!product) return null;

  // Reuse test image logic
  const testImageUrl =
    product.id === "1"
      ? "/Digital Patient Monitor - Multi-Parameter .jpg"
      : product.id === "2"
      ? "/surgicalgloves.jpg"
      : product.id === "3"
      ? "/N95 Respirator Masks FFP2 Certified.jpg"
      : product.id === "4"
      ? "/Electric Hospital Bed - 5 Function.jpg"
      : product.id === "5"
      ? "/Portable Ultrasound Scanner - Color Doppler.jpg"
      : product.id === "6"
      ? "/Disposable Syringes with Needles (100 pack).jpg"
      : product.id === "7"
      ? "/N95 Respirator Masks FFP2 Certified.jpg"
      : product.id === "8"
      ? "/Blood Pressure Monitor - Digital.jpg"
      : product.id === "9"
      ? "/IV Cannula Set (100 pieces).jpg"
      : product.id === "10"
      ? "/Alcohol Swabs - Sterile (Box of 200).jpg"
      : product.id === "11"
      ? "/Defibrillator - Automated External.jpg"
      : product.id === "12"
      ? "/Oxygen Cylinder - Medical Grade 10L.jpg"
      : product.id === "13"
      ? "/Alcohol Swabs - Sterile (Box of 200) (2).jpg"
      : product.id === "14"
      ? "/Pulse Oximeter - Fingertip.jpg"
      : product.id === "15"
      ? "/Wheelchair - Standard Folding.jpg"
      : product.id === "16"
      ? "/Gauze Bandage Rolls (Pack of 12).jpg"
      : product.id === "17"
      ? "/safety-goggles-anti-scratch-and-anti-fog.jpg"
      : product.id === "18"
      ? "/Thermometer - Infrared Non-Contact.jpg"
      : product.id === "19"
      ? "/Examination Table - Adjustable.jpg"
      : product.id === "20"
      ? "/Anti-Bacteria-Alcohol-Absorbent-Sterile-Cotton-Ball.jpg"
      : product.imageUrl;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
        data-testid="modal-product-detail"
      >
        <DialogHeader>
          <DialogTitle
            className="text-3xl font-bold"
            data-testid="text-product-title"
          >
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            {testImageUrl ? (
              <img
                src={testImageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* Minimal Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted-foreground">
                SKU: {product.sku}
              </p>
              {product.inStock > 0 ? (
                <Badge variant="secondary">In Stock</Badge>
              ) : (
                <Badge variant="outline">Out of Stock</Badge>
              )}
            </div>

            {/* No price, no buttons, no tabs */}
            <p className="text-sm text-muted-foreground">
              Contact us for more information.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
