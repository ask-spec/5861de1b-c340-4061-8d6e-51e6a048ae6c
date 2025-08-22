import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { FileText, Scale, AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-white py-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <Scale className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-6">Felhasználási Feltételek</h1>
              <p className="text-xl text-white/90">
                A NyugdíjBiz Kft. szolgáltatásainak használatára vonatkozó feltételek és szabályok.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="section-container max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Általános rendelkezések</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jelen Általános Szerződési Feltételek (ÁSZF) a NyugdíjBiz Korlátolt Felelősségű Társaság 
                (1053 Budapest, Kossuth Lajos utca 14.) által nyújtott pénzügyi tanácsadási szolgáltatásokra vonatkoznak.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Szolgáltatások</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A NyugdíjBiz Kft. a következő szolgáltatásokat nyújtja:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nyugdíj-tervezési tanácsadás</li>
                <li>Befektetési tanácsadás</li>
                <li>Biztosítási konzultáció</li>
                <li>Adóoptimalizálási tanácsadás</li>
                <li>Online webináriumok és képzések</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Árak és fizetési feltételek</h2>
              <p className="text-muted-foreground leading-relaxed">
                A szolgáltatások aktuális árait weboldalunkon és árajánlatainkban tüntetjük fel. 
                A fizetés bankkártyával, átutalással vagy készpénzzel történhet. Az első konzultáció ingyenes.
              </p>
            </div>

            <div className="card-professional border-l-4 border-l-warning">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-warning mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Felelősségkorlátozás</h3>
                  <p className="text-muted-foreground text-sm">
                    Tanácsadásaink általános információs célokat szolgálnak. A befektetési döntések kockázatai 
                    az ügyfelet terhelik. Nem vállalunk felelősséget a piaci változások okozta veszteségekért.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Hatályos:</strong> 2024. december 15-től<br />
                <strong>Kapcsolat:</strong> info@nyugbiz.biz | +36 1 789 4532
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default TermsOfService;