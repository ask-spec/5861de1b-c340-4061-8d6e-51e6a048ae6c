import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { 
  Play, 
  Download, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Video,
  FileText
} from "lucide-react";

const Webinariumok = () => {
  const webinars = [
    {
      id: 1,
      title: "Nyugdíj-tervezés kezdőknek",
      description: "90 perces átfogó webinárium a nyugdíj-tervezés alapjairól. Lépésről lépésre megmutatjuk, hogyan kezdje el.",
      duration: "90 perc",
      participants: "245 résztvevő",
      rating: 4.8,
      price: "9.900 Ft",
      originalPrice: "14.900 Ft",
      includes: [
        "90 perces élő webinárium felvétel",
        "Letölthető prezentáció (PDF)",
        "Nyugdíj kalkulátor Excel sablon",
        "Személyes cselekvési terv sablon",
        "30 napos e-mail támogatás"
      ],
      nextDate: "2024. december 20. 18:00",
      category: "Nyugdíj",
      level: "Kezdő",
      featured: true
    },
    {
      id: 2,
      title: "Befektetési alapok kiválasztása",
      description: "Hogyan válassza ki a megfelelő befektetési alapokat? Kritériumok, elemzési módszerek és gyakorlati tippek.",
      duration: "75 perc",
      participants: "189 résztvevő", 
      rating: 4.9,
      price: "12.900 Ft",
      originalPrice: "17.900 Ft",
      includes: [
        "75 perces szakértői webinárium",
        "Alap-összehasonlító Excel táblázat",
        "Kockázatfelmérő kérdőív",
        "Portfólió tervezési útmutató",
        "Q&A session felvétel"
      ],
      nextDate: "2024. december 22. 19:00",
      category: "Befektetés",
      level: "Haladó"
    },
    {
      id: 3,
      title: "Adóoptimalizálás munkavállalóknak",
      description: "Legális módszerek az adóterhek csökkentésére. SZÉP kártya, cafeteria és egyéb lehetőségek maximális kihasználása.",
      duration: "60 perc",
      participants: "312 résztvevő",
      rating: 4.7,
      price: "7.900 Ft", 
      originalPrice: "11.900 Ft",
      includes: [
        "60 perces gyakorlati webinárium",
        "Adómegtakarítási kalkulátor",
        "Cafeteria optimalizálási útmutató",
        "Éves adótervezési sablon",
        "Hasznos linkek gyűjteménye"
      ],
      nextDate: "2024. december 18. 18:30",
      category: "Adó",
      level: "Kezdő"
    }
  ];

  const checklists = [
    {
      id: 1,
      title: "Nyugdíj-tervezési checklist",
      description: "30 pontos részletes ellenőrzőlista, hogy semmit ne hagyjon ki a nyugdíj-tervezés során.",
      pages: "12 oldal",
      downloads: "1.2k letöltés",
      price: "2.990 Ft",
      category: "Nyugdíj",
      includes: [
        "30 pontos ellenőrzőlista", 
        "Időzítési útmutató",
        "Kapcsolódó számítások",
        "Hasznos források listája"
      ]
    },
    {
      id: 2,  
      title: "Befektetési döntési kérdőív",
      description: "Professzionális kockázatfelmérő és befektetési preferencia kérdőív értékelési útmutatóval.",
      pages: "8 oldal",
      downloads: "856 letöltés", 
      price: "1.990 Ft",
      category: "Befektetés",
      includes: [
        "Kockázatfelmérő kérdőív",
        "Értékelési útmutató", 
        "Befektetési javaslatok",
        "Portfólió minták"
      ]
    },
    {
      id: 3,
      title: "Családi költségvetés sablon",
      description: "Excel alapú költségvetés-tervező sablon automatikus számításokkal és grafikonokkal.",
      pages: "Excel fájl",
      downloads: "2.1k letöltés",
      price: "3.990 Ft", 
      category: "Tervezés",
      includes: [
        "Excel költségvetés sablon",
        "Automatikus számítások",
        "Grafikus kimutatások",
        "Használati útmutató"
      ]
    },
    {
      id: 4,
      title: "Biztosítási igényfelmérő",
      description: "Lépésről lépésre segít meghatározni, milyen biztosításokra van szüksége és mennyi fedezetet.",
      pages: "15 oldal",
      downloads: "743 letöltés",
      price: "2.490 Ft",
      category: "Biztosítás", 
      includes: [
        "Igényfelmérő kérdősor",
        "Fedezet kalkulátor",
        "Biztosítás-összehasonlító",
        "Döntési segédlet"
      ]
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
                Webináriumok és Checklista-k
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Tanuljon szakértőinktől online webináriumokon, és használja praktikus 
                checklistáinkat saját pénzügyi tervezéséhez.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-white/80">Webinárium</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2500+</div>
                  <div className="text-white/80">Elégedett résztvevő</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.8★</div>
                  <div className="text-white/80">Átlagos értékelés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinars Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Video className="h-4 w-4" />
                <span>Online webináriumok</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Szakértői webináriumok
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Élő vagy felvett webináriumokon tanulhat tapasztalt szakértőinktől. 
                Minden webinárium tartalmaz gyakorlati eszközöket és sablonokat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {webinars.map((webinar) => (
                <div 
                  key={webinar.id} 
                  className={`rounded-2xl border-2 p-6 transition-all duration-300 ${
                    webinar.featured
                      ? 'border-primary bg-gradient-card shadow-strong scale-105'
                      : 'border-border bg-white shadow-soft hover:shadow-medium'
                  }`}
                >
                  {webinar.featured && (
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                      Legnépszerűbb
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <div className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                        {webinar.category} • {webinar.level}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm font-semibold">{webinar.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {webinar.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {webinar.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{webinar.participants}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-semibold text-foreground">Mit tartalmaz:</div>
                    <ul className="space-y-1">
                      {webinar.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {webinar.includes.length > 3 && (
                        <li className="text-xs text-primary font-medium">
                          +{webinar.includes.length - 3} további elem
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{webinar.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{webinar.originalPrice}</span>
                        </div>
                        <div className="text-xs text-success font-medium">
                          Következő: {webinar.nextDate}
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/kapcsolat"
                      className="w-full btn-primary text-center block"
                    >
                      Részvétel
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklists Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                <FileText className="h-4 w-4" />
                <span>Praktikus eszközök</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Checklisták és sablonok
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Letölthető eszközök és sablonok, amelyekkel azonnal nekikezdhet 
                saját pénzügyi tervezésének.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {checklists.map((checklist) => (
                <div key={checklist.id} className="card-professional">
                  <div className="text-center mb-4">
                    <Download className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded mb-2">
                      {checklist.category}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                    {checklist.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {checklist.description}
                  </p>

                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>{checklist.pages}</span>
                    <span>{checklist.downloads}</span>
                  </div>

                  <ul className="space-y-1 mb-6">
                    {checklist.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4 text-center">
                    <div className="text-xl font-bold text-primary mb-3">{checklist.price}</div>
                    <Link
                      to="/kapcsolat"
                      className="w-full btn-accent text-center block"
                    >
                      Letöltés
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Miért válassza webináriumainkat?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Élő vagy felvett
                </h3>
                <p className="text-muted-foreground">
                  Csatlakozzon élő webináriumokhoz vagy tekintse meg a felvételeket 
                  bármikor kényelmesen.
                </p>
              </div>

              <div className="text-center">
                <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Praktikus eszközök
                </h3>
                <p className="text-muted-foreground">
                  Minden webinárium tartalmaz letölthető sablonokat és 
                  gyakorlati eszközöket.
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Szakértői támogatás
                </h3>
                <p className="text-muted-foreground">
                  Q&A szessziókon keresztül közvetlen kapcsolat 
                  a szakértőinkkel.
                </p>
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
                "A nyugdíj-tervezési webinárium teljesen megváltoztatta a hozzáállásomat. 
                A sablonokat azóta is használom, és már látom az eredményeket!"
              </blockquote>
              <div className="text-lg">
                <div className="font-semibold">Kovács Mária</div>
                <div className="text-white/80">Pedagógus, Debrecen</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Kezdje el a tanulást még ma!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Csatlakozzon több ezer elégedett résztvevőnkhöz, és sajátítsa el 
              a sikeres pénzügyi tervezés fortélyait.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kapcsolat"
                className="btn-hero"
              >
                Webinárium foglalás
              </Link>
              <Link
                to="/szolgaltatasok"
                className="btn-primary"
              >
                Személyes konzultáció
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

export default Webinariumok;