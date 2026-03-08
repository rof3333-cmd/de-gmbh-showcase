import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, HardHat, Landmark, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeInSection } from "@/components/FadeInSection";

import tunnel1 from "@/assets/tunnel-1.png";
import tunnel2 from "@/assets/tunnel-2.png";
import building4 from "@/assets/building-4.jpeg";
import building5 from "@/assets/building-5.jpg";
import building1 from "@/assets/building-1.jpeg";
import infrastructure2 from "@/assets/infrastructure-2.png";

const services = [
  { icon: HardHat, title: "Tunnel Construction", desc: "State-of-the-art tunnel engineering and construction for transportation infrastructure." },
  { icon: Building2, title: "Residential Buildings", desc: "Modern residential complexes built with quality materials and expert craftsmanship." },
  { icon: Landmark, title: "Infrastructure Projects", desc: "Large-scale infrastructure development including bridges, roads, and utilities." },
  { icon: Wrench, title: "Concrete & Structural Work", desc: "Precision concrete works and structural engineering for demanding projects." },
];

const featuredProjects = [
  { image: tunnel1, title: "Tunnel Infrastructure", category: "Tunnel Construction" },
  { image: building4, title: "Residential Complex", category: "Residential" },
  { image: infrastructure2, title: "Bridge Construction", category: "Infrastructure" },
  { image: building5, title: "Modern Apartments", category: "Residential" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={tunnel2} alt="Construction site" className="w-full h-full object-cover" />
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
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-6" style={{ fontFamily: 'Space Grotesk' }}>
              Building the Future<br />
              <span className="text-gradient">with Precision</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Expert construction services in tunnel engineering, residential building, and infrastructure development. Trusted by clients across Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-sm text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto">
                <Link to="/contact">Get a Quote</Link>
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
            <AnimatedCounter end={25} suffix="+" label="Years Experience" />
            <AnimatedCounter end={350} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={120} suffix="+" label="Team Members" />
            <AnimatedCounter end={15} label="Countries" />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeInSection>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About GHBH Bau</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                Engineering Excellence<br />Since 1999
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                GHBH Bau is a leading construction company specializing in tunnel construction, residential buildings, and large-scale infrastructure projects. With over two decades of experience, we deliver projects that stand the test of time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our team of experienced engineers, architects, and construction professionals brings expertise and innovation to every project, ensuring the highest standards of quality and safety.
              </p>
              <Button asChild variant="outline" className="rounded-sm border-foreground text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto">
                <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="relative">
                <img src={building1} alt="Construction project" className="rounded-sm shadow-2xl w-full" />
                <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-accent text-accent-foreground p-4 sm:p-6 rounded-sm shadow-xl">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>25+</div>
                  <div className="text-xs sm:text-sm">Years of Excellence</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-24 bg-muted">
        <div className="container mx-auto px-5 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-10 sm:mb-16">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">What We Do</div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Our Services</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 0.1}>
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-500 group h-full cursor-pointer hover:-translate-y-2 bg-card">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent transition-colors duration-300">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3" style={{ fontFamily: 'Space Grotesk' }}>{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
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
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Featured Projects</h2>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 rounded-sm border-foreground w-full sm:w-fit">
                <Link to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={infrastructure2} alt="Construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Let's discuss your construction needs. Our team is ready to bring your vision to life with precision and excellence.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm text-base px-10 h-14">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
