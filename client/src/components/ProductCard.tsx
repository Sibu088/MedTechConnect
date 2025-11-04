import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  sku: string;
  price: string; // kept in props (in case needed elsewhere), but not displayed
  imageUrl?: string;
  inStock: number;
  onViewDetails: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  sku,
  price, // received but not used in UI
  imageUrl,
  inStock,
  onViewDetails,
}: ProductCardProps) {
  // Set image URL based on product ID
  const testImageUrl =
    id === "1"
      ? "/Digital Patient Monitor - Multi-Parameter .jpg"
      : id === "2"
      ? "/surgicalgloves.jpg"
      : id === "3"
      ? "/N95 Respirator Masks FFP2 Certified.jpg"
      : id === "4"
      ? "/Electric Hospital Bed - 5 Function.jpg"
      : id === "5"
      ? "/Portable Ultrasound Scanner - Color Doppler.jpg"
      : id === "6"
      ? "/Disposable Syringes with Needles (100 pack).jpg"
      : id === "7"
      ? "/N95 Respirator Masks FFP2 Certified.jpg"
      : id === "8"
      ? "/Blood Pressure Monitor - Digital.jpg"
      : id === "9"
      ? "/sibu.jpg"
      : id === "10"
      ? "/Alcohol Swabs - Sterile (Box of 200).jpg"
      : id === "11"
      ? "/Defibrillator - Automated External.jpg"
      : id === "12"
      ? "/Oxygen Cylinder - Medical Grade 10L.jpg"
      : id === "13"
      ? "/Alcohol Swabs - Sterile (Box of 200) (2).jpg"
      : id === "14"
      ? "/Pulse Oximeter - Fingertip.jpg"
      : id === "15"
      ? "/Wheelchair - Standard Folding.jpg"
      : id === "16"
      ? "/Gauze Bandage Rolls (Pack of 12).jpg"
      : id === "17"
      ? "/safety-goggles-anti-scratch-and-anti-fog.jpg"
      : id === "18"
      ? "/Thermometer - Infrared Non-Contact.jpg"
      : id === "19"
      ? "/Examination Table - Adjustable.jpg"
      : id === "20"
      ? "/Anti-Bacteria-Alcohol-Absorbent-Sterile-Cotton-Ball.jpg"
      : id === "21"
      ? "/Packs-and-Trays.jpg"
      : imageUrl;

  // Override names for specific products
  const displayName =
    id === "1"
      ? "Aed - Automated External Defibrillator"
      : id === "3"
      ? "Personal Protective Equipment"
      : id === "9"
      ? "Scoops and Spatulas"
      : id === "10"
      ? "Alcohol Swabs - Sterile (Box of 200)"
      : id === "21"
      ? "Packs and Trays"
      : name;

  return (
    <Card
      className="overflow-hidden hover-elevate h-full flex flex-col"
      data-testid={`card-product-${id}`}
    >
      <div className="aspect-square bg-muted overflow-hidden">
        {testImageUrl ? (
          <img
            src={testImageUrl}
            alt={displayName}
            className="w-full h-full object-cover"
            onError={(e) =>
              console.error("Image failed to load:", testImageUrl, e)
            }
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-semibold line-clamp-2 flex-1"
            data-testid={`text-product-name-${id}`}
          >
            {displayName}
          </h3>
          {inStock > 0 ? (
            <Badge
              variant="secondary"
              className="text-xs"
              data-testid={`badge-stock-${id}`}
            >
              In Stock
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="text-xs"
              data-testid={`badge-stock-${id}`}
            >
              Out of Stock
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4">SKU: {sku}</p>

        {/* PRICE REMOVED — NO LONGER DISPLAYED */}

        <Button
          variant="outline"
          className="w-full mt-auto"
          onClick={() => onViewDetails(id)}
          data-testid={`button-view-${id}`}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
