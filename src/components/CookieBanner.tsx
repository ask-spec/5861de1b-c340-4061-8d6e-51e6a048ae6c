import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("cookiesAccepted", "all");
    setIsVisible(false);
  };

  const acceptNecessaryCookies = () => {
    localStorage.setItem("cookiesAccepted", "necessary");
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-strong">
      <div className="section-container py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start space-x-3 flex-1">
            <Cookie className="text-accent mt-1" size={20} />
            <div className="text-sm">
              <p className="text-foreground font-medium mb-1">
                Cookie-k használata
              </p>
              <p className="text-muted-foreground">
                Weboldalunk cookie-kat használ a legjobb felhasználói élmény biztosítása érdekében. 
                Az oldal használatával elfogadja a cookie-k használatát. 
                <Link 
                  to="/cookie-szabalyzat" 
                  className="text-primary hover:underline ml-1"
                >
                  További információ
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={acceptNecessaryCookies}
              className="px-4 py-2 text-sm border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              Csak szükséges
            </button>
            <button
              onClick={acceptAllCookies}
              className="btn-primary text-sm"
            >
              Összes elfogadása
            </button>
            <button
              onClick={closeBanner}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;