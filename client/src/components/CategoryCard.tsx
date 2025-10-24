import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CategoryCardProps {
  title: string;
  productCount: number;
  imageUrl: string;
  category: string;
}

export default function CategoryCard({ title, productCount, imageUrl, category }: CategoryCardProps) {
  return (
    <Link href={`/products?category=${category}`} data-testid={`link-category-${category}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full">
        <div className="aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2" data-testid={`text-category-${category}`}>{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{productCount} Products</p>
          <div className="flex items-center gap-2 text-primary font-medium">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
