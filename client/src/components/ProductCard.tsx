import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  sku: string;
  price: string;
  imageUrl?: string;
  inStock: number;
  onViewDetails: (id: string) => void;
}

export default function ProductCard({ id, name, sku, price, imageUrl, inStock, onViewDetails }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate h-full flex flex-col" data-testid={`card-product-${id}`}>
      <div className="aspect-square bg-muted overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold line-clamp-2 flex-1" data-testid={`text-product-name-${id}`}>{name}</h3>
          {inStock > 0 ? (
            <Badge variant="secondary" className="text-xs" data-testid={`badge-stock-${id}`}>In Stock</Badge>
          ) : (
            <Badge variant="outline" className="text-xs" data-testid={`badge-stock-${id}`}>Out of Stock</Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2">SKU: {sku}</p>
        <p className="text-2xl font-bold text-primary mb-4" data-testid={`text-price-${id}`}>${price}</p>
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
