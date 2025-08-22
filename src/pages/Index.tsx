import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Users, CheckCircle, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Biztos pénzügyi jövő",
      description: "15+ éves tapasztalattal segítünk megtervezni nyugdíjas éveit és pénzügyi céljait."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Személyre szabott tanácsadás",
      description: "Minden ügyfél egyedi igényeit figyelembe véve dolgozunk ki optimális megoldásokat."
    },
    {
      icon: <Users className="h-8 w-8 text-success" />,
      title: "Tapasztalt szakértők",
      description: "Pénzügyi szakértőink folyamatosan képzik magukat a legújabb trendekről."
    }
  ];

  const services = [
    "Nyugdíj-tervezés és optimalizálás",
    "Befektetési tanácsadás",
    "Biztosítási konzultáció",
    "Adóoptimalizálási stratégiák",
    "Megtakarítási tervek"
  ];

  const testimonials = [
    {
      name: "Kovács Anna",
      role: "Nyugdíjas pedagógus",
      content: "Fantasztikus szakmai segítséget kaptam! A nyugdíjam most 40%-kal magasabb, mint korábban terveztem.",
      rating: 5
    },
    {
      name: "Nagy Péter",
      role: "Vállalkozó",
      content: "Az adóoptimalizálási stratégiáik segítségével évente jelentős összeget takarítok meg.",
      rating: 5
    },
    {
      name: "Szabó Mária", 
      role: "Közalkalmazott",
      content: "Professzionális, megbízható tanácsadás. Végre értem a pénzügyeimet!",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="section-container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Tervezze meg <span className="text-accent">biztos</span> pénzügyi jövőjét
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Professzionális nyugdíj- és pénzügyi tanácsadás 15+ éves tapasztalattal. 
                Első konzultációnk ingyenes!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/kapcsolat"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                           flex items-center space-x-2"
                >
                  <span>Ingyenes konzultáció</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/szolgaltatasok"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary 
                           px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Szolgáltatások
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent">1500+</div>
                  <div className="text-white/80">Elégedett ügyfél</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-white/80">Év tapasztalat</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">97%</div>
                  <div className="text-white/80">Ügyfél elégedettség</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Miért válasszon minket?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Több mint másfél évtized alatt szerzett tapasztalatunk és szakértelmünk 
                garantálja, hogy a legjobb megoldást találjuk az Ön számára.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card-professional text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Komplex pénzügyi szolgáltatások
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Teljes körű pénzügyi tanácsadást nyújtunk, hogy minden aspektusban 
                  optimalizálhassa pénzügyi helyzetét és jövőjét.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/szolgaltatasok"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Részletek</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="card-premium">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Ingyenes</div>
                  <div className="text-xl text-muted-foreground mb-6">Első konzultáció</div>
                  
                  <div className="space-y-3 text-left mb-8">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">60 perces személyes beszélgetés</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">Pénzügyi helyzet elemzése</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">Személyre szabott javaslatok</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">Online vagy személyesen</span>
                    </div>
                  </div>

                  <Link
                    to="/kapcsolat"
                    className="w-full btn-accent text-center block"
                  >
                    Időpontot kérek
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Mit mondanak ügyfeleink?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Büszkék vagyunk arra, hogy ügyfeleink elégedettek a szolgáltatásainkkal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card-professional">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Kezdje el még ma pénzügyi jövőjének tervezését!
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Ne halassza tovább! Foglaljon időpontot ingyenes konzultációnkra, 
              és tegye meg az első lépést a biztos pénzügyi jövő felé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kapcsolat"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Ingyenes konzultáció foglalása
              </Link>
              <Link
                to="/arlista"
                className="border-2 border-white text-white hover:bg-white hover:text-primary 
                         px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Árak megtekintése
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

export default Index;
