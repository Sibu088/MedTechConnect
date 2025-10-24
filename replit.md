# Medtech - Medical Equipment E-commerce Platform

## Overview

Medtech is a B2B e-commerce platform designed for medical equipment and supplies sales to hospitals and healthcare facilities. The application enables browsing medical products across categories (devices, consumables, PPE, equipment), viewing detailed product specifications and certifications, and contacting the company for quotes. The platform emphasizes professional credibility, trust, and efficient product discovery with a Material Design-inspired interface tailored for the medical industry.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with hot module replacement
- **Wouter** for lightweight client-side routing (Home, Products, Contact pages)
- **TanStack Query** (React Query) for server state management with configured query defaults (no refetch on window focus, infinite stale time)

**UI Component System**
- **Shadcn UI** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **New York** style variant for shadcn components
- Custom theme system with CSS variables for light/dark mode support
- Design follows Material Design principles adapted for medical B2B e-commerce

**State Management**
- React Query for asynchronous server state
- Local React state (useState) for UI interactions (modals, search filters, category selection)
- No global client state management library - relies on React Query cache and local state

**Key Features**
- Product catalog with category filtering and search
- Product detail modal with specifications and certifications
- AI-powered chat widget for customer support (integrates with OpenAI)
- Contact form for quote requests
- Responsive design (mobile-first approach)

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Custom middleware for request logging with duration tracking
- JSON body parsing with raw body preservation for webhook verification
- Session management ready (connect-pg-simple configured)

**API Design**
- RESTful endpoints under `/api` prefix
- Product routes: `GET /api/products`, `GET /api/products/:id`, `GET /api/products?category=X`
- Contact route: `POST /api/contact`
- Chat route: `POST /api/chat` (OpenAI integration)
- Consistent error handling with HTTP status codes

**Data Access Layer**
- Storage abstraction (`IStorage` interface) allowing multiple implementations
- `MemStorage` in-memory implementation for development
- Database-backed storage ready (schema defined with Drizzle ORM)
- Seeding functionality for initial product data

**Development vs Production**
- Vite middleware integration in development for SSR-style serving
- Static file serving in production from `dist/public`
- Environment-based configuration via `NODE_ENV`

### Data Storage

**Database Technology**
- **PostgreSQL** as the primary database (via Neon serverless)
- **Drizzle ORM** for type-safe database queries and migrations
- Schema-first approach with TypeScript type inference

**Schema Design**
- **Users table**: Basic authentication (id, username, password)
- **Products table**: Complete product catalog with:
  - Core fields: name, SKU, price, category, description, stock count
  - Arrays: specifications, certifications (PostgreSQL array columns)
  - Optional image URL
  - UUID primary keys via `gen_random_uuid()`
- **Contact Messages table**: Stores customer inquiries (name, email, company, message)

**Data Validation**
- Zod schemas derived from Drizzle schemas using `drizzle-zod`
- Runtime validation on API endpoints before database operations
- Type-safe insert operations with `InsertProduct`, `InsertContactMessage`, etc.

### Authentication & Authorization

**Current Implementation**
- User table exists but authentication not actively implemented
- Session infrastructure configured (connect-pg-simple) but not enforced
- Ready for future session-based or JWT authentication

**Future Considerations**
- Intended for admin/staff authentication
- B2B quote request workflow (not direct purchasing)

### External Dependencies

**Third-Party Services**
- **OpenAI API**: Powers the AI chat widget for customer support
  - Requires `OPENAI_API_KEY` environment variable
  - Maintains conversation history for context
- **Neon Database**: Serverless PostgreSQL hosting
  - Requires `DATABASE_URL` environment variable
  - Configured in `drizzle.config.ts`

**Key Libraries**
- **@neondatabase/serverless**: Neon database driver
- **@radix-ui/***: Unstyled, accessible UI primitives (20+ components)
- **class-variance-authority**: Type-safe component variants
- **embla-carousel-react**: Product carousel functionality
- **react-hook-form** + **@hookform/resolvers**: Form handling with Zod validation
- **date-fns**: Date manipulation utilities
- **react-icons**: Icon library (WhatsApp, LinkedIn, Facebook icons)

**Design Assets**
- Custom images stored in `attached_assets/generated_images/`
- Categories: medical devices, consumables, PPE, equipment
- Hero images for homepage

**Development Tools**
- **@replit/vite-plugin-***: Replit-specific development enhancements (error modal, cartographer, dev banner)
- **tsx**: TypeScript execution for development server
- **esbuild**: Production build bundler for server code