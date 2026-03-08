import { useState } from "react";
import Layout from "@/components/Layout";
import { projects, type ProjectCategory } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Filter = "alle" | ProjectCategory;

const Projekte = () => {
  const [filter, setFilter] = useState<Filter>("alle");

  const filtered = filter === "alle" ? projects : projects.filter((p) => p.category === filter);

  const filters: { value: Filter; label: string }[] = [
    { value: "alle", label: "Alle" },
    { value: "hochbau", label: "Hochbau" },
    { value: "tiefbau", label: "Tiefbau" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Unsere Projekte</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Eine Auswahl unserer erfolgreich abgeschlossenen Bau­projekte im Hoch- und Tiefbau.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex justify-center gap-2 mb-10">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={filter === f.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f.value)}
                className={filter === f.value ? "bg-secondary text-secondary-foreground hover:bg-secondary/90" : ""}
              >
                {f.label}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Card key={project.id} className="overflow-hidden border-none shadow-md group hover:shadow-xl transition-shadow">
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs capitalize">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projekte;
