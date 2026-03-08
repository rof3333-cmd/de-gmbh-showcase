import Layout from "@/components/Layout";
import { FadeInSection } from "@/components/FadeInSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, Briefcase, Heart, TrendingUp, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear advancement paths and continuous professional development." },
  { icon: Users, title: "Great Team", desc: "Work alongside experienced engineers and construction professionals." },
  { icon: Heart, title: "Work-Life Balance", desc: "Competitive hours, paid leave, and employee wellness programs." },
  { icon: Briefcase, title: "Exciting Projects", desc: "Work on landmark tunnel, building, and infrastructure projects." },
];

const openPositions = [
  { title: "Senior Site Engineer", location: "Frankfurt am Main", type: "Full-time" },
  { title: "Tunnel Construction Foreman", location: "Munich", type: "Full-time" },
  { title: "Structural Engineer", location: "Frankfurt am Main", type: "Full-time" },
  { title: "Project Manager — Infrastructure", location: "Berlin", type: "Full-time" },
  { title: "Construction Worker (Facharbeiter)", location: "Various Locations", type: "Full-time" },
];

const Careers = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Application Sent", description: "Thank you! We will review your application and contact you soon." });
      (e.target as HTMLFormElement).reset();
      setLoading(false);
    }, 800);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Careers</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
              Join Our Team
            </h1>
            <p className="text-background/60 max-w-2xl mx-auto text-lg">
              Be part of a team that builds the future. We're looking for talented professionals who share our passion for excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Why GHBH Bau?</div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Why Work With Us</h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeInSection key={b.title} delay={i * 0.1}>
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full bg-card text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <b.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>{b.title}</h3>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Opportunities</div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Open Positions</h2>
            </div>
          </FadeInSection>
          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((pos, i) => (
              <FadeInSection key={pos.title} delay={i * 0.05}>
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-card group cursor-pointer hover:-translate-y-0.5">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold group-hover:text-accent transition-colors" style={{ fontFamily: 'Space Grotesk' }}>{pos.title}</h3>
                      <p className="text-muted-foreground text-sm">{pos.location} · {pos.type}</p>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-sm shrink-0 w-fit">Apply Now</Button>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInSection>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Apply</div>
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>Send Your Application</h2>
              </div>
              <Card className="border-none shadow-lg bg-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required maxLength={100} className="mt-1.5 rounded-sm" placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5 rounded-sm" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" maxLength={30} className="mt-1.5 rounded-sm" placeholder="+49 123 456 789" />
                      </div>
                      <div>
                        <Label htmlFor="position">Position of Interest</Label>
                        <Input id="position" name="position" maxLength={100} className="mt-1.5 rounded-sm" placeholder="e.g., Site Engineer" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Cover Letter / Message *</Label>
                      <Textarea id="message" name="message" required maxLength={2000} rows={5} className="mt-1.5 rounded-sm" placeholder="Tell us about your experience and why you'd like to join GHBH Bau..." />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12">
                      {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
