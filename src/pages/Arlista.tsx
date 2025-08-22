import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { CheckCircle, X, Star, Users, Clock, Shield } from "lucide-react";

const Arlista = () => {
  const packages = [
    {
      name: "Alapcsomag",
      price: "19.900",
      period: "egyszeri díj",
      description: "Ideális a pénzügyi tudatosság fejlesztéséhez",
      popular: false,
      features: [
        "60 perces online konzultáció",
        "Személyes pénzügyi helyzet elemzése",
        "Alapvető javaslatok",
        "Email támogatás 30 napig",
        "Pénzügyi tudatosság e-book"
      ],
      notIncluded: [
        "Részletes befektetési terv",
        "Folyamatos konzultáció",
        "Telefonos támogatás"
      ]
    },
    {
      name: "Prémium csomag",
      price: "49.900",
      period: "egyszeri díj",
      description: "Komplex pénzügyi tervezés professzionális segítséggel",
      popular: true,
      features: [
        "120 perces személyes vagy online konzultáció",
        "Részletes pénzügyi elemzés",
        "Személyre szabott befektetési stratégia",
        "Nyugdíj-tervezési javaslatok",
        "Írásos összefoglaló jelentés",
        "Email és telefonos támogatás 90 napig",
        "1 hónapos ingyenes utánkövetés"
      ],
      notIncluded: [
        "Folyamatos portfolió menedzsment",
        "Havi konzultációk"
      ]
    },
    {
      name: "VIP csomag",
      price: "89.900",
      period: "egyszeri díj",
      description: "Teljes körű pénzügyi szolgáltatás vagyonos ügyfeleknek",
      popular: false,
      features: [
        "180 perces személyes konzultáció",
        "Komplex vagyonelemzés",
        "Egyedi befektetési portfólió tervezés",
        "Adóoptimalizálási stratégia",
        "Generációs vagyonátadás tervezése",
        "Részletes írásos terv (20+ oldal)",
        "3 hónapos folyamatos támogatás",
        "Negyedéves portfolió felülvizsgálat"
      ],
      notIncluded: []
    }
  ];

  const services = [
    {
      name: "Nyugdíj-tervezés",
      price: "25.000",
      duration: "90 perc",
      description: "Komplex nyugdíj-tervezési tanácsadás"
    },
    {
      name: "Befektetési tanácsadás",
      price: "30.000",
      duration: "120 perc", 
      description: "Személyre szabott befektetési stratégia"
    },
    {
      name: "Biztosítási konzultáció",
      price: "20.000",
      duration: "60 perc",
      description: "Teljes körű biztosítási igényfelmérés"
    },
    {
      name: "Adóoptimalizálás",
      price: "35.000",
      duration: "90 perc",
      description: "Legális adómegtakarítási lehetőségek"
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
                Árlista
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Átlátható, tisztességes árazás. Válassza ki az Önnek legmegfelelőbb csomagot 
                és kezdje el pénzügyi jövőjének tervezését még ma.
              </p>
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <Shield className="h-5 w-5" />
                <span>30 napos pénzvisszafizetési garancia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Válassza ki a megfelelő csomagot
              </h2>
              <p className="text-lg text-muted-foreground">
                Minden csomag tartalmazza az ingyenes előzetes konzultációt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-2xl border-2 p-8 ${
                    pkg.popular 
                      ? 'border-primary bg-gradient-card shadow-strong scale-105' 
                      : 'border-border bg-white shadow-soft hover:shadow-medium'
                  } transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Legnépszerűbb
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">
                        {pkg.price.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground ml-2">Ft</span>
                      <div className="text-sm text-muted-foreground mt-1">
                        {pkg.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-8">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature, idx) => (
                      <li key={`not-${idx}`} className="flex items-start space-x-3">
                        <X className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/kapcsolat"
                    className={`w-full text-center block py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-primary hover:bg-primary-dark text-white'
                        : 'bg-muted hover:bg-primary hover:text-white text-foreground'
                    }`}
                  >
                    Csomag kiválasztása
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Services */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Egyedi szolgáltatások
              </h2>
              <p className="text-lg text-muted-foreground">
                Ha csak egy konkrét területre van szüksége tanácsadásra
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="card-professional text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {parseInt(service.price).toLocaleString()} Ft
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/kapcsolat"
                    className="w-full btn-primary text-center block"
                  >
                    Foglalás
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Gyakran ismételt kérdések
                </h2>
              </div>

              <div className="space-y-6">
                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">
                    Milyen fizetési módokat fogadnak el?
                  </h3>
                  <p className="text-muted-foreground">
                    Bankkártyás fizetést, banki átutalást és készpénzes fizetést is elfogadunk. 
                    Online konzultációk esetén előzetes banki átutalás szükséges.
                  </p>
                </div>

                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">
                    Van pénzvisszafizetési garancia?
                  </h3>
                  <p className="text-muted-foreground">
                    Igen, 30 napos feltétel nélküli pénzvisszafizetési garanciát biztosítunk 
                    minden szolgáltatásunkra. Ha nem elégedett, teljes összegét visszatérítjük.
                  </p>
                </div>

                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">
                    Mennyi időt vesz igénybe egy konzultáció?
                  </h3>
                  <p className="text-muted-foreground">
                    Az alapkozultáció 60 perc, míg a komplex csomagok 90-180 percet vesznek igénybe. 
                    Minden konzultáció az Ön ütemében zajlik, nem siettetjük.
                  </p>
                </div>

                <div className="card-professional">
                  <h3 className="font-semibold text-foreground mb-2">
                    Személyesen vagy online történik a konzultáció?
                  </h3>
                  <p className="text-muted-foreground">
                    Mindkét lehetőséget biztosítjuk. Budapesti irodánkban személyesen, 
                    vagy biztonságos online platformon keresztül is konzultálhat velünk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-semibold mb-8 leading-relaxed">
                "A Prémium csomag minden fillért megért. Szakértő tanácsaik alapján 
                20%-kal növeltem a megtakarításaim hozamát, és most már tudom, 
                hogyan tervezzem a nyugdíjamat."
              </blockquote>
              <div className="text-lg">
                <div className="font-semibold">Horváth János</div>
                <div className="text-white/80">IT szakember, Budapest</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Még mindig bizonytalan?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Foglaljon egy ingyenes 30 perces előzetes konzultációt, 
              ahol megbeszélhetjük az Ön konkrét igényeit és céljait.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kapcsolat"
                className="btn-hero"
              >
                Ingyenes konzultáció
              </Link>
              <Link
                to="/szolgaltatasok"
                className="btn-primary"
              >
                Szolgáltatások
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

export default Arlista;