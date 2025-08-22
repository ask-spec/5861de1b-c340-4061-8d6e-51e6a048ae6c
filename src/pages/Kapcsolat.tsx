import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Kapcsolat = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Irodánk címe",
      content: [
        "Kossuth Lajos utca 14",
        "1053 Budapest, Magyarország"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefonszám",
      content: [
        "+36 1 789 4532"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail cím",
      content: [
        "info@nyugbiz.biz"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Nyitvatartás",
      content: [
        "Hétfő - Péntek: 9:00 - 18:00",
        "Szombat: 10:00 - 14:00",
        "Vasárnap: Zárva"
      ]
    }
  ];

  const officeHours = [
    { day: "Hétfő", hours: "9:00 - 18:00" },
    { day: "Kedd", hours: "9:00 - 18:00" },
    { day: "Szerda", hours: "9:00 - 18:00" },
    { day: "Csütörtök", hours: "9:00 - 18:00" },
    { day: "Péntek", hours: "9:00 - 18:00" },
    { day: "Szombat", hours: "10:00 - 14:00" },
    { day: "Vasárnap", hours: "Zárva" }
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
                Lépjen kapcsolatba velünk
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Készen állunk, hogy segítsünk pénzügyi céljainak megvalósításában. 
                Vegye fel velünk a kapcsolatot még ma!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Grid */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div key={index} className="card-professional text-center">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="text-muted-foreground text-sm space-y-1">
                    {info.content.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Küldjön üzenetet
                  </h2>
                  <p className="text-muted-foreground">
                    Töltse ki az alábbi űrlapot, és munkatársunk 24 órán belül 
                    felveszi Önnel a kapcsolatot.
                  </p>
                </div>
                
                <div className="card-professional">
                  <ContactForm />
                </div>
              </div>

              {/* Office Info & Hours */}
              <div className="space-y-8">
                {/* Office Info */}
                <div className="card-professional">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Irodánk
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Cím:</div>
                        <div className="text-muted-foreground">
                          Kossuth Lajos utca 14<br />
                          1053 Budapest, Magyarország
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-semibold text-foreground">Telefon: </span>
                        <a href="tel:+3617894532" className="text-primary hover:underline">
                          +36 1 789 4532
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-semibold text-foreground">E-mail: </span>
                        <a href="mailto:info@nyugbiz.biz" className="text-primary hover:underline">
                          info@nyugbiz.biz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="card-professional">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Nyitvatartás
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Megjegyzés:</strong> Előzetes egyeztetés alapján 
                      nyitvatartási időn kívül is tudunk fogadni.
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card-professional">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Gyors elérhetőségek
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+3617894532"
                      className="block w-full btn-primary text-center"
                    >
                      Telefonos hívás
                    </a>
                    <a 
                      href="mailto:info@nyugbiz.biz"
                      className="block w-full btn-accent text-center"
                    >
                      E-mail írása
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Hogyan talál meg minket?
              </h2>
              <p className="text-muted-foreground">
                Irodánk Budapest szívében, a Kossuth Lajos utcában található, 
                könnell megközelíthető tömegközlekedéssel.
              </p>
            </div>

            <div className="bg-muted rounded-xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Kossuth Lajos utca 14, 1053 Budapest
                </h3>
                <p className="text-muted-foreground mb-6">
                  Irodánk a belváros szívében található, könnyen megközelíthető 
                  a Ferenciek tere metróállomástól 3 perces sétával.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">Metró</div>
                    <div className="text-muted-foreground">M3 Ferenciek tere (3 perc)</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Busz</div>
                    <div className="text-muted-foreground">5, 7, 8, 110, 112</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Parkolás</div>
                    <div className="text-muted-foreground">Fizetős övezet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Várjuk jelentkezését!
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Ne habozzon, lépjen kapcsolatba velünk még ma! 
              Első konzultációnk mindig ingyenes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+3617894532"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Hívás most: +36 1 789 4532
              </a>
              <a 
                href="mailto:info@nyugbiz.biz"
                className="border-2 border-white text-white hover:bg-white hover:text-primary 
                         px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                E-mail küldése
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Kapcsolat;