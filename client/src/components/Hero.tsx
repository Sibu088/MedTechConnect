import { Button } from "@/components/ui/button";
import { Shield, Clock, Building2 } from "lucide-react";
import heroImage from "@assets/generated_images/Hospital_operating_room_hero_f1c38e85.png";

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Premium Medical Equipment
          <br />
          <span className="text-primary-foreground">for Healthcare Excellence</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Trusted supplier of cutting-edge medical devices, consumables, and equipment to hospitals worldwide
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" variant="default" data-testid="button-hero-catalog">
            Browse Catalog
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="backdrop-blur-sm bg-white/20 border-white/40 text-white hover:bg-white/30"
            data-testid="button-hero-quote"
          >
            Request Quote
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            <span className="text-sm font-medium">500+ Hospitals Served</span>
          </div>
        </div>
      </div>
    </div>
  );
}
