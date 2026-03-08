import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, title: "Address", text: "Musterstraße 123\n60000 Frankfurt am Main\nGermany" },
  { icon: Phone, title: "Phone", text: "+49 (0) 69 123 456 78" },
  { icon: Mail, title: "Email", text: "info@ghbh-bau.de" },
  { icon: Clock, title: "Office Hours", text: "Mon — Fri: 07:00 — 17:00\nSat: 08:00 — 13:00" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent", description: "Thank you for contacting us. We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Get in Touch</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Contact Us
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-lg">
              Have a project in mind? Reach out to us for a free consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInSection>
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" name="name" required maxLength={100} className="mt-1.5 rounded-sm" placeholder="Your name" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5 rounded-sm" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" name="phone" type="tel" maxLength={30} className="mt-1.5 rounded-sm" placeholder="+49 123 456 789" />
                        </div>
                        <div>
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" name="subject" maxLength={150} className="mt-1.5 rounded-sm" placeholder="Project inquiry" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" name="message" required maxLength={2000} rows={6} className="mt-1.5 rounded-sm" placeholder="Tell us about your project..." />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12">
                        {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <FadeInSection delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>Contact Information</h2>
                    <div className="space-y-6">
                      {contactInfo.map((item) => (
                        <div key={item.title} className="flex gap-4">
                          <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                            <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <Card className="border-none shadow-md overflow-hidden">
                    <div className="h-52 bg-muted flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Google Maps</p>
                        <p className="text-xs">Map view will be displayed here</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
