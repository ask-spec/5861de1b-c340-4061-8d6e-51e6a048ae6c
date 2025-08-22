import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Főoldal", href: "/" },
    { name: "Szolgáltatások", href: "/szolgaltatasok" },
    { name: "Árlista", href: "/arlista" },
    { name: "Cikkek", href: "/cikkek" },
    { name: "Hírek", href: "/hirek" },
    { name: "Webináriumok", href: "/webinariumok" },
    { name: "Rólunk", href: "/rolunk" },
    { name: "Kapcsolat", href: "/kapcsolat" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-border/20 sticky top-0 z-50 shadow-soft">
      <nav className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-medium">
              <span className="text-white font-bold text-lg">NB</span>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">NyugdíjBiz</div>
              <div className="text-sm text-muted-foreground">Pénzügyi tanácsadás</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/kapcsolat"
              className="btn-accent"
            >
              Ingyenes konzultáció
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/kapcsolat"
                className="mt-4 btn-accent text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ingyenes konzultáció
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;