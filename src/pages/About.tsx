import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

import building4 from "@/assets/building-4.jpeg";
import building5 from "@/assets/building-5.jpg";

const timeline = [
  { year: "1999", title: "Company Founded", desc: "GHBH Bau was established with a vision for quality construction." },
  { year: "2005", title: "First Major Infrastructure Project", desc: "Completed our first large-scale bridge and road project." },
  { year: "2010", title: "Tunnel Construction Division", desc: "Expanded into tunnel engineering and construction." },
  { year: "2015", title: "European Expansion", desc: "Projects across multiple European countries." },
  { year: "2020", title: "350+ Projects Milestone", desc: "Reached over 350 successfully completed projects." },
  { year: "2024", title: "Innovation & Growth", desc: "Continuing to push boundaries with modern construction technology." },
];

const values = [
  { icon: ShieldCheck, title: "Safety First", desc: "Uncompromising commitment to workplace safety and structural integrity." },
  { icon: Award, title: "Quality Assured", desc: "Every project meets the highest European construction standards." },
  { icon: Clock, title: "On-Time Delivery", desc: "Reliable project timelines backed by meticulous planning." },
  { icon: Users, title: "Expert Team", desc: "120+ skilled engineers, architects, and construction specialists." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={building5} alt="Modern building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About Us</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Our Story
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Over 25 years of building excellence in tunnel construction, residential development, and infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <img src={building4} alt="Residential project" className="rounded-sm shadow-2xl w-full" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Who We Are</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                Built on Trust, Driven by Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1999, GHBH Bau has grown from a small regional construction firm into a leading European construction company. We specialize in tunnel construction, residential buildings, and complex infrastructure projects.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our success is built on a foundation of technical expertise, innovative engineering solutions, and an unwavering commitment to quality. Every project we undertake reflects our dedication to precision and excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a team of over 120 professionals, including engineers, architects, and skilled tradespeople, we have the expertise to handle projects of any scale — from individual residential buildings to massive tunnel infrastructure.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInSection>
              <Card className="h-full border-none shadow-lg bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver construction projects of the highest quality, on time and within budget, while prioritizing safety, sustainability, and client satisfaction at every stage.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <Card className="h-full border-none shadow-lg bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and innovative construction company in Europe, setting new standards for quality, safety, and engineering excellence in every project we build.
                  </p>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Values</div>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>What Drives Us</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Our Journey</div>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Company Timeline</h2>
            </div>
          </FadeInSection>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px h-full bg-background/20 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-accent font-semibold text-sm mb-1">{item.year}</div>
                    <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Space Grotesk' }}>{item.title}</h3>
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
