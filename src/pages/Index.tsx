import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, HardHat, ArrowRight, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=800&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              BAU <span className="text-secondary">GMBH 2</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Ihr kompetenter Partner für Hoch- und Tiefbau. Wir realisieren Ihre Bauprojekte mit höchster Qualität, termingerecht und zuverlässig.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                <Link to="/projekte">
                  Unsere Projekte <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Über uns</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              BAU GMBH 2 steht für erstklassige Bauqualität im Hoch- und Tiefbau. Mit einem erfahrenen Team und modernster Technik setzen wir Projekte jeder Größe termingerecht und kosteneffizient um. Von Wohnanlagen über Gewerbeobjekte bis hin zu Infrastrukturprojekten — wir bauen Ihre Zukunft.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Qualität", desc: "Höchste Standards bei Material und Ausführung." },
              { icon: Clock, title: "Termintreue", desc: "Pünktliche Fertigstellung — garantiert." },
              { icon: Users, title: "Erfahrung", desc: "Ein erfahrenes Team für jedes Projekt." },
            ].map((item) => (
              <Card key={item.title} className="text-center border-none shadow-md">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unsere Leistungen</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Hochbau</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wohn- und Geschäftsgebäude, Industriehallen, Sanierungen und Umbauten. Schlüsselfertig aus einer Hand.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <HardHat className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold">Tiefbau</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Straßenbau, Kanalbau, Brückensanierung und Erdarbeiten. Infrastruktur für die Zukunft.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">Bereit für Ihr nächstes Projekt?</h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihre Anfrage.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            <Link to="/kontakt">
              Jetzt Kontakt aufnehmen <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
