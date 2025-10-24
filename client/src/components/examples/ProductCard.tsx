import ProductCard from '../ProductCard';
import devicesImage from "@assets/generated_images/Medical_devices_category_image_3e32dfe6.png";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        id="1"
        name="Digital Patient Monitor"
        sku="DPM-2024-001"
        price="45,899.00"
        imageUrl={devicesImage}
        inStock={15}
        onViewDetails={(id) => console.log('View details:', id)}
      />
    </div>
  );
}
