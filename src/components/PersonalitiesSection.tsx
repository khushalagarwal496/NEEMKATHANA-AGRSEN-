const personalities = [
  { name: "Bhagwan Das", award: "भारत रत्न", image: "/images/vishnu-prabhakar.jpg" },
  { name: "Shekhar Gupta", award: "पद्म भूषण", image: "/images/shekhar.jpg" },
  { name: "Sunil Bharti Mittal", award: "पद्म भूषण", image: "/images/sunil-mittal.jpg" },
  { name: "Vijaypat Singhania", award: "पद्म भूषण", image: "/images/singhania.jpg" },
  { name: "Lala Lajpat Rai", award: "स्वतंत्रता सेनानी", image: "/images/lajpat-rai.jpg" },
  { name: "Laxmi Mittal", award: "पद्म विभूषण", image: "/images/lakshmi-mittal.jpg" },
  { name: "Rahul Bajaj", award: "पद्म भूषण", image: "/images/rahul-bajaj.jpg" },
  { name: "Janaki Devi Bajaj", award: "पद्म भूषण", image: "/images/janaki-devi.jpg" },
  { name: "Lt Gen R P Agarwal", award: "परम विशिष्ट", image: "/images/lt-gen-agarwal.jpg" },
  { name: "Vishnu Prabhakar", award: "पद्म भूषण", image: "/images/vishnu-prabhakar.jpg" },
];

const PersonalitiesSection = () => {
  return (
    <section id="personalities" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">गौरव</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">प्रतिष्ठित व्यक्तित्व</h2>
          <div className="section-divider mt-4" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            अग्रवाल समुदाय भारत के सबसे अमीर और समृद्ध समुदायों में से एक है
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {personalities.map((person, i) => (
            <div key={i} className="card-royal p-4 text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-sm mb-1">{person.name}</h3>
              <p className="text-xs text-muted-foreground">{person.award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalitiesSection;
