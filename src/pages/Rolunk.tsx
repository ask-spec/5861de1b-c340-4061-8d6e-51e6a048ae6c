import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Heart,
  Target,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";

const Rolunk = () => {
  const stats = [
    { number: "1500+", label: "Elégedett ügyfél", icon: <Users className="h-8 w-8 text-primary" /> },
    { number: "15+", label: "Év tapasztalat", icon: <Award className="h-8 w-8 text-accent" /> },
    { number: "97%", label: "Ügyfél elégedettség", icon: <Star className="h-8 w-8 text-success" /> },
    { number: "500M+", label: "Ft kezelt vagyon", icon: <TrendingUp className="h-8 w-8 text-primary" /> }
  ];

  const team = [
    {
      name: "Dr. Kovács Péter",
      role: "Ügyvezető igazgató, Senior pénzügyi tanácsadó",
      experience: "18 év",
      specialization: "Nyugdíj-tervezés, Befektetési tanácsadás",
      education: "Közgazdaság-tudomány PhD (BCE), CFP®",
      description: "A vállalat alapítója, aki már több mint másfél évtizede segít ügyfeleknek pénzügyi céljainak elérésében."
    },
    {
      name: "Nagy Anna",
      role: "Senior befektetési tanácsadó",
      experience: "12 év",
      specialization: "Portfólió menedzsment, Kockázatkezelés", 
      education: "Pénzügy MA (ELTE), CFA Level III",
      description: "Befektetési szakértőnk, aki különösen a hosszú távú vagyonépítési stratégiákban jeleskedik."
    },
    {
      name: "Szabó Márk",
      role: "Adó- és biztosítási szakértő",
      experience: "10 év",
      specialization: "Adóoptimalizálás, Biztosítási tervezés",
      education: "Mérlegképes könyvelő, Biztosítási szakértő (MABISZ)",
      description: "Adózási és biztosítási kérdésekben nyújt szakértői segítséget ügyfeleinknek."
    }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Megbízhatóság",
      description: "15+ éves piaci jelenlétünk és több ezer elégedett ügyfél bizonyítja szakértelmünket és megbízhatóságunkat."
    },
    {
      icon: <Heart className="h-12 w-12 text-accent" />,
      title: "Ügyfél-központúság", 
      description: "Minden tanácsadásunk az ügyfél egyéni igényeire és céljára szabott. Az Ön sikere a mi sikerünk."
    },
    {
      icon: <Target className="h-12 w-12 text-success" />,
      title: "Eredményesség",
      description: "Bewbizonyított módszereinkkel és stratégiáinkkal segítünk ügyfeleinket pénzügyi céljainak elérésében."
    }
  ];

  const certifications = [
    "Certified Financial Planner (CFP®)",
    "Chartered Financial Analyst (CFA)",
    "Magyar Biztosítási Alkusz Szövetség tag",
    "Budapesti Értéktőzsde Tanácsadói Engedély", 
    "ISO 27001 Információbiztonsági Tanúsítvány"
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
                Rólunk
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                A NyugdíjBiz Kft. 2009 óta segít magánszemélyeknek és családoknak 
                biztos pénzügyi jövő megteremtésében. Küldetésünk, hogy ügyfeleink 
                nyugodt és gondtalan nyugdíjas éveket élhessenek.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="card-professional text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Küldetésünk
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Azt hisszük, hogy minden embernek joga van a biztos pénzügyi jövőhöz. 
                  Küldetésünk, hogy szakértő tanácsadással és személyre szabott megoldásokkal 
                  segítsünk ügyfeleinknek elérni pénzügyi céljaikat.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  15+ éves tapasztalatunkra és folyamatos szakmai fejlődésünkre építve 
                  nyújtjuk a legmagasabb színvonalú pénzügyi tanácsadást.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-foreground">Személyre szabott megoldások</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-foreground">Átlátható, tisztességes tanácsadás</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-foreground">Hosszú távú partnerség</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                    <span className="text-foreground">Folyamatos szakmai fejlődés</span>
                  </div>
                </div>
              </div>

              <div className="card-premium">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Értékeink
                </h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {value.icon}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Szakértő csapatunk
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tapasztalt pénzügyi szakértők, akik folyamatosan képzik magukat 
                a legújabb trendekről és módszerekről.
              </p>
            </div>

            <div className="space-y-8">
              {team.map((member, index) => (
                <div key={index} className="card-professional">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <h4 className="text-lg text-primary font-semibold mb-4">
                        {member.role}
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Tapasztalat:</div>
                          <div className="text-muted-foreground">{member.experience}</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground mb-1">Szakterület:</div>
                          <div className="text-muted-foreground">{member.specialization}</div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="text-sm font-semibold text-foreground mb-1">Végzettség:</div>
                          <div className="text-muted-foreground">{member.education}</div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tanúsítványaink és engedélyeink
              </h2>
              <p className="text-lg text-muted-foreground">
                Szakmai kompetenciánkat nemzetközileg elismert tanúsítványok bizonyítják
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-soft">
                    <Award className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Történetünk
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2009
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Cégalapítás</h3>
                    <p className="text-muted-foreground">
                      Dr. Kovács Péter megalapította a NyugdíjBiz Kft-t a személyre szabott 
                      pénzügyi tanácsadás jegyében.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2012
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Csapat bővítése</h3>
                    <p className="text-muted-foreground">
                      Csatlakozott Nagy Anna befektetési szakértő és Szabó Márk adótanácsadó.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    2016
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1000. ügyfél</h3>
                    <p className="text-muted-foreground">
                      Elértük az 1000 elégedett ügyfél mérföldkövet és kibővítettük 
                      szolgáltatási palettánkat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-success text-white rounded-full flex items-center justify-center font-bold">
                    2020
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Digitális átállás</h3>
                    <p className="text-muted-foreground">
                      Bevezettük az online konzultációkat és digitális eszközeinket.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">15 éves jubileum</h3>
                    <p className="text-muted-foreground">
                      Büszkén ünnepeljük 15. születésnapunkat 1500+ elégedett ügyféllel.
                    </p>
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
              Legyen Ön is elégedett ügyfeleink egyike!
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Tapasztalja meg a különbséget, amit egy tapasztalt, megbízható 
              pénzügyi tanácsadó csapat jelenthet az Ön jövőjében.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kapcsolat"
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold 
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300
                         inline-flex items-center justify-center space-x-2"
              >
                <span>Ingyenes konzultáció</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/szolgaltatasok"
                className="border-2 border-white text-white hover:bg-white hover:text-primary 
                         px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Szolgáltatásaink
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

export default Rolunk;