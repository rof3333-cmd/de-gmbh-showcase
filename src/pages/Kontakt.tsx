import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
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
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Haben Sie Fragen oder möchten ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-6">Schreiben Sie uns</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" placeholder="Ihr vollständiger Name" required maxLength={100} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input id="email" name="email" type="email" placeholder="ihre@email.de" required maxLength={255} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+49 123 456 789" maxLength={30} className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea id="message" name="message" placeholder="Ihre Nachricht an uns..." required maxLength={1000} rows={5} className="mt-1.5" />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                    {loading ? "Wird gesendet..." : (
                      <>Nachricht senden <Send className="ml-1 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, title: "Adresse", text: "Musterstraße 123\n80000 München, Deutschland" },
                    { icon: Phone, title: "Telefon", text: "+49 (0) 89 123 456 78" },
                    { icon: Mail, title: "E-Mail", text: "info@baugmbh2.de" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <Card className="border-none shadow-md overflow-hidden">
                <div className="h-56 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Google Maps</p>
                    <p className="text-xs">Kartenansicht wird hier angezeigt</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
