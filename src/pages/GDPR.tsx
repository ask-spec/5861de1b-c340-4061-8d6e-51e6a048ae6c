import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Shield, Mail, Phone, FileText, Lock, UserCheck } from "lucide-react";

const GDPR = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 lg:py-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                GDPR és Adatvédelem
              </h1>
              <p className="text-xl mb-8 text-white/90">
                A NyugdíjBiz Kft. elkötelezett az Ön személyes adatainak védelme iránt. 
                Itt megtudhatja, hogyan kezeljük és védjük adatait.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Contact Info Box */}
              <div className="card-premium mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <UserCheck className="h-6 w-6 mr-3" />
                  Adatvédelmi kapcsolattartó
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Kapcsolat:</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>adatvedelem@nyugbiz.biz</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+36 1 789 4532</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Postai cím:</h3>
                    <div className="text-muted-foreground">
                      NyugdíjBiz Kft.<br />
                      Kossuth Lajos utca 14<br />
                      1053 Budapest, Magyarország
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                    <FileText className="h-8 w-8 mr-3 text-primary" />
                    1. Általános információk
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      A NyugdíjBiz Korlátolt Felelősségű Társaság (székhely: 1053 Budapest, Kossuth Lajos utca 14., 
                      cégjegyzékszám: 01-09-384726, adószám: 28947654-2-41) mint adatkezelő, 
                      kötelezettséget vállal arra, hogy a természetes személyeknek a személyes adatok 
                      kezelése tekintetében való védelméről szóló, az Európai Parlament és a Tanács 
                      (EU) 2016/679 rendeletének (GDPR) megfelelően kezelje az Ön személyes adatait.
                    </p>
                    <p>
                      Jelen adatvédelmi szabályzat célja, hogy tájékoztassa Önt arról, hogy milyen 
                      személyes adatokat gyűjtünk, hogyan használjuk fel azokat, és milyen jogai vannak 
                      személyes adataival kapcsolatban.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    2. Kezelt személyes adatok köre
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>A következő személyes adatokat kezelhetjük:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Név, születési név</li>
                      <li>E-mail cím</li>
                      <li>Telefonszám</li>
                      <li>Postai cím</li>
                      <li>Születési idő és hely</li>
                      <li>Anyja neve</li>
                      <li>Adóazonosító jel</li>
                      <li>Pénzügyi helyzetre vonatkozó információk</li>
                      <li>Befektetési preferenciák és kockázatvállalási hajlandóság</li>
                      <li>Konzultációk során rögzített információk</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    3. Adatkezelés jogalapja és célja
                  </h2>
                  <div className="text-muted-foreground space-y-6 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.1. Szerződés teljesítése</h3>
                      <p>
                        Jogalap: GDPR 6. cikk (1) bekezdés b) pont<br />
                        Cél: Pénzügyi tanácsadási szolgáltatások nyújtása, szerződéses kötelezettségek teljesítése
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.2. Hozzájárulás</h3>
                      <p>
                        Jogalap: GDPR 6. cikk (1) bekezdés a) pont<br />
                        Cél: Marketing kommunikáció, hírlevél küldése, ügyfél-elégedettségi felmérések
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.3. Jogos érdek</h3>
                      <p>
                        Jogalap: GDPR 6. cikk (1) bekezdés f) pont<br />
                        Cél: Ügyfélszolgálat, panaszkezelés, szolgáltatások fejlesztése
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">3.4. Jogi kötelezettség</h3>
                      <p>
                        Jogalap: GDPR 6. cikk (1) bekezdés c) pont<br />
                        Cél: Jogszabályi kötelezettségek teljesítése (pl. számviteli, adózási előírások)
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    4. Adatok tárolásának időtartama
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Szerződéses adatok: a szerződés megszűnésétől számított 8 év</li>
                      <li>Számviteli bizonylatok: 8 év</li>
                      <li>Marketing célú adatok: a hozzájárulás visszavonásáig</li>
                      <li>Weboldal látogatási adatok: 25 hónap</li>
                      <li>Konzultációs jegyzőkönyvek: 5 év</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                    <Lock className="h-8 w-8 mr-3 text-primary" />
                    5. Adatbiztonság
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Kiemelt figyelmet fordítunk adatainak biztonságára. A következő 
                      technikai és szervezési intézkedéseket alkalmazzuk:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL titkosítás a weboldal és az adatátvitel során</li>
                      <li>Tűzfal védelem és rendszeres biztonsági frissítések</li>
                      <li>Hozzáférés-korlátozás és jogosultsági szintek</li>
                      <li>Rendszeres biztonsági mentések</li>
                      <li>Munkatársak rendszeres adatvédelmi képzése</li>
                      <li>Fizikai védelem (zárható irodák, fájlszekrények)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    6. Az Ön jogai
                  </h2>
                  <div className="text-muted-foreground space-y-6 leading-relaxed">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.1. Tájékoztatáshoz való jog</h3>
                      <p>Jogában áll tájékoztatást kérni személyes adatai kezeléséről.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.2. Hozzáférési jog</h3>
                      <p>Kérheti személyes adataihoz való hozzáférést és azok másolatát.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.3. Helyesbítési jog</h3>
                      <p>Kérheti pontatlan személyes adatainak helyesbítését.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.4. Törlési jog</h3>
                      <p>Bizonyos esetekben kérheti személyes adatainak törlését.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.5. Korlátozási jog</h3>
                      <p>Kérheti adatai kezelésének korlátozását.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.6. Hordozhatósági jog</h3>
                      <p>Kérheti adatait strukturált, géppel olvasható formátumban.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">6.7. Tiltakozási jog</h3>
                      <p>Tiltakozhat személyes adatai kezelése ellen.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    7. Adattovábbítás harmadik félnek
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>Személyes adatait csak a következő esetekben továbbítjuk harmadik fél részére:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Az Ön kifejezett hozzájárulásával</li>
                      <li>Jogi kötelezettség teljesítése céljából</li>
                      <li>Szerződés teljesítéséhez szükséges mértékben (pl. postai kézbesítés)</li>
                      <li>IT szolgáltatók (szerver üzemeltetés, adatfeldolgozás)</li>
                    </ul>
                    <p>
                      Adatfeldolgozóinkkal írásos szerződést kötünk, amely biztosítja 
                      a GDPR előírásainak betartását.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    8. Cookie-k használata
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Weboldalunk cookie-kat használ a felhasználói élmény javítása érdekében. 
                      A cookie-k használatáról részletes tájékoztatást a 
                      <a href="/cookie-szabalyzat" className="text-primary hover:underline">Cookie Szabályzatban</a> találhat.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    9. Panasztételi jog
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Ha úgy véli, hogy személyes adatainak kezelése során jogsértés történt, 
                      panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatóságnál:
                    </p>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <p className="font-semibold">Nemzeti Adatvédelmi és Információszabadság Hatóság</p>
                      <p>Cím: 1055 Budapest, Falk Miksa utca 9-11.</p>
                      <p>Telefon: +36 1 391 1400</p>
                      <p>E-mail: ugyfelszolgalat@naih.hu</p>
                      <p>Weboldal: www.naih.hu</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    10. Adatvédelmi szabályzat módosítása
                  </h2>
                  <div className="text-muted-foreground space-y-4 leading-relaxed">
                    <p>
                      Fenntartjuk a jogot jelen adatvédelmi szabályzat módosítására. 
                      A módosításokról weboldalunkon keresztül tájékoztatjuk ügyfeleinket. 
                      A módosítások a közzététel napján lépnek hatályba.
                    </p>
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

export default GDPR;