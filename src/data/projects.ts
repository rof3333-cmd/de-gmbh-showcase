export type ProjectCategory = "hochbau" | "tiefbau";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wohnanlage München-Süd",
    description: "Neubau einer modernen Wohnanlage mit 24 Einheiten, energieeffiziente Bauweise nach KfW-55 Standard.",
    category: "hochbau",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Bürogebäude Frankfurt",
    description: "Errichtung eines 8-stöckigen Bürokomplexes mit moderner Glasfassade und Tiefgarage.",
    category: "hochbau",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Straßensanierung B12",
    description: "Vollständige Sanierung der Bundesstraße B12 auf einer Länge von 5,3 km inkl. Entwässerung.",
    category: "tiefbau",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Kanalbau Stadtgebiet",
    description: "Verlegung von 3,8 km Abwasserkanälen im innerstädtischen Bereich mit minimalem Verkehrseingriff.",
    category: "tiefbau",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Industriehalle Augsburg",
    description: "Stahlbau-Industriehalle mit 2.500 m² Nutzfläche, Kranbahn und Sozialtrakt.",
    category: "hochbau",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Brückensanierung A8",
    description: "Instandsetzung und Verstärkung einer Autobahnbrücke, Tragfähigkeitserhöhung nach aktueller Norm.",
    category: "tiefbau",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
  },
];
