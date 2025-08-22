import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { 
  Shield, 
  TrendingUp, 
  FileText, 
  Calculator, 
  PiggyBank,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Award
} from "lucide-react";

const Szolgaltatasok = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Nyugdíj-tervezés",
      description: "Komplex nyugdíj-tervezési szolgáltatás, amely magában foglalja a jelenlegi helyzet elemzését és a jövőbeli lehetőségek felmérését.",
      features: [
        "Állami nyugdíj optimalizálás",
        "Magánnyugdíjpénztár értékelés",
        "Önkéntes nyugdíjpénztár tanácsadás",
        "Nyugdíjbiztosítási termékek elemzése"
      ],
      price: "Egyedi árazás",
      duration: "90-120 perc"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Befektetési tanácsadás",
      description: "Professzionális befektetési stratégiák kidolgozása az Ön kockázatvállalási hajlandósága és céljainak megfelelően.",
      features: [
        "Portfólió elemzés és optimalizálás",
        "Befektetési alapok kiválasztása",
        "Részvény befektetési stratégiák",
        "Alternatív befektetési lehetőségek"
      ],
      price: "25.000 Ft-tól",
      duration: "60-90 perc"
    },
    {
      icon: <FileText className="h-12 w-12 text-success" />,
      title: "Biztosítási konzultáció",
      description: "Teljes körű biztosítási igényfelmérés és a legmegfelelőbb biztosítási termékek kiválasztásában való segítségnyújtás.",
      features: [
        "Életbiztosítás tervezés",
        "Egészségbiztosítási tanácsadás", 
        "Vagyonbiztosítás optimalizálás",
        "Üzleti biztosítások"
      ],
      price: "20.000 Ft-tól",
      duration: "60 perc"
    },
    {
      icon: <Calculator className="h-12 w-12 text-warning" />,
      title: "Adóoptimalizálás",
      description: "Legális adóoptimalizálási lehetőségek feltárása és személyre szabott adóstratégiák kidolgozása.",
      features: [
        "SZÉP kártya optimalizálás",
        "Cafeteria tervezés",
        "Önfoglalkoztatás adózása",
        "Befektetési termékek adózása"
      ],
      price: "30.000 Ft-tól",
      duration: "90 perc"
    },
    {
      icon: <PiggyBank className="h-12 w-12 text-primary" />,
      title: "Megtakarítási tervek",
      description: "Célzott megtakarítási stratégiák kidolgozása különböző pénzügyi célokhoz és időhorizontokhoz.",
      features: [
        "Célzott megtakarítási tervek",
        "Liquiditás menedzsment",
        "Infláció elleni védelem",
        "Befektetési megtakarítások"
      ],
      price: "15.000 Ft-tól",
      duration: "45-60 perc"
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Családi pénzügyi tervezés",
      description: "Komplex családi pénzügyi stratégiák kidolgozása, generációs vagyonátadás tervezése.",
      features: [
        "Családi költségvetés optimalizálás",
        "Gyermekek oktatási költségeinek tervezése",
        "Generációs vagyonátadás",
        "Családi befektetési stratégiák"
      ],
      price: "35.000 Ft-tól",
      duration: "120 perc"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Ingyenes konzultáció",
      description: "Megismerkedünk, felmérjük jelenlegi pénzügyi helyzetét és céljait."
    },
    {
      step: "02", 
      title: "Részletes elemzés",
      description: "Alapos pénzügyi elemzést készítünk és feltárjuk a lehetőségeket."
    },
    {
      step: "03",
      title: "Stratégia kidolgozása",
      description: "Személyre szabott pénzügyi tervet dolgozunk ki az Ön számára."
    },
    {
      step: "04",
      title: "Megvalósítás és követés",
      description: "Segítünk a terv megvalósításában és folyamatosan nyomon követjük."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Szolgáltatásaink
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Komplex pénzügyi tanácsadási szolgáltatások minden élethelyzethez. 
                Szakértőink segítenek megtalálni a legjobb megoldást az Ön számára.
              </p>
              <Link
                to="/kapcsolat"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                         inline-flex items-center space-x-2"
              >
                <span>Ingyenes konzultáció</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="card-professional group hover:scale-105 transition-transform duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-6 mt-auto">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                    
                    <Link
                      to="/kapcsolat"
                      className="w-full btn-primary text-center block"
                    >
                      Időpontot kérek
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Hogyan dolgozunk?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Strukturált, átlátható folyamatot követünk, hogy a legjobb eredményt 
                érjük el az Ön pénzügyi céljainak megvalósításában.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center 
                                text-xl font-bold mb-4 mx-auto shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Miért válasszon minket?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">15+ év tapasztalat</h3>
                      <p className="text-muted-foreground">
                        Több mint másfél évtizedes tapasztalat a pénzügyi tanácsadásban.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">1500+ elégedett ügyfél</h3>
                      <p className="text-muted-foreground">
                        Büszkék vagyunk arra, hogy ügyfeleink 97%-a ajánlja szolgáltatásainkat.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-success mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Megbízható partnerség</h3>
                      <p className="text-muted-foreground">
                        Hosszú távú partnerként gondolunk ügyfeleinkre és folyamatosan támogatjuk őket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Kezdjük egy ingyenes konzultációval!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ismerjük meg egymást és beszéljük át, hogyan segíthetünk 
                    pénzügyi céljainak elérésében.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Időtartam:</span>
                      <span className="font-semibold">60 perc</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Forma:</span>
                      <span className="font-semibold">Online vagy személyesen</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Ár:</span>
                      <span className="font-bold text-success text-xl">Ingyenes</span>
                    </div>
                  </div>

                  <Link
                    to="/kapcsolat"
                    className="w-full btn-hero"
                  >
                    Időpontot foglalok
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Készen áll a változásra?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Ne halassza tovább! Kezdje el még ma pénzügyi jövőjének tervezését 
              szakértő segítségével.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kapcsolat"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Ingyenes konzultáció
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

export default Szolgaltatasok;