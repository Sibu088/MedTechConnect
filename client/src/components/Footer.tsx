import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ---------- Column 1 – Logo & Social ---------- */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center gap-3" data-testid="link-home">
                <img
                  src="/change.jpg"
                  alt="MedTech Supplies Logo"
                  className="h-14 w-auto border border-primary/20 rounded-lg shadow-sm"
                />
                <span className="text-xl font-bold text-foreground">MEDTECH SUPPLIES</span>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner in medical equipment and supplies.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-md transition-colors"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ---------- Column 2 – Products ---------- */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=devices"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-devices"
                >
                  Medical Devices
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=consumables"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-consumables"
                >
                  Consumables
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=ppe"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-ppe"
                >
                  PPE 
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=equipment"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-equipment"
                >
                  Medical Equipment
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- Column 3 – Company ---------- */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-certs"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-support"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------- Column 4 – Contact (WITH ADDRESS) ---------- */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {/* Phone */}
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">+27 67 618 5543</span>
              </li>

              {/* Email */}
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground break-all">
                  medtechsupplies@medtechsupplies.co.za
                </span>
              </li>

              {/* Physical Address */}
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-tight">
                  3 Halifax Street<br />
                  Johannesburg, Gauteng, 2191<br />
                  South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Bottom copyright ---------- */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 MEDTECH SUPPLIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
