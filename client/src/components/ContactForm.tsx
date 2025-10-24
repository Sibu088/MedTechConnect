import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);

      toast({
        title: "Message Sent",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6">
        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
              data-testid="input-name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isSubmitting}
              data-testid="input-email"
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              disabled={isSubmitting}
              data-testid="input-company"
            />
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={isSubmitting}
              data-testid="input-message"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting} data-testid="button-submit">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </Card>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">sales@medtech.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">123 Medical Plaza, Healthcare District<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
