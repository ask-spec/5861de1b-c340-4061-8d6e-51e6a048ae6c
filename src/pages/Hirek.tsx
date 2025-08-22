import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const Hirek = () => {
  const news = [
    {
      id: 1,
      title: "Új adóváltozások 2025-ben - Felkészülés a változásokra",
      excerpt: "Januártól hatályba lépő adózási változások, amelyek befolyásolhatják pénzügyi terveit.",
      date: "2024. december 10.",
      category: "Adózás"
    },
    {
      id: 2,
      title: "15 éves jubileum - Köszönjük az együttműködést!",
      excerpt: "Ünnepeljük cégünk 15. születésnapját és köszönjük ügyfeleink bizalmát.",
      date: "2024. december 1.",
      category: "Cég hírek"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-hero text-white py-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Hírek és Aktualitások</h1>
              <p className="text-xl text-white/90">
                Legfrissebb hírek a pénzügyi világból és cégünk életéből.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="space-y-8">
              {news.map((item) => (
                <article key={item.id} className="card-professional">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-4 w-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <button className="flex items-center space-x-2 text-primary hover:text-accent">
                      <span>Tovább</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Hirek;