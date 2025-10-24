# Medtech Website Design Guidelines

## Design Approach
**System**: Material Design with B2B e-commerce adaptations inspired by medical industry leaders (Philips Healthcare, GE Healthcare) emphasizing trust, clarity, and efficient product discovery.

**Core Principle**: Professional credibility meets intuitive product discovery. Clean, information-rich layouts that prioritize product accessibility while maintaining medical-grade trustworthiness.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, professional, excellent readability
- **Accent Font**: Roboto for product specifications and technical details
- **Hierarchy**:
  - Hero Headlines: text-5xl md:text-6xl font-bold
  - Section Headers: text-3xl md:text-4xl font-semibold
  - Product Titles: text-xl font-semibold
  - Body Text: text-base leading-relaxed
  - Specifications: text-sm font-mono for technical data

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 6, 8, 12, 16, 20, 24 for spacing
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Container: max-w-7xl mx-auto px-4 md:px-6

## Page Structure

### Homepage
**Hero Section** (h-[600px]):
- Full-width medical facility image showing modern hospital equipment in use
- Overlay gradient for text legibility
- Centered headline emphasizing reliability and quality
- Dual CTAs: "Browse Catalog" (primary) and "Request Quote" (secondary) with blur backdrop (backdrop-blur-sm bg-white/20)
- Trust indicators below: "ISO Certified" | "24/7 Support" | "500+ Hospitals Served"

**Product Category Grid** (3-column desktop, 2 tablet, 1 mobile):
- Large category cards with representative product images
- Categories: Medical Devices | Consumables | PPE Equipment | Diagnostic Tools | Surgical Instruments
- Each card: category icon, title, product count, "Explore →" link
- Hover: subtle elevation (shadow-lg transition)

**Featured Products Carousel**:
- Horizontal scroll showcase (no auto-play)
- Product cards with image, title, brief specs, "View Details" button
- 4 products visible desktop, 2 tablet, 1.5 mobile for scroll hint

**Why Medtech Section** (2-column grid):
- Left: Key differentiators (Fast Delivery, Quality Assurance, Expert Support, Competitive Pricing)
- Right: Image of warehouse/logistics or certification display
- Icons from Heroicons for each benefit

**Contact CTA Section**:
- Split layout: Form left (Name, Email, Company, Message), Contact info right
- WhatsApp integration button prominent: "Chat with Us Now" with WhatsApp icon
- Phone, email, business hours displayed

### Navigation System
**Header** (sticky top-0):
- Logo left (medical cross incorporated)
- Main nav center: Products (mega-menu) | About | Quality Assurance | Contact
- Right: Search icon, Request Quote button, Language selector
- Mobile: Hamburger menu with slide-in drawer

**Mega-menu for Products**:
- 4-column layout on desktop
- Categorized product lists with images
- Quick links to certifications and documentation

### Product Catalog Page
**Sidebar Filters** (w-64 sticky):
- Category checkboxes
- Price range slider
- Availability status
- Brand filters
- Certification filters (CE, FDA, ISO)
- "Clear All" link

**Product Grid** (main content):
- 3-column desktop, 2 tablet, 1 mobile
- Cards: product image (4:3 ratio), title, SKU, starting price, "Quick View" button
- Sorting dropdown: Relevance, Price, Newest, Popular
- Pagination at bottom

### Product Detail Page
**Layout**: 2-column split (1-column mobile)

**Left Column**:
- Large product image gallery (main image + 4-5 thumbnails)
- Zoom on hover capability
- Image ratio: 1:1 for consistency

**Right Column**:
- Product name (text-3xl font-bold)
- SKU and availability status badge
- Price display (text-2xl)
- Specifications accordion: Technical Details, Certifications, Dimensions, Materials
- Quantity selector
- CTAs: "Request Quote" (primary) | "Add to Inquiry List" (secondary) | "Download Datasheet"
- Contact sales rep section with WhatsApp direct link

**Below Fold**:
- Tabbed interface: Description | Specifications | Certifications | Related Products
- Related products: 4-column grid of similar items

## Component Library

### Cards
- Product Cards: rounded-lg border shadow-sm hover:shadow-md transition p-4
- Category Cards: rounded-xl aspect-square flex flex-col items-center justify-center p-8
- Info Cards: rounded-lg border-l-4 (accent) p-6

### Buttons
- Primary: rounded-lg px-6 py-3 font-semibold
- Secondary: rounded-lg px-6 py-3 font-semibold border-2
- Icon buttons: rounded-full p-3
- WhatsApp CTA: Green-themed with WhatsApp icon, backdrop-blur-sm when on images

### Forms
- Input fields: rounded-lg border p-3 focus:ring-2
- Labels: text-sm font-medium mb-2 block
- Error states: border-red with error message below
- Consistent spacing: space-y-4 for form groups

### WhatsApp Integration
**Floating Chat Button** (fixed bottom-6 right-6):
- Circular green button (w-14 h-14) with WhatsApp icon
- Pulse animation to draw attention
- Opens chat widget on click
- z-50 to stay above all content

**Chat Widget**: 
- Slide-up panel from bottom-right
- Header: Company logo, "Chat with us", minimize button
- Quick response buttons for common inquiries
- Input field at bottom

### Badges & Tags
- Certification badges: rounded-full px-3 py-1 text-xs font-semibold
- Stock status: dot indicator + text (In Stock, Low Stock, Pre-order)
- New arrivals: "NEW" badge on product cards

## Images

**Hero Image**: Modern hospital operating room or medical facility with advanced equipment, professional lighting, conveying trust and innovation (full-width, 600px height)

**Category Images**: Close-up product photography on clean backgrounds for each category card

**Product Images**: Consistent 1:1 ratio, white/neutral background, high-resolution for zoom functionality, multiple angles for gallery

**About/Trust Section**: Warehouse, certification wall, or team with medical equipment

**No generic stock photos** - all imagery should reflect actual medical equipment and facilities where possible

## Accessibility & Usability
- All interactive elements minimum 44x44px touch targets
- Clear focus indicators (ring-2) on all focusable elements
- Skip to main content link
- Semantic HTML throughout
- Alt text for all product images with technical details
- Keyboard navigation for all interactions
- Form validation with clear error messages

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns, simplified navigation)
- Desktop: > 1024px (full layout with sidebars and multi-column grids)