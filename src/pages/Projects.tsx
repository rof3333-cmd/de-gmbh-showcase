import { useState } from "react";
import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import building1 from "@/assets/building-1.jpeg";
import building2 from "@/assets/building-2.png";
import building3 from "@/assets/building-3.png";
import building4 from "@/assets/building-4.jpeg";
import building5 from "@/assets/building-5.jpg";
import tunnel1 from "@/assets/tunnel-1.png";
import tunnel2 from "@/assets/tunnel-2.png";
import tunnel3 from "@/assets/tunnel-3.jpg";
import infrastructure1 from "@/assets/infrastructure-1.png";
import infrastructure2 from "@/assets/infrastructure-2.png";

type Category = "all" | "tunnel" | "residential" | "infrastructure";

const projects = [
  { image: tunnel1, title: "Highway Tunnel — Phase 1", category: "tunnel" as const, desc: "Concrete lining and waterproofing for 2.4 km highway tunnel." },
  { image: building4, title: "Residential Complex Hessen", category: "residential" as const, desc: "Modern residential development with 6 family units." },
  { image: infrastructure2, title: "Autobahn Bridge Construction", category: "infrastructure" as const, desc: "Reinforced concrete bridge deck for A5 motorway extension." },
  { image: tunnel2, title: "Metro Tunnel Section B", category: "tunnel" as const, desc: "Underground metro tunnel with reinforcement mesh system." },
  { image: building5, title: "Modern Apartment Block", category: "residential" as const, desc: "3-storey apartment building with parking and modern finishes." },
  { image: infrastructure1, title: "Structural Reinforcement Works", category: "infrastructure" as const, desc: "Heavy rebar and formwork for underground structural walls." },
  { image: building1, title: "Multi-Unit Housing Rohbau", category: "residential" as const, desc: "Shell construction for multi-family residential building." },
  { image: tunnel3, title: "Tunnel Scaffold & Finishing", category: "tunnel" as const, desc: "Interior scaffold works and concrete finishing in tunnel section." },
  { image: building2, title: "Family Home Construction", category: "residential" as const, desc: "Single-family home with traditional masonry construction." },
  { image: building3, title: "Villa with Landscaping", category: "residential" as const, desc: "Luxury villa with retaining walls and site preparation." },
];

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "tunnel", label: "Tunnel Construction" },
  { value: "residential", label: "Residential" },
  { value: "infrastructure", label: "Infrastructure" },
];

const Projects = () => {
  const [filter, setFilter] = useState<Category>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground">
        <div className="relative container mx-auto px-4 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Portfolio</div>
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Our Projects
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-lg">
              Explore our portfolio of successfully completed construction projects across Europe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f.value)}
                className={`rounded-sm ${filter === f.value ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <Badge className="w-fit bg-accent text-accent-foreground mb-2 text-xs capitalize rounded-sm">{project.category}</Badge>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk' }}>{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
