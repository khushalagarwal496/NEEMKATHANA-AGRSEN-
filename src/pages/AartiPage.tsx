import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const AartiPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        subtitle="आरती"
        title="महाराजा अग्रसेन जी की आरती"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-10">
            {[
              ["जय श्री अग्र हरे, स्वामी जय श्री अग्र हरे।", "कोटि कोटि नत मस्तक, सादर नमन करें ॥", "जय श्री अग्र हरे !"],
              ["आश्विन शुक्ल एक, नृप वल्लभ जय।", "अग्र वंश संस्थापक, नागवंश ब्याहे ॥", "जय श्री अग्र हरे !"],
              ["केसरिया ध्वज फहरे, छात्र चंवर धारे।", "झांझ, नफीरी नौबत बाजत तब द्वारे ॥", "जय श्री अग्र हरे !"],
              ["अग्रोहा राजधानी, इंद्र शरण आये।", "गोत्र अड़ारह अनुपम, चारण गुंड गाये ॥", "जय श्री अग्र हरे !"],
              ["सत्य, अहिंसा पालक, न्याय, नीति, समता।", "ईंट, रूपए की रीति, प्रकट करे ममता ॥", "जय श्री अग्र हरे !"],
              ["ब्रह्मा, विष्णु, शंकर, वर सिंहनी दी-न्हा।", "कुल देवी महामाया, वैश्य करम की-न्हा ॥", "जय श्री अग्र हरे !"],
              ["अग्रसेन जी की आरती, जो कोई नर गाये।", "कहत त्रिलोक विनय से सुख सम्पति पाए ॥", "जय श्री अग्र हरे !"],
            ].map((stanza, i) => (
              <div key={i} className="space-y-1">
                {stanza.map((line, j) => (
                  <p
                    key={j}
                    className={`text-lg ${
                      j === stanza.length - 1
                        ? "font-bold text-primary mt-2"
                        : "text-foreground"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}

            <div className="pt-8">
              <p className="text-primary font-bold text-lg">
                ॐ अग्रोहा वासाय शिवरूपाय विदा महे सच्चिदानंद सरूपाय धीमहि तन्नो अग्र प्रचोदयात् ।
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AartiPage;
