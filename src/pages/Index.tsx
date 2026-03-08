import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, HardHat, Landmark, Wrench, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeInSection } from "@/components/FadeInSection";

import tunnel1 from "@/assets/tunnel-1.png";
import tunnel2 from "@/assets/tunnel-2.png";
import tunnel3 from "@/assets/tunnel-3.jpg";
import building4 from "@/assets/building-4.jpeg";
import building5 from "@/assets/building-5.jpg";
import building1 from "@/assets/building-1.jpeg";
import infrastructure2 from "@/assets/infrastructure-2.png";

const services = [
  { icon: Building2, title: "Wohn- und Gewerbebauten", desc: "Wir schaffen Räume, die den Anforderungen des modernen Lebens entsprechen." },
  { icon: HardHat, title: "Infrastrukturprojekte", desc: "Tunnel die Menschen und Gemeinschaften verbinden." },
  { icon: Compass, title: "Beratung und Planung", desc: "Wir kombinieren Erfahrung und Innovation, um funktionale Lösungen zu gestalten." },
];

const featuredProjects = [
  { image: tunnel1, title: "Tunnelinfrastruktur", category: "Tunnelbau" },
  { image: building4, title: "Wohnkomplex Hessen", category: "Wohnbau" },
  { image: infrastructure2, title: "Brückenbau", category: "Infrastruktur" },
  { image: building5, title: "Moderne Wohnanlage", category: "Wohnbau" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={tunnel2} alt="Baustelle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        </div>
        <div className="relative container mx-auto px-5 lg:px-8 py-24 pt-28 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-1 bg-accent mb-6 md:mb-8"
            />
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-2 md:mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              BL-BAU GMBH
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white/60 mb-4 md:mb-6" style={{ fontFamily: 'Space Grotesk' }}>
              BAUUNTERNEHMEN
            </h2>
            <p className="text-sm sm:text-base font-semibold text-white/90 mb-2">
              Bauen für die Zukunft, ein Fundament für den Erfolg.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Unser Bauunternehmen widmet sich der Schaffung innovativer und langlebiger Bauprojekte.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                <Link to="/projekte">
                  Projekte ansehen <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-foreground text-background py-10 sm:py-16">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <AnimatedCounter end={25} suffix="+" label="Jahre Erfahrung" />
            <AnimatedCounter end={350} suffix="+" label="Projekte abgeschlossen" />
            <AnimatedCounter end={120} suffix="+" label="Teammitglieder" />
            <AnimatedCounter end={15} label="Länder" />
          </div>
        </div>
      </section>

      {/* Fachwissen Section - from screenshot */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInSection>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Der Bau der Zukunft</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                Unser Fachwissen umfasst ein breites Spektrum an Dienstleistungen, darunter:
              </h2>
              <div className="space-y-6 mb-8">
                {services.map((service, i) => (
                  <FadeInSection key={service.title} delay={i * 0.1}>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-base sm:text-lg underline decoration-accent underline-offset-4 mb-1" style={{ fontFamily: 'Space Grotesk' }}>
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
              <div className="bg-accent/10 border-l-4 border-accent p-4 sm:p-6 rounded-r-sm">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Wir schaffen sichere, funktionale und nachhaltige Bauwerke, die das Leben von Gemeinschaften in der gesamten Region verbessern.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative">
                <img src={tunnel3} alt="Tunnelbau" className="rounded-sm shadow-2xl w-full" />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-14 sm:py-24 bg-muted">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInSection delay={0.2}>
              <div className="relative">
                <img src={building1} alt="Bauprojekt" className="rounded-sm shadow-2xl w-full" />
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>25+</div>
                  <div className="text-xs sm:text-sm">Jahre Exzellenz</div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Über BL-Bau GMBH</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                Bauen für die Zukunft,<br />seit 1999
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                BL-Bau GMBH ist ein führendes Bauunternehmen, spezialisiert auf Tunnelbau, Wohnungsbau und große Infrastrukturprojekte. Mit über zwei Jahrzehnten Erfahrung liefern wir Projekte, die die Zeit überdauern.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Unser Team aus erfahrenen Ingenieuren, Architekten und Baufachleuten bringt Expertise und Innovation in jedes Projekt ein und gewährleistet höchste Qualitäts- und Sicherheitsstandards.
              </p>
              <Button asChild variant="outline" className="rounded-sm border-foreground text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto">
                <Link to="/ueber-uns">Mehr über uns <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16">
              <div>
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Portfolio</div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Ausgewählte Projekte</h2>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-sm border-foreground w-full sm:w-fit">
                <Link to="/projekte">Alle Projekte ansehen <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredProjects.map((project, i) => (
              <FadeInSection key={project.title} delay={i * 0.1}>
                <Link to="/projects" className="group block relative overflow-hidden rounded-sm aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="text-xs text-accent uppercase tracking-wider mb-1 sm:mb-2">{project.category}</div>
                    <h3 className="text-base sm:text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>{project.title}</h3>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={infrastructure2} alt="Baustelle" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative container mx-auto px-5 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Space Grotesk' }}>
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-lg">
              Lassen Sie uns Ihre Bauvorhaben besprechen. Unser Team steht bereit, Ihre Vision mit Präzision und Exzellenz umzusetzen.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-sm sm:text-base px-8 sm:px-10 h-12 sm:h-14 w-full sm:w-auto">
              <Link to="/contact">
                Kontaktieren Sie uns <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
