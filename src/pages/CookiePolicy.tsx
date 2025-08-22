import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: <Shield className="h-8 w-8 text-success" />,
      title: "Szükséges cookie-k",
      description: "Ezek a cookie-k elengedhetetlenek a weboldal megfelelő működéséhez.",
      purpose: "Bejelentkezés, biztonsági funkciók, alapvető weboldal működés",
      duration: "Munkamenet végéig vagy 1 év",
      canDisable: false,
      examples: [
        "Munkamenet azonosító",
        "Biztonsági token",
        "Nyelvi beállítások",
        "Cookie preferenciák"
      ]
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Teljesítmény cookie-k",
      description: "Segítenek megérteni, hogyan használják látogatóink a weboldalt.",
      purpose: "Weboldal teljesítményének mérése és javítása",
      duration: "13-25 hónap",
      canDisable: true,
      examples: [
        "Google Analytics",
        "Oldal betöltési idő mérés",
        "Hibák nyomon követése",
        "Látogatói statisztikák"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Funkcionális cookie-k",
      description: "Lehetővé teszik a weboldal továbbfejlesztett funkcióinak használatát.",
      purpose: "Személyre szabott tartalom és funkciók biztosítása",
      duration: "1-12 hónap",
      canDisable: true,
      examples: [
        "Felhasználói preferenciák",
        "Chatbot beállítások",
        "Téma választás",
        "Űrlap adatok mentése"
      ]
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Weboldal használatának elemzése",
      cookies: "_ga, _ga_*, _gid",
      retention: "2 év",
      privacy: "https://policies.google.com/privacy"
    },
    {
      name: "Google Tag Manager",
      purpose: "Marketing és elemzési eszközök kezelése",
      cookies: "_gcl_*",
      retention: "90 nap",
      privacy: "https://policies.google.com/privacy"
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
              <Cookie className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cookie Szabályzat
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Tájékoztatjuk arról, hogyan használjuk a cookie-kat weboldalunkon 
                a legjobb felhasználói élmény biztosítása érdekében.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              
              <div className="space-y-12">
                {/* What are cookies */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Mi az a cookie?
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      A cookie-k kis szövegfájlok, amelyeket a weboldal az Ön böngészőjében tárol, 
                      amikor meglátogatja azt. A cookie-k segítenek a weboldalnak emlékezni az Ön 
                      beállításaira és tevékenységeire, így nem kell újra és újra megadnia azokat, 
                      amikor visszatér az oldalra vagy böngész a különböző oldalak között.
                    </p>
                    <p>
                      A NyugdíjBiz Kft. weboldalán használt cookie-k célja a felhasználói élmény 
                      javítása, a weboldal teljesítményének optimalizálása és szolgáltatásaink 
                      személyre szabása.
                    </p>
                  </div>
                </section>

                {/* Cookie types */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-8">
                    Cookie típusok
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cookieTypes.map((type, index) => (
                      <div key={index} className="card-professional">
                        <div className="text-center mb-6">
                          {type.icon}
                          <h3 className="text-xl font-semibold text-foreground mt-4 mb-3">
                            {type.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {type.description}
                          </p>
                        </div>

                        <div className="space-y-4 text-sm">
                          <div>
                            <div className="font-semibold text-foreground mb-1">Cél:</div>
                            <div className="text-muted-foreground">{type.purpose}</div>
                          </div>

                          <div>
                            <div className="font-semibold text-foreground mb-1">Tárolási idő:</div>
                            <div className="text-muted-foreground">{type.duration}</div>
                          </div>

                          <div>
                            <div className="font-semibold text-foreground mb-1">Letiltható:</div>
                            <div className={`font-medium ${type.canDisable ? 'text-success' : 'text-warning'}`}>
                              {type.canDisable ? 'Igen' : 'Nem (kötelező)'}
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold text-foreground mb-2">Példák:</div>
                            <ul className="space-y-1">
                              {type.examples.map((example, idx) => (
                                <li key={idx} className="text-muted-foreground text-xs">
                                  • {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Third party services */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Harmadik fél szolgáltatások
                  </h2>
                  <div className="text-muted-foreground mb-6">
                    <p>
                      Weboldalunk harmadik fél szolgáltatásokat is használ, amelyek szintén 
                      cookie-kat helyezhetnek el böngészőjében:
                    </p>
                  </div>

                  <div className="space-y-6">
                    {thirdPartyServices.map((service, index) => (
                      <div key={index} className="card-professional">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                          <div>
                            <div className="font-semibold text-foreground">{service.name}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{service.purpose}</div>
                          </div>
                          <div>
                            <div className="text-sm">
                              <span className="font-medium text-foreground">Cookie-k: </span>
                              <span className="text-muted-foreground font-mono text-xs">{service.cookies}</span>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-foreground">Tárolás: </span>
                              <span className="text-muted-foreground">{service.retention}</span>
                            </div>
                          </div>
                          <div>
                            <a 
                              href={service.privacy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              Adatvédelmi szabályzat
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Cookie management */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Cookie-k kezelése
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Böngésző beállítások
                      </h3>
                      <div className="text-muted-foreground space-y-4 leading-relaxed">
                        <p>
                          A legtöbb böngésző alapértelmezetten elfogadja a cookie-kat, 
                          de Ön módosíthatja böngésző beállításait, hogy:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Letiltsa az összes cookie-t</li>
                          <li>Csak bizonyos típusú cookie-kat engedélyezze</li>
                          <li>Értesítést kapjon minden cookie elhelyezésekor</li>
                          <li>Törölhesse a meglévő cookie-kat</li>
                        </ul>
                      </div>
                    </div>

                    <div className="card-professional">
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Böngésző-specifikus útmutatók
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <div className="font-medium text-foreground">Google Chrome:</div>
                          <div className="text-muted-foreground">
                            Beállítások → Adatvédelem és biztonság → Cookie-k
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Mozilla Firefox:</div>
                          <div className="text-muted-foreground">
                            Beállítások → Adatvédelem és biztonság
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Safari:</div>
                          <div className="text-muted-foreground">
                            Safari → Beállítások → Adatvédelem
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">Microsoft Edge:</div>
                          <div className="text-muted-foreground">
                            Beállítások → Cookie-k és webhely engedélyek
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookie consent */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Hozzájárulás kezelése
                  </h2>
                  <div className="card-premium">
                    <div className="text-muted-foreground space-y-4 leading-relaxed">
                      <p>
                        Weboldalunk látogatásakor cookie banner segítségével kérjük hozzájárulását 
                        a nem szükséges cookie-k használatához. Bármikor módosíthatja vagy 
                        visszavonhatja hozzájárulását.
                      </p>
                      
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">
                          Hozzájárulás módosítása:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Törölje böngésző cookie-jait és töltse újra az oldalt</li>
                          <li>Használja böngésző inkognitó/privát módját</li>
                          <li>Írjon nekünk az info@nyugbiz.biz címre</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact information */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    További információk
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Ha kérdései vannak cookie-k használatáról vagy adatvédelmi gyakorlatunkról, 
                      kérjük, vegye fel velünk a kapcsolatot:
                    </p>
                    
                    <div className="card-professional">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Elérhetőség:</h4>
                          <div className="space-y-2 text-sm">
                            <div>E-mail: info@nyugbiz.biz</div>
                            <div>Telefon: +36 1 789 4532</div>
                            <div>Cím: Kossuth Lajos utca 14, 1053 Budapest</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Kapcsolódó dokumentumok:</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <a href="/gdpr" className="text-primary hover:underline">
                                GDPR és Adatvédelmi Szabályzat
                              </a>
                            </div>
                            <div>
                              <a href="/felhasznalasi-feltetelek" className="text-primary hover:underline">
                                Felhasználási Feltételek
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Utolsó frissítés:</strong> 2024. december 15.<br />
                    <strong>Hatálybalépés:</strong> 2024. december 15.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default CookiePolicy;