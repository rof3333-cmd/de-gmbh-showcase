import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, ShieldCheck, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

import building4 from "@/assets/building-4.jpeg";
import building5 from "@/assets/building-5.jpg";

const timeline = [
  { year: "1999", title: "Firmengründung", desc: "BL-Bau GMBH wurde mit der Vision für qualitativ hochwertigen Bau gegründet." },
  { year: "2005", title: "Erstes großes Infrastrukturprojekt", desc: "Unser erstes großes Brücken- und Straßenbauprojekt wurde abgeschlossen." },
  { year: "2010", title: "Abteilung Tunnelbau", desc: "Erweiterung in den Bereich Tunnelbau und -technik." },
  { year: "2015", title: "Europäische Expansion", desc: "Projekte in mehreren europäischen Ländern." },
  { year: "2020", title: "350+ Projekte Meilenstein", desc: "Über 350 erfolgreich abgeschlossene Projekte erreicht." },
  { year: "2024", title: "Innovation & Wachstum", desc: "Weiterhin Grenzen verschieben mit moderner Bautechnologie." },
];

const values = [
  { icon: ShieldCheck, title: "Sicherheit zuerst", desc: "Kompromissloses Engagement für Arbeitssicherheit und strukturelle Integrität." },
  { icon: Award, title: "Qualität garantiert", desc: "Jedes Projekt erfüllt die höchsten europäischen Baustandards." },
  { icon: Clock, title: "Termingerecht", desc: "Zuverlässige Projektzeitpläne durch sorgfältige Planung." },
  { icon: Users, title: "Erfahrenes Team", desc: "120+ qualifizierte Ingenieure, Architekten und Bauspezialisten." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={building5} alt="Modernes Gebäude" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative container mx-auto px-5 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Über uns</div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Unsere Geschichte
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
              Über 25 Jahre Bauexzellenz im Tunnelbau, Wohnungsbau und Infrastruktur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInSection>
              <img src={building4} alt="Wohnbauprojekt" className="rounded-sm shadow-2xl w-full" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Wer wir sind</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                Auf Vertrauen gebaut, von Exzellenz angetrieben
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                Im Jahr 1999 gegründet, hat sich BL-Bau GMBH von einem kleinen regionalen Bauunternehmen zu einem führenden europäischen Baukonzern entwickelt. Wir sind spezialisiert auf Tunnelbau, Wohnungsbau und komplexe Infrastrukturprojekte.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                Unser Erfolg basiert auf technischer Expertise, innovativen Ingenieruslösungen und einem unerschütterlichen Engagement für Qualität. Jedes Projekt, das wir übernehmen, spiegelt unsere Hingabe an Präzision und Exzellenz wider.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Mit einem Team von über 120 Fachleuten, darunter Ingenieure, Architekten und qualifizierte Handwerker, verfügen wir über die Expertise, Projekte jeder Größenordnung zu realisieren.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-24 bg-muted">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="h-full border-none shadow-lg bg-card">
                <CardContent className="p-8 sm:p-10">
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Unsere Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Bauprojekte höchster Qualität termingerecht und im Budget zu liefern, wobei Sicherheit, Nachhaltigkeit und Kundenzufriedenheit in jeder Phase Priorität haben.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <Card className="h-full border-none shadow-lg bg-card">
                <CardContent className="p-8 sm:p-10">
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Unsere Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Das vertrauenswürdigste und innovativste Bauunternehmen Europas zu sein, das neue Maßstäbe für Qualität, Sicherheit und Ingenieurskunst setzt.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-16">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Unsere Werte</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Was uns antreibt</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <FadeInSection key={val.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <val.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk' }}>{val.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-24 bg-foreground text-background">
        <div className="container mx-auto px-5 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-16">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Unser Weg</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Firmengeschichte</h2>
            </div>
          </FadeInSection>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xs sm:text-sm shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px h-full bg-background/20 mt-2" />}
                  </div>
                  <div className="pb-6 sm:pb-8">
                    <div className="text-accent font-semibold text-sm mb-1">{item.year}</div>
                    <h3 className="font-bold text-base sm:text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>{item.title}</h3>
                    <p className="text-background/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
