import { Crown, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Crown,
    title: "राजसी विरासत",
    description: "महाराजा अग्रसेन अग्रोहा साम्राज्य के राजा थे। उनकी विरासत आज भी 18 गोत्रों के माध्यम से जीवित है।",
  },
  {
    icon: Heart,
    title: "सद्भाव और सेवा",
    description: "उनके कर्म और अनुयायी आज भी सद्भाव, समाज सेवा, शांति और त्याग की बातें फैला रहे हैं।",
  },
  {
    icon: Users,
    title: "समृद्ध समुदाय",
    description: "अग्रवाल समुदाय भारत के सबसे अमीर और समृद्ध समुदायों में से एक है, व्यापार और शिक्षा में अग्रणी।",
  },
];

const LegacySection = () => {
  return (
    <section id="legacy" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">विरासत</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            महाराजा अग्रसेन की विरासत
          </h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            एक महान राजा अपने मूल्यों और सिद्धांतों के साथ अभी भी जीवित है
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((item, i) => (
            <div key={i} className="card-royal p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
