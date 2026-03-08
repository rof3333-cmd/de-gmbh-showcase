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
  { icon: MapPin, title: "Adresse", text: "Musterstraße 123\n60000 Frankfurt am Main\nDeutschland" },
  { icon: Phone, title: "Telefon", text: "+49 (0) 69 123 456 78" },
  { icon: Mail, title: "E-Mail", text: "info@bl-bau.de" },
  { icon: Clock, title: "Öffnungszeiten", text: "Mo — Fr: 07:00 — 17:00\nSa: 08:00 — 13:00" },
];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Nachricht gesendet", description: "Vielen Dank! Wir melden uns in Kürze bei Ihnen." });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-5 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Kontaktieren Sie uns</div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Kontakt
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-base sm:text-lg">
              Haben Sie ein Projekt im Sinn? Kontaktieren Sie uns für eine kostenlose Beratung und ein Angebot.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <FadeInSection>
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>Schreiben Sie uns</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" name="name" required maxLength={100} className="mt-1.5 rounded-sm" placeholder="Ihr Name" />
                        </div>
                        <div>
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5 rounded-sm" placeholder="ihre@email.de" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="phone">Telefon</Label>
                          <Input id="phone" name="phone" type="tel" maxLength={30} className="mt-1.5 rounded-sm" placeholder="+49 123 456 789" />
                        </div>
                        <div>
                          <Label htmlFor="subject">Betreff</Label>
                          <Input id="subject" name="subject" maxLength={150} className="mt-1.5 rounded-sm" placeholder="Projektanfrage" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">Nachricht *</Label>
                        <Textarea id="message" name="message" required maxLength={2000} rows={6} className="mt-1.5 rounded-sm" placeholder="Erzählen Sie uns von Ihrem Projekt..." />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12">
                        {loading ? "Wird gesendet..." : <><Send className="mr-2 h-4 w-4" /> Nachricht senden</>}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>

            <div className="lg:col-span-2">
              <FadeInSection delay={0.15}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>Kontaktinformationen</h2>
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

                  <Card className="border-none shadow-md overflow-hidden">
                    <div className="h-52 bg-muted flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Google Maps</p>
                        <p className="text-xs">Kartenansicht wird hier angezeigt</p>
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
