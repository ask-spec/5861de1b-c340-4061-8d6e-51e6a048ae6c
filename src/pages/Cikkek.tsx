import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock, User, Tag } from "lucide-react";

const Cikkek = () => {
  const featuredArticle = {
    id: 1,
    title: "10 lépés a sikeres nyugdíj-tervezéshez",
    excerpt: "Komplex útmutató arról, hogyan tervezze meg ideális nyugdíját már ma. Gyakorlati tippek és stratégiák, amiket azonnal alkalmazhat.",
    content: "A nyugdíj-tervezés nem luxus, hanem szükséglet. Ez a részletes útmutató bemutatja a 10 legfontosabb lépést...",
    author: "Dr. Kovács Péter",
    date: "2024. december 15.",
    category: "Nyugdíj-tervezés",
    readTime: "8 perc olvasás",
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "Befektetési alapok vagy részvények? Melyiket válasszam?",
      excerpt: "Részletes összehasonlítás a különböző befektetési lehetőségek között, kockázatok és hozamok elemzésével.",
      author: "Nagy Anna", 
      date: "2024. december 12.",
      category: "Befektetés",
      readTime: "6 perc"
    },
    {
      id: 3,
      title: "SZÉP kártya vs cafeteria: melyik jár jobban?",
      excerpt: "Adóoptimalizálási tippek munkavállalóknak. Számításokkal és konkrét példákkal.",
      author: "Szabó Márk",
      date: "2024. december 10.",
      category: "Adóoptimalizálás", 
      readTime: "5 perc"
    },
    {
      id: 4,
      title: "Inflációvédelem: hogyan őrizze meg pénze értékét?",
      excerpt: "Praktikus stratégiák az infláció elleni védekezésre. Befektetési eszközök és tippek.",
      author: "Dr. Tóth Zsuzsanna",
      date: "2024. december 8.",
      category: "Megtakarítás",
      readTime: "7 perc"
    },
    {
      id: 5,
      title: "Családi pénzügyi tervezés: gyerekek és nyugdíj",
      excerpt: "Hogyan egyeztesse össze gyermekei jövőjének biztosítását saját nyugdíjával? Komplex családi stratégiák.",
      author: "Horváth Eszter",
      date: "2024. december 5.",
      category: "Családi tervezés",
      readTime: "9 perc"
    },
    {
      id: 6,
      title: "Magánnyugdíjpénztár: érdemes-e belépni 2024-ben?",
      excerpt: "Aktuális elemzés a magánnyugdíjpénztárak teljesítményéről és várható változásairól.",
      author: "Dr. Kiss László",
      date: "2024. december 3.",
      category: "Nyugdíj-tervezés",
      readTime: "6 perc"
    },
    {
      id: 7,
      title: "Biztosítások optimalizálása: mire van szükség valójában?",
      excerpt: "Mely biztosítások elengedhetetlenek és melyeket spórolhatja meg? Szakértői tanácsok.",
      author: "Varga Tamás",
      date: "2024. november 28.",
      category: "Biztosítás",
      readTime: "8 perc"
    }
  ];

  const categories = [
    "Összes kategória",
    "Nyugdíj-tervezés", 
    "Befektetés",
    "Adóoptimalizálás",
    "Megtakarítás",
    "Családi tervezés",
    "Biztosítás"
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
                Hasznos cikkek
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Szakértői tanácsok, tippek és aktuális információk a pénzügyi tervezésről. 
                Tudás, amit azonnal alkalmazhat.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Tag className="h-4 w-4" />
                <span>Kiemelt cikk</span>
              </div>
              
              <div className="card-premium">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/cikkek/${featuredArticle.id}`}
                      className="btn-hero inline-flex items-center space-x-2"
                    >
                      <span>Cikk elolvasása</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-4">Mit fog megtudni?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Mikor kezdje el a nyugdíj-tervezést</li>
                      <li>• Mennyi pénzt tegyen félre havonta</li>
                      <li>• Milyen befektetési stratégiát válasszon</li>
                      <li>• Hogyan optimalizálja adóterheit</li>
                      <li>• Mikor érdemes szakértőhöz fordulni</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-muted/30">
          <div className="section-container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-white text-foreground hover:bg-primary hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="card-professional group hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {article.category}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/cikkek/${article.id}`}
                    className="flex items-center space-x-2 text-primary hover:text-accent font-medium text-sm transition-colors"
                  >
                    <span>Elolvasom</span>
                    <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ne maradjon le a legújabb cikkeinkről!
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Iratkozzon fel hírlevelünkre és hetente kap hasznos pénzügyi tippeket 
                és tanácsokat közvetlenül e-mail-fiókjába.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="E-mail címe"
                    className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground 
                             focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg 
                                   font-semibold transition-all duration-200">
                    Feliratkozás
                  </button>
                </div>
                <p className="text-sm text-white/70 mt-3">
                  Bármikor lemondhatja a feliratkozást. Adatait bizalmasan kezeljük.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="section-container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Személyre szabott tanácsra van szüksége?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Cikkeink mellett személyes konzultáción is segítünk. 
              Foglaljon ingyenes időpontot szakértőinkkel!
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

export default Cikkek;