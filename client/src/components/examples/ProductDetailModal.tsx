import ProductDetailModal from '../ProductDetailModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import devicesImage from "@assets/generated_images/Medical_devices_category_image_3e32dfe6.png";

export default function ProductDetailModalExample() {
  const [open, setOpen] = useState(false);

  const mockProduct = {
    id: '1',
    name: 'Digital Patient Monitor',
    sku: 'DPM-2024-001',
    price: '2499.00',
    description: 'Advanced digital patient monitoring system with multi-parameter display, ECG, SpO2, NIBP, and temperature monitoring. Features a high-resolution touchscreen interface and wireless connectivity for seamless integration with hospital information systems.',
    specifications: [
      'Display: 15-inch HD touchscreen',
      'Parameters: ECG, SpO2, NIBP, Temperature, Respiration',
      'Battery Life: Up to 4 hours',
      'Connectivity: WiFi, Bluetooth, Ethernet',
      'Dimensions: 320 x 280 x 180 mm',
      'Weight: 3.5 kg'
    ],
    certifications: ['CE', 'FDA', 'ISO 13485', 'IEC 60601-1'],
    inStock: 15,
    imageUrl: devicesImage,
    category: 'devices'
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Product Detail</Button>
      <ProductDetailModal
        product={mockProduct}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
