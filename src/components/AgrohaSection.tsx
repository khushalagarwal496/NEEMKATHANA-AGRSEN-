const AgrohaSection = () => {
  return (
    <section id="agroha" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">इतिहास</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">अग्रोहा के बारे में</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">अग्रोहा की स्थापना</h3>
            <div className="section-divider-left" />
            <p className="text-muted-foreground leading-relaxed">
              देवी महालक्ष्मी के आशीर्वाद से राजा अग्रसेन एक नए राज्य के लिए जगह का चयन करने के लिए रानी के साथ पूरे भारत की यात्रा पर निकल पड़े। अपनी यात्रा के दौरान, एक स्थान पर उन्हें कुछ बाघ शावक और भेड़िये के बच्चे एक साथ खेलते हुए मिले।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              राजा अग्रसेन और रानी माधवी के लिए, यह एक शुभ संकेत था कि यह क्षेत्र वीर भूमि (बहादुरों की भूमि) था और उन्होंने अग्रोहा नामक स्थान पर अपना नया राज्य स्थापित करने का फैसला किया। कृषि और व्यापार के फलने-फूलने से अग्रोहा समृद्ध हो गया।
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-secondary">अग्रोहा नगर की पुनः स्थापना</h3>
            <div className="section-divider-left" />
            <p className="text-muted-foreground leading-relaxed">
              1194 में गोरी द्वारा कब्जा किये जाने के बाद अग्रोहा उजाड़ हो गया। 1907 में, एक तपस्वी ब्रह्मानंद ब्रह्मचारी अग्रोहा पहुंचे। उन्होंने अग्रवाल समुदाय के प्रतिनिधियों को प्रेरित करके 1908 में अग्रवाल दरबार नामक एक समूह का आयोजन किया।
            </p>
            <p className="text-muted-foreground leading-relaxed">
              आधुनिक मंदिर के निर्माण का निर्णय 1976 में अखिल भारतीय अग्रवाल प्रतिनिधियों के सम्मेलन में किया गया था। मुख्य मंदिर का निर्माण 1984 में पूरा हुआ।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgrohaSection;
