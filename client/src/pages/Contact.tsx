import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AIChatWidget from "@/components/AIChatWidget";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our products or services? We're here to help. Reach out to our team and we'll respond as soon as possible.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </div>

      <AIChatWidget />
      <Footer />
    </div>
  );
}
