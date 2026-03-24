import { useState } from "react";
import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

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

const categoryLabels: Record<string, string> = {
  tunnel: "Tunnelbau",
  residential: "Wohnungsbau",
  infrastructure: "Infrastruktur"
};

const projects = [
{ image: tunnel1, title: "Tunnelbauprojekt für urbane Mobilität", category: "tunnel" as const, desc: "Modernste Tunnelbauarbeiten für die Verkehrsinfrastruktur der Zukunft." },
{ image: building4, title: "Schlüsselfertiges Bauen in Hessen", category: "residential" as const, desc: "Moderne Wohnanlage mit 6 Familieneinheiten in Hessen." },
{ image: infrastructure2, title: "Bauarbeiten im Freien", category: "infrastructure" as const, desc: "Großflächige Bewehrungsarbeiten für eine Autobahnbrücke." },
{ image: tunnel2, title: "Das Innere eines Tunnels im Bau", category: "tunnel" as const, desc: "Unterirdischer Tunnelabschnitt mit Bewehrungsgittersystem." },
{ image: building5, title: "Errichtung eines modernen Mehrfamilienhauses mit 8 Wohneinheiten", category: "residential" as const, desc: "Modernes 3-stöckiges Mehrfamilienhaus mit Parkplatz." },
{ image: infrastructure1, title: "Detail der Bewehrung auf der Baustelle, mit Fokus auf Metallgitter und Tragstrukturen", category: "infrastructure" as const, desc: "Schwere Bewehrungs- und Schalungsarbeiten für unterirdische Tragwände." },
{ image: building1, title: "Schlüsselfertiges Bauen im Herzen von Karlsruhe", category: "residential" as const, desc: "Rohbau für ein Mehrfamilienhaus in Karlsruhe." },
{ image: tunnel3, title: "Tunnelausbau und Betonarbeiten", category: "tunnel" as const, desc: "Innengerüstarbeiten und Betonarbeiten im Tunnelabschnitt." },
{ image: building2, title: "Einfamilienhaus in Bad Zwesten", category: "residential" as const, desc: "Einfamilienhaus in traditioneller Mauerwerksbauweise." },
{ image: building3, title: "Einfamilienhaus in Bad Zwesten — Außenansicht", category: "residential" as const, desc: "Villa mit Stützmauern und Geländevorbereitung." }];


const filters: {value: Category;label: string;}[] = [
{ value: "all", label: "Alle Projekte" },
{ value: "tunnel", label: "Tunnelbau" },
{ value: "residential", label: "Wohnungsbau" },
{ value: "infrastructure", label: "Infrastruktur" }];


const Projects = () => {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-foreground">
        <div className="relative container mx-auto px-5 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Portfolio</div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-background mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Unsere Projekte
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-base sm:text-lg">
              Entdecken Sie unser Portfolio erfolgreich abgeschlossener Bauprojekte..
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) =>
            <Button
              key={f.value}
              variant={filter === f.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.value)}
              className={`rounded-sm ${filter === f.value ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}>
              
                {f.label}
              </Button>
            )}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) =>
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setSelectedProject(project)}>
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" />
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <Badge className="w-fit bg-accent text-accent-foreground mb-2 text-xs capitalize rounded-sm">{categoryLabels[project.category]}</Badge>
                  <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Space Grotesk' }}>{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 border-none bg-card overflow-hidden rounded-sm">
          {selectedProject &&
          <div>
              <div className="relative">
                <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[70vh] object-cover" />
              
              </div>
              <div className="p-5 sm:p-6">
                <Badge className="bg-accent text-accent-foreground mb-3 text-xs rounded-sm">
                  {categoryLabels[selectedProject.category]}
                </Badge>
                <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>
            </div>
          }
        </DialogContent>
      </Dialog>
    </Layout>);

};

export default Projects;