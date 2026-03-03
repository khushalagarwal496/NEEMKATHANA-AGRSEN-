import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Building2, CalendarHeart, Users, Heart, Music, BookOpen } from "lucide-react";

const events = [
  {
    icon: CalendarHeart,
    title: "भव्य शोभायात्रा",
    description:
      "हर साल अग्रसेन जयंती पर नीम का थाना में विशाल शोभायात्रा निकाली जाती है। यह यात्रा रामलीला मैदान से शुरू होकर शाहपुरा रोड, सुभाष मंडी और कपिल मंडी होते हुए अग्रसेन भवन पहुँचती है।",
  },
  {
    icon: Heart,
    title: "रक्तदान शिविर",
    description:
      "अग्रसेन जयंती के अवसर पर अग्रवाल समाज समिति द्वारा रक्तदान शिविर का आयोजन किया जाता है जिसमें सैकड़ों लोग भाग लेते हैं।",
  },
  {
    icon: BookOpen,
    title: "मेधावी छात्र सम्मान",
    description:
      "शिक्षा में उत्कृष्ट प्रदर्शन करने वाले अग्रवाल समाज के मेधावी छात्रों का सम्मान किया जाता है और उन्हें छात्रवृत्ति प्रदान की जाती है।",
  },
  {
    icon: Music,
    title: "सांस्कृतिक कार्यक्रम",
    description:
      "इन आयोजनों के दौरान विभिन्न सांस्कृतिक कार्यक्रम जैसे भजन संध्या, नाटक और प्रतियोगिताएं आयोजित की जाती हैं।",
  },
];

const NeemKaThanaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        subtitle="नीम का थाना"
        title="नीम का थाना में अग्रवाल समाज"
        description="महाराजा अग्रसेन जी की विरासत — श्याम नगर, नीम का थाना"
      />

      {/* Agrasen Bhavan */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">महाराजा श्री अग्रसेन भवन</h2>
              </div>
              <div className="section-divider-left mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  शहर के श्याम नगर इलाके में स्थित <strong className="text-foreground">महाराजा श्री अग्रसेन भवन</strong> अग्रवाल समाज की सामाजिक और सांस्कृतिक गतिविधियों का मुख्य केंद्र है।
                </p>
                <p>
                  यह भवन समाज के विभिन्न आयोजनों, बैठकों, विवाह समारोहों और सांस्कृतिक कार्यक्रमों के लिए उपयोग किया जाता है। यहाँ महाराजा अग्रसेन जी की भव्य प्रतिमा स्थापित है।
                </p>
                <p>
                  अग्रसेन भवन नीम का थाना में अग्रवाल समाज की एकता और भाईचारे का प्रतीक है।
                </p>
              </div>
            </div>
            <div className="card-royal p-8 text-center">
              <Building2 className="w-24 h-24 mx-auto text-primary mb-6" />
              <h3 className="text-xl font-bold mb-2">अग्रसेन भवन</h3>
              <p className="text-muted-foreground">श्याम नगर, नीम का थाना</p>
              <p className="text-muted-foreground">राजस्थान, भारत</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agrasen Jayanti */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">उत्सव</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">अग्रसेन जयंती और आयोजन</h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {events.map((event, i) => (
              <div key={i} className="card-royal p-8 group">
                <div className="w-14 h-14 mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* समाज सेवा */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">समाज सेवा</h2>
            </div>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                नीम का थाना में अग्रवाल समाज समिति, महिला अग्रवाल समाज और युवा अग्रवाल समाज मिलकर विभिन्न सामाजिक कार्यों का संचालन करते हैं।
              </p>
              <p>
                इनमें गरीब परिवारों की सहायता, शिक्षा के लिए छात्रवृत्ति, स्वास्थ्य शिविर, और सामुदायिक विकास कार्यक्रम शामिल हैं। समाज की एकता और सेवा भावना महाराजा अग्रसेन जी के आदर्शों को जीवंत रखती है।
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { label: "अग्रवाल समाज समिति", desc: "मुख्य संगठन" },
                { label: "महिला अग्रवाल समाज", desc: "महिला शाखा" },
                { label: "युवा अग्रवाल समाज", desc: "युवा शाखा" },
              ].map((org, i) => (
                <div key={i} className="card-royal p-6 text-center">
                  <h4 className="font-bold text-sm mb-1">{org.label}</h4>
                  <p className="text-xs text-muted-foreground">{org.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeemKaThanaPage;
