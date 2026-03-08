import { ReactNode, useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>B</span>
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`} style={{ fontFamily: 'Space Grotesk' }}>
              BL-BAU <span className="text-accent">GMBH</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  scrolled ? 'text-foreground hover:text-accent' : 'text-white/80 hover:text-white'
                }`}
                activeClassName={scrolled ? '!text-accent' : '!text-white'}
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild size="sm" className="ml-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm">
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-3.5 rounded-md text-base font-medium text-foreground hover:bg-muted transition-colors"
                    activeClassName="!text-accent bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="pt-2 px-4">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm h-12">
                    <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</NavLink>
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-5 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>B</span>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>
                  BL-BAU <span className="text-accent">GMBH</span>
                </span>
              </div>
              <p className="text-sm text-background/60 leading-relaxed">
                Bauen für die Zukunft mit Präzision. Ihr zuverlässiger Partner für Tunnelbau, Wohnungsbau und Infrastrukturprojekte.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/60">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className="hover:text-accent transition-colors">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Services</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Tunnel Construction</li>
                <li>Residential Buildings</li>
                <li>Infrastructure Projects</li>
                <li>Concrete & Structural Work</li>
                <li>Engineering Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Space Grotesk' }}>Contact</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>Musterstraße 123</li>
                <li>60000 Frankfurt am Main</li>
                <li>Tel: +49 (0) 69 123 456 78</li>
                <li>info@ghbh-bau.de</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-background/40">
            <p>© {new Date().getFullYear()} GHBH Bau. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
