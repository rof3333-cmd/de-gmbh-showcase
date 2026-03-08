import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import building4 from "@/assets/building-4.jpeg";

const About = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground">
        <div className="relative container mx-auto px-5 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Über uns</div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-background mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Kontaktieren Sie uns
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-base sm:text-lg">
              Ihr Partner für den Hoch-, Tief- und Umbau!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            <FadeInSection>
              <img src={building4} alt="Bauprojekt" className="rounded-sm shadow-2xl w-full" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="text-muted-foreground space-y-5 text-sm sm:text-base leading-relaxed">
                <p>
                  Sie träumen von den eigenen vier Wänden oder suchen einen zuverlässigen Partner für Tiefbauprojekte?
                  Dann sind Sie bei uns genau richtig!
                </p>
                <p>
                  Ob Neubau, Umbau, Fundamentarbeiten oder umfangreiche Tiefbauprojekte –
                  wir bringen Ihre Visionen in die Realität.
                </p>
                <p>
                  Mit Erfahrung, Präzision und einem starken Team stehen wir Ihnen von der Planung bis zur Umsetzung zur Seite.
                </p>
                <p>
                  Lassen Sie uns gemeinsam Ihr Bauvorhaben verwirklichen!
                  Kontaktieren Sie uns jetzt für eine unverbindliche Beratung –
                  wir freuen uns auf Ihr Projekt!
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent shrink-0" />
                    <span>blbau@hotmail.de</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <span>+49 5663 939 0276</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-accent shrink-0" />
                    <span>Verladestraße 2, 34286 Spangenberg</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;