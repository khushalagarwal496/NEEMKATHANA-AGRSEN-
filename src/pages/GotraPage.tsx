import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const gotras = [
  { sr: 1, gotra: "Garg", lord: "Pushpadev", rishi: "Gargashya" },
  { sr: 2, gotra: "Goyal", lord: "Gendumal", rishi: "Gobhil" },
  { sr: 3, gotra: "Goyan", lord: "Godhar", rishi: "Gautam" },
  { sr: 4, gotra: "Bansal", lord: "Virbhan", rishi: "Vatsa" },
  { sr: 5, gotra: "Kansal", lord: "Manipal", rishi: "Kaushik" },
  { sr: 6, gotra: "Singhal", lord: "Sindhupati", rishi: "Shandilya" },
  { sr: 7, gotra: "Mangal", lord: "Amritsen", rishi: "Mandavya" },
  { sr: 8, gotra: "Jindal", lord: "Jaitrasangh", rishi: "Jaimini" },
  { sr: 9, gotra: "Tingal", lord: "Tambolkarna", rishi: "Tandya" },
  { sr: 10, gotra: "Aeron", lord: "Indramal", rishi: "Aaurva" },
  { sr: 11, gotra: "Dharan", lord: "Dhavandev", rishi: "Ghaumya" },
  { sr: 12, gotra: "Madhukul", lord: "Madhavsen", rishi: "Mudgal" },
  { sr: 13, gotra: "Bindal", lord: "Vrinddev", rishi: "Vashista" },
  { sr: 14, gotra: "Mittal", lord: "Mantrapati", rishi: "Maitreya" },
  { sr: 15, gotra: "Tayal", lord: "Tarachand", rishi: "Taitireya" },
  { sr: 16, gotra: "Bhandal", lord: "Vasudev", rishi: "Bhardwaj" },
  { sr: 17, gotra: "Kuchchal", lord: "Karanchand", rishi: "Kashyap" },
  { sr: 18, gotra: "Nangal", lord: "Narsev", rishi: "Nagendra" },
];

const GotraPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        subtitle="गोत्र"
        title="अग्रवालों के गोत्र और ऋषि"
        description="18 महायज्ञ और 18 गोत्र — महाराजा अग्रसेन की 18 संतानों से"
      />

      {/* 18 Gotra explanation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">18 महायज्ञ और 18 गोत्र</h2>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                उचित प्रबंधन के लिए महाराजा अग्रसेन ने अपने राज्य को 18 भागों में बाँटकर संगठित किया। उन्होंने 18 महायज्ञों का आयोजन किया, अपने बच्चों के गुरुओं के नाम पर 18 गोत्रों की स्थापना की और प्रत्येक को उनमें बांट दिया।
              </p>
              <p className="font-bold text-foreground">
                इन सभी 18 गोत्रों के नाम अलग-अलग हैं, फिर भी वे एक भगवद गीता के 18 अलग-अलग अध्यायों की तरह समग्र रूप से एक हैं।
              </p>
              <p>
                सामाजिक कल्याण और भाईचारे की भावनाएँ इस सिद्धांत के मूल तत्व थे। राज्य में स्वार्थ पर भ्रष्टाचार के लिए कोई स्थान नहीं था। राज्य का विकास और लोगों का जीवन पूरी तरह से कृषि, व्यापार और डेयरी पर आधारित था।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gotra Table */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2 text-center">अग्रवालों के गोत्र और ऋषि</h2>
            <div className="section-divider mt-2 mb-10" />

            <div className="overflow-x-auto rounded-xl border border-border shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="gold-gradient">
                    <th className="px-6 py-4 text-left text-foreground font-bold">क्र.सं.</th>
                    <th className="px-6 py-4 text-left text-foreground font-bold">गोत्र</th>
                    <th className="px-6 py-4 text-left text-foreground font-bold">गोत्र स्वामी</th>
                    <th className="px-6 py-4 text-left text-foreground font-bold">ऋषि (Rishi)</th>
                  </tr>
                </thead>
                <tbody>
                  {gotras.map((g, i) => (
                    <tr
                      key={g.sr}
                      className={`border-t border-border transition-colors hover:bg-primary/5 ${
                        i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">{g.sr}</td>
                      <td className="px-6 py-4 font-semibold text-primary">{g.gotra}</td>
                      <td className="px-6 py-4 text-muted-foreground">{g.lord}</td>
                      <td className="px-6 py-4 text-muted-foreground">{g.rishi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* एक ही गोत्र में विवाह का निषेध */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">एक ही गोत्र में विवाह का निषेध</h2>
            <div className="section-divider-left mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              कोई भी व्यक्ति एक ही गोत्र में शादी नहीं कर सकता था। विज्ञान ने भी इस अवधारणा को सिद्ध कर दिया है। एक ही गोत्र विवाह करने का मुख्य दोष जीन विकसित न होना है। मूल रूप से जब आप एक ही गोत्र में शादी करते हैं तो उन सभी चीजों को आत्मसात करने की अधिक संभावना होती है जो पैतृक जीन में पहले से मौजूद हैं। ऐसा होने पर सामान्य विकास की संभावना कम हो जाती है।
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GotraPage;
