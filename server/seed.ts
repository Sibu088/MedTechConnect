import { storage } from "./storage";

export async function seedProducts() {
  const products = [
    {
      name: 'Digital Patient Monitor - Multi-Parameter',
      sku: 'DPM-2024-001',
      price: '45899.00',
      category: 'devices',
      description: 'Advanced digital patient monitoring system with multi-parameter display, ECG, SpO2, NIBP, and temperature monitoring.',
      specifications: ['Display: 15-inch HD touchscreen', 'Parameters: ECG, SpO2, NIBP, Temp', 'Battery: 4 hours', 'Wireless connectivity'],
      certifications: ['CE', 'FDA', 'ISO 13485', 'SABS'],
      inStock: 15,
      imageUrl: null
    },
    {
      name: 'Nitrile Surgical Gloves (Box of 100)',
      sku: 'SG-2024-002',
      price: '459.00',
      category: 'consumables',
      description: 'Latex-free nitrile surgical gloves, powder-free, sterile, ambidextrous.',
      specifications: ['Material: Nitrile', 'Size: Medium', 'Quantity: 100 pairs', 'Powder-free'],
      certifications: ['CE', 'FDA', 'SABS'],
      inStock: 450,
      imageUrl: null
    },
    {
      name: 'N95 Respirator Masks FFP2 Certified',
      sku: 'N95-2024-003',
      price: '1649.00',
      category: 'ppe',
      description: 'NIOSH-approved N95 respirator masks with FFP2 certification, box of 20.',
      specifications: ['Filtration: 95%+', 'Quantity: 20 masks', 'Adjustable nose clip', 'Comfortable elastic straps'],
      certifications: ['NIOSH', 'CE', 'FDA', 'FFP2'],
      inStock: 280,
      imageUrl: null
    },
    {
      name: 'Electric Hospital Bed - 5 Function',
      sku: 'HB-2024-004',
      price: '64299.00',
      category: 'equipment',
      description: 'Fully electric hospital bed with 5 adjustable positions, side rails, and emergency CPR function.',
      specifications: ['Weight capacity: 200kg', 'Adjustable height: 45-75cm', 'Lockable wheels', 'CPR emergency release'],
      certifications: ['CE', 'FDA', 'ISO 13485', 'SABS'],
      inStock: 12,
      imageUrl: null
    },
    {
      name: 'Portable Ultrasound Scanner - Color Doppler',
      sku: 'US-2024-005',
      price: '239000.00',
      category: 'devices',
      description: 'Portable color Doppler ultrasound machine with high-resolution imaging, ideal for cardiac and abdominal scans.',
      specifications: ['Display: 21-inch LED', 'Probes: 3 included', 'Battery: 2 hours', 'Color Doppler imaging'],
      certifications: ['CE', 'FDA', 'ISO 13485', 'SABS'],
      inStock: 5,
      imageUrl: null
    },
    {
      name: 'Disposable Syringes with Needles (100 pack)',
      sku: 'DS-2024-006',
      price: '365.00',
      category: 'consumables',
      description: 'Sterile disposable syringes with safety needles, 10ml capacity, single-use.',
      specifications: ['Volume: 10ml', 'Needle: 21G x 1.5"', 'Quantity: 100', 'Safety lock feature'],
      certifications: ['CE', 'FDA', 'ISO', 'SABS'],
      inStock: 620,
      imageUrl: null
    },
    {
      name: 'Surgical Face Masks - 3 Ply (Box of 50)',
      sku: 'SFM-2024-007',
      price: '199.00',
      category: 'ppe',
      description: 'Disposable 3-ply surgical face masks with ear loops, high filtration efficiency.',
      specifications: ['Layers: 3-ply', 'Quantity: 50 masks', 'Filtration: 98%', 'Hypoallergenic'],
      certifications: ['CE', 'SABS', 'Type IIR'],
      inStock: 850,
      imageUrl: null
    },
    {
      name: 'Blood Pressure Monitor - Digital',
      sku: 'BPM-2024-008',
      price: '1895.00',
      category: 'devices',
      description: 'Automatic digital blood pressure monitor with large LCD display and memory function.',
      specifications: ['Measurement: Automatic', 'Display: LCD', 'Memory: 99 readings', 'Irregular heartbeat detection'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      inStock: 45,
      imageUrl: null
    },
    {
      name: 'IV Cannula Set (100 pieces)',
      sku: 'IVC-2024-009',
      price: '1250.00',
      category: 'consumables',
      description: 'Sterile IV cannula set with safety wings, various sizes included.',
      specifications: ['Sizes: 18G, 20G, 22G', 'Quantity: 100', 'Safety wing design', 'Color-coded'],
      certifications: ['CE', 'FDA', 'ISO', 'SABS'],
      inStock: 340,
      imageUrl: null
    },
    {
      name: 'Surgical Gowns - Disposable (Pack of 10)',
      sku: 'SGW-2024-010',
      price: '849.00',
      category: 'ppe',
      description: 'Disposable surgical gowns, fluid-resistant, sterile, size L.',
      specifications: ['Material: SMS', 'Size: Large', 'Quantity: 10', 'Fluid-resistant', 'Sterile'],
      certifications: ['CE', 'SABS', 'Level 3'],
      inStock: 230,
      imageUrl: null
    },
    {
      name: 'Defibrillator - Automated External (AED)',
      sku: 'DEF-2024-011',
      price: '18950.00',
      category: 'devices',
      description: 'Latest automated external defibrillator with voice prompts and CPR guidance.',
      specifications: ['Type: Biphasic', 'Energy: 150-200J', 'Voice prompts', 'CPR coaching', '8-year battery'],
      certifications: ['CE', 'FDA', 'ISO 13485', 'SABS'],
      inStock: 8,
      imageUrl: null
    },
    {
      name: 'Oxygen Cylinder - Medical Grade 10L',
      sku: 'OXY-2024-012',
      price: '2450.00',
      category: 'equipment',
      description: 'Medical grade oxygen cylinder with regulator, 10 liters capacity.',
      specifications: ['Capacity: 10L', 'Purity: 99.5%', 'Includes regulator', 'Refillable'],
      certifications: ['CE', 'FDA', 'SABS', 'Medical Grade'],
      inStock: 65,
      imageUrl: null
    },
    {
      name: 'Alcohol Swabs - Sterile (Box of 200)',
      sku: 'AS-2024-013',
      price: '145.00',
      category: 'consumables',
      description: 'Sterile alcohol prep pads, 70% isopropyl alcohol, individually wrapped.',
      specifications: ['Alcohol: 70% IPA', 'Quantity: 200 pads', 'Size: 6cm x 3cm', 'Individually wrapped'],
      certifications: ['CE', 'SABS'],
      inStock: 920,
      imageUrl: null
    },
    {
      name: 'Pulse Oximeter - Fingertip',
      sku: 'POX-2024-014',
      price: '649.00',
      category: 'devices',
      description: 'Portable fingertip pulse oximeter with LED display, measures SpO2 and pulse rate.',
      specifications: ['Display: LED', 'Measurement: SpO2, Pulse', 'Battery: AAA x 2', 'Auto power-off'],
      certifications: ['CE', 'FDA', 'ISO'],
      inStock: 155,
      imageUrl: null
    },
    {
      name: 'Wheelchair - Standard Folding',
      sku: 'WC-2024-015',
      price: '3899.00',
      category: 'equipment',
      description: 'Standard folding wheelchair with padded armrests and footrests.',
      specifications: ['Weight capacity: 120kg', 'Seat width: 46cm', 'Folding design', 'Padded armrests'],
      certifications: ['CE', 'ISO', 'SABS'],
      inStock: 22,
      imageUrl: null
    },
    {
      name: 'Gauze Bandage Rolls (Pack of 12)',
      sku: 'GB-2024-016',
      price: '285.00',
      category: 'consumables',
      description: 'Sterile gauze bandage rolls, 10cm x 4m, highly absorbent.',
      specifications: ['Width: 10cm', 'Length: 4m', 'Quantity: 12 rolls', 'Sterile', 'Cotton blend'],
      certifications: ['CE', 'SABS'],
      inStock: 480,
      imageUrl: null
    },
    {
      name: 'Safety Goggles - Anti-Fog',
      sku: 'SG-2024-017',
      price: '189.00',
      category: 'ppe',
      description: 'Protective safety goggles with anti-fog coating and adjustable strap.',
      specifications: ['Lens: Polycarbonate', 'Anti-fog coating', 'UV protection', 'Adjustable strap'],
      certifications: ['CE', 'ANSI Z87.1', 'SABS'],
      inStock: 310,
      imageUrl: null
    },
    {
      name: 'Thermometer - Infrared Non-Contact',
      sku: 'TH-2024-018',
      price: '549.00',
      category: 'devices',
      description: 'Latest infrared non-contact thermometer with instant reading and fever alert.',
      specifications: ['Type: Infrared', 'Reading time: 1 second', 'Distance: 3-5cm', 'Memory: 32 readings'],
      certifications: ['CE', 'FDA', 'ISO', 'SABS'],
      inStock: 185,
      imageUrl: null
    },
    {
      name: 'Examination Table - Adjustable',
      sku: 'ET-2024-019',
      price: '12500.00',
      category: 'equipment',
      description: 'Medical examination table with adjustable height and backrest, paper roll holder.',
      specifications: ['Weight capacity: 180kg', 'Height: 60-90cm', 'Width: 60cm', 'Vinyl upholstery'],
      certifications: ['CE', 'ISO', 'SABS'],
      inStock: 14,
      imageUrl: null
    },
    {
      name: 'Cotton Wool Balls - Sterile (500g)',
      sku: 'CW-2024-020',
      price: '165.00',
      category: 'consumables',
      description: 'Sterile absorbent cotton wool balls for medical use.',
      specifications: ['Weight: 500g', 'Sterile', '100% cotton', 'High absorbency'],
      certifications: ['CE', 'SABS'],
      inStock: 550,
      imageUrl: null
    }
  ];

  for (const product of products) {
    await storage.createProduct(product);
  }

  console.log(`Seeded ${products.length} products`);
}
