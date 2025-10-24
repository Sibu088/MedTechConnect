import { Link } from "wouter";
import { Menu, X, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <div className="text-primary-foreground font-bold text-lg">M</div>
            </div>
            <span className="text-xl font-bold text-foreground">Medtech</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-nav-home">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-nav-products">
              Products
            </Link>
            <Link href="/contact" className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md" data-testid="link-nav-contact">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="hidden md:flex" data-testid="button-search">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="default" className="hidden md:flex" data-testid="button-request-quote">
              Request Quote
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t" data-testid="menu-mobile">
            <Link href="/" className="block px-3 py-2 rounded-md hover-elevate active-elevate-2" data-testid="link-mobile-home">
              Home
            </Link>
            <Link href="/products" className="block px-3 py-2 rounded-md hover-elevate active-elevate-2" data-testid="link-mobile-products">
              Products
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover-elevate active-elevate-2" data-testid="link-mobile-contact">
              Contact
            </Link>
            <Button variant="default" className="w-full" data-testid="button-mobile-quote">
              Request Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
