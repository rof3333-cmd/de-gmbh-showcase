import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HardHat, Building2, Landmark, Wrench, Cog, ArrowRight } from "lucide-react";

import tunnel1 from "@/assets/tunnel-1.png";

const services = [
  {
    icon: HardHat,
    title: "Tunnel Construction",
    desc: "Comprehensive tunnel engineering services including design, excavation, concrete lining, and finishing works. We handle projects from initial survey through to completion.",
    features: ["Cut-and-cover tunnels", "Bored tunnels", "Concrete lining systems", "Waterproofing solutions"],
  },
  {
    icon: Building2,
    title: "Residential Buildings",
    desc: "Modern residential construction from single-family homes to multi-unit apartment complexes. Energy-efficient designs built with premium materials.",
    features: ["Multi-family housing", "Single-family homes", "Energy-efficient design", "Turnkey solutions"],
  },
  {
    icon: Landmark,
    title: "Infrastructure Projects",
    desc: "Large-scale infrastructure development including bridges, highways, and transportation networks. Complex engineering solutions for demanding environments.",
    features: ["Bridge construction", "Highway development", "Transportation networks", "Utility systems"],
  },
  {
    icon: Wrench,
    title: "Concrete & Structural Work",
    desc: "Precision concrete works for foundations, structural elements, and specialized applications. Advanced formwork systems and reinforcement techniques.",
    features: ["Reinforced concrete", "Structural foundations", "Formwork systems", "Special concrete applications"],
  },
  {
    icon: Cog,
    title: "Engineering Solutions",
    desc: "Technical consulting and engineering services for complex construction challenges. Structural analysis, project planning, and innovative solutions.",
    features: ["Structural analysis", "Project planning", "Technical consulting", "Quality assurance"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={tunnel1} alt="Tunnel construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Do</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Our Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Comprehensive construction solutions from tunnel engineering to residential development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.05}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500 group bg-card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-20 bg-accent/5 group-hover:bg-accent/10 transition-colors flex items-center justify-center py-6 md:py-0">
                        <service.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1 p-8">
                        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk' }}>{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
              Need a Custom Solution?
            </h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">
              Contact us to discuss your project requirements. Our engineering team will develop the perfect solution.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-14 px-10">
              <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
