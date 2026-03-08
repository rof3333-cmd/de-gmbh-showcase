import { ReactNode, useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X, Building2, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { to: "/", label: "Startseite", icon: Home },
  { to: "/projekte", label: "Projekte", icon: Building2 },
  { to: "/kontakt", label: "Kontakt", icon: Phone },
];

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <NavLink to="/" className="text-xl font-bold tracking-wider">
            BAU <span className="text-secondary">GMBH 2</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary-foreground/10"
                activeClassName="bg-primary-foreground/15"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-primary-foreground/10 pb-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-6 py-3 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
                activeClassName="bg-primary-foreground/15"
                onClick={() => setMobileOpen(false)}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">
                BAU <span className="text-secondary">GMBH 2</span>
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Ihr zuverlässiger Partner für Hochbau und Tiefbau. Qualität und Erfahrung seit Jahren.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} className="hover:text-secondary transition-colors">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kontakt</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>Musterstraße 123, 80000 München</li>
                <li>Tel: +49 (0) 89 123 456 78</li>
                <li>E-Mail: info@baugmbh2.de</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} BAU GMBH 2. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
