import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-white border-t border-border/20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-medium">
                <span className="text-white font-bold text-lg">NB</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">NyugdíjBiz Kft.</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Professzionális pénzügyi és nyugdíj-tanácsadás több mint 15 éves tapasztalattal. 
              Segítünk megtervezni biztos pénzügyi jövőjét.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/szolgaltatasok" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Szolgáltatások
                </Link>
              </li>
              <li>
                <Link to="/arlista" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Árlista
                </Link>
              </li>
              <li>
                <Link to="/webinariumok" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Webináriumok
                </Link>
              </li>
              <li>
                <Link to="/rolunk" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Szolgáltatások</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Nyugdíj-tervezés</li>
              <li className="text-sm text-muted-foreground">Befektetési tanácsadás</li>
              <li className="text-sm text-muted-foreground">Biztosítási konzultáció</li>
              <li className="text-sm text-muted-foreground">Adóoptimalizálás</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kapcsolat</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Kossuth Lajos utca 14<br />
                  1053 Budapest, Magyarország
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">+36 1 789 4532</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">info@nyugbiz.biz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 NyugdíjBiz Kft. Minden jog fenntartva.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/gdpr" className="text-muted-foreground hover:text-primary transition-colors">
                GDPR
              </Link>
              <Link to="/cookie-szabalyzat" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie szabályzat
              </Link>
              <Link to="/felhasznalasi-feltetelek" className="text-muted-foreground hover:text-primary transition-colors">
                Feltételek
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            <div>Cégjegyzékszám: 01-09-384726</div>
            <div>Adószám: 28947654-2-41</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;