import CategoryCard from '../CategoryCard';
import devicesImage from "@assets/generated_images/Medical_devices_category_image_3e32dfe6.png";

export default function CategoryCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <CategoryCard
        title="Medical Devices"
        productCount={45}
        imageUrl={devicesImage}
        category="devices"
      />
    </div>
  );
}
