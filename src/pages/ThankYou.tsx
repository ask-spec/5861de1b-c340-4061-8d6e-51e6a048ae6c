import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Phone, Mail, Calendar } from "lucide-react";

const ThankYou = () => {
  return (
    <>
      <Header />
      <main>
        {/* Thank You Section */}
        <section className="py-20 lg:py-32 bg-gradient-hero text-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Köszönjük!
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Üzenetét sikeresen megkaptuk. Munkatársunk 24 órán belül 
                felveszi Önnel a kapcsolatot.
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-8 inline-block">
                <h2 className="text-2xl font-semibold mb-4">Mit várhat tőlünk?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Gyors válasz</h3>
                      <p className="text-sm text-white/80">24 órán belül kapcsolatba lépünk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Időpont egyeztetés</h3>
                      <p className="text-sm text-white/80">Ingyenes konzultáció foglalása</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Személyre szabott megoldás</h3>
                      <p className="text-sm text-white/80">Az Ön igényeihez igazított javaslatok</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Mi a következő lépés?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Íme, hogy fog zajlani a folyamat az első kapcsolatfelvételtől kezdve
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-professional text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center 
                                text-xl font-bold mb-4 mx-auto">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Visszahívás
                  </h3>
                  <p className="text-muted-foreground">
                    Munkatársunk 24 órán belül felhívja vagy e-mailben válaszol, 
                    hogy egyeztessen az ingyenes konzultáció időpontjáról.
                  </p>
                </div>

                <div className="card-professional text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center 
                                text-xl font-bold mb-4 mx-auto">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Ingyenes konzultáció
                  </h3>
                  <p className="text-muted-foreground">
                    60 perces személyes vagy online beszélgetés, ahol megismerjük 
                    pénzügyi helyzetét és céljait.
                  </p>
                </div>

                <div className="card-professional text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center 
                                text-xl font-bold mb-4 mx-auto">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Személyre szabott javaslat
                  </h3>
                  <p className="text-muted-foreground">
                    Az Ön helyzetéhez igazított megoldásokat és szolgáltatási 
                    csomagokat ajánlunk fel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sürgős kérdése van?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ne várjon a visszahívásra! Vegye fel velünk a kapcsolatot azonnal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href="tel:+3617894532"
                  className="card-professional group hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-primary group-hover:text-white mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Telefonos hívás</h3>
                    <p className="text-muted-foreground group-hover:text-white/80 mb-4">
                      Hívjon minket munkaidőben
                    </p>
                    <div className="font-semibold text-primary group-hover:text-white">
                      +36 1 789 4532
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:info@nyugbiz.biz"
                  className="card-professional group hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <div className="text-center">
                    <Mail className="h-8 w-8 text-accent group-hover:text-white mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">E-mail</h3>
                    <p className="text-muted-foreground group-hover:text-white/80 mb-4">
                      Írjon nekünk bármikor
                    </p>
                    <div className="font-semibold text-accent group-hover:text-white">
                      info@nyugbiz.biz
                    </div>
                  </div>
                </a>

                <Link 
                  to="/kapcsolat"
                  className="card-professional group hover:bg-success hover:text-white transition-all duration-300"
                >
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-success group-hover:text-white mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Újabb üzenet</h3>
                    <p className="text-muted-foreground group-hover:text-white/80 mb-4">
                      Küldjön másik üzenetet
                    </p>
                    <div className="font-semibold text-success group-hover:text-white">
                      Kapcsolat oldal
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Amíg vár, böngésszen weboldalunkon
              </h2>
              <p className="text-lg text-muted-foreground">
                Hasznos információkat találhat szolgáltatásainkról és árainkról
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/szolgaltatasok"
                className="card-professional group hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2">Szolgáltatások</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tekintse meg teljes szolgáltatási kínálatunkat
                </p>
                <div className="flex items-center text-primary group-hover:text-accent">
                  <span className="text-sm font-medium">Részletek</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>

              <Link 
                to="/arlista"
                className="card-professional group hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2">Árlista</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Átlátható árazás minden szolgáltatásunkra
                </p>
                <div className="flex items-center text-primary group-hover:text-accent">
                  <span className="text-sm font-medium">Árak</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>

              <Link 
                to="/cikkek"
                className="card-professional group hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2">Hasznos cikkek</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Pénzügyi tippek és tanácsok blogunkban
                </p>
                <div className="flex items-center text-primary group-hover:text-accent">
                  <span className="text-sm font-medium">Olvasd</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>

              <Link 
                to="/webinariumok"
                className="card-professional group hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-semibold text-foreground mb-2">Webináriumok</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Online képzések és checklista-k
                </p>
                <div className="flex items-center text-primary group-hover:text-accent">
                  <span className="text-sm font-medium">Nézd meg</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default ThankYou;