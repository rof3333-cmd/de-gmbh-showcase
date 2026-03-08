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
  { icon: MapPin, title: "Adresse", text: "Verladestraße 2\n34286 Spangenberg" },
  { icon: Phone, title: "Telefon", text: "+49 5663 939 0276" },
  { icon: Mail, title: "E-Mail", text: "blbau@hotmail.de" },
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
              Ihr Partner für den Hoch-, Tief- und Umbau!
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
                   <div className="mb-8">
                     <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Über unsere Firma</h2>
                     <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                       <p>Sie träumen von den eigenen vier Wänden oder suchen einen zuverlässigen Partner für Tiefbauprojekte? Dann sind Sie bei uns genau richtig!</p>
                       <p>Ob Neubau, Umbau, Fundamentarbeiten oder umfangreiche Tiefbauprojekte – wir bringen Ihre Visionen in die Realität.</p>
                       <p>Mit Erfahrung, Präzision und einem starken Team stehen wir Ihnen von der Planung bis zur Umsetzung zur Seite.</p>
                       <p>Lassen Sie uns gemeinsam Ihr Bauvorhaben verwirklichen! Kontaktieren Sie uns jetzt für eine unverbindliche Beratung – wir freuen uns auf Ihr Projekt!</p>
                     </div>
                   </div>

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

                  <div className="rounded-sm overflow-hidden shadow-md">
                    <iframe
                      title="Google Maps - BL-Bau GMBH"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5!2d9.6627!3d51.1195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb3d4a5f5e1a1d%3A0x0!2sVerladestra%C3%9Fe+2%2C+34286+Spangenberg!5e0!3m2!1sde!2sde!4v1700000000000"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
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
