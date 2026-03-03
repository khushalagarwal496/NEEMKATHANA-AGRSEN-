import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const AboutMaharaja = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader
        subtitle="इतिहास"
        title="महाराजा अग्रसेन जी का जीवन"
        description="समानता, अहिंसा और समृद्धि के प्रतीक"
      />

      {/* प्रारंभिक जीवन */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <div className="relative">
              <img
                src="/images/hero-maharaja.webp"
                alt="महाराजा अग्रसेन जी"
                className="w-full rounded-xl shadow-2xl border-2 border-gold/20"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">महाराजा अग्रसेन जी का प्रारंभिक जीवन</h2>
              <div className="section-divider-left mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  महाराजा अग्रसेन एक प्रसिद्ध सूर्यवंशी (इक्ष्वाकु) क्षत्रिय राजा थे, जिनका जन्म 15 सितंबर 3082 ईसा पूर्व द्वापर युग के अंतिम चरण के दौरान भगवान राम (विष्णु अवतार) की 15वीं पीढ़ी में हुआ था। वे भगवान कृष्ण के समकालीन थे।
                </p>
                <p>
                  वह राजा वल्लभ देव के पुत्र थे जो कुश (भगवान राम के पुत्र) के वंशज थे। राजा मांधाता के दो पुत्र थे, गुणाधि और मोहन। महाराजा अग्रसेन प्रताप नगर (आज के राजस्थान, भारत में) के मोहन के वंशज राजा वल्लभ के सबसे बड़े पुत्र थे।
                </p>
                <p>
                  महाराजा वल्लभ ने राजकुमार अग्रसेन के नाम पर एक शहर का नाम 'आगरा' (आज के उत्तर प्रदेश, भारत में) रखा। महाराजा अग्रसेन की 18 संतानें थीं, जिनसे अग्रवाल गोत्र अस्तित्व में आया।
                </p>
                <p>
                  राजकुमार अग्रसेन अपनी दयालुता के लिए बहुत प्रसिद्ध थे और उन्होंने कभी किसी के साथ भेदभाव नहीं किया और बचपन में उनके आचरण से प्रजा बहुत प्रसन्न थी।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* विवाह */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">महाराजा अग्रसेन का विवाह</h2>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                जब अग्रसेन युवा हुए तो उन्होंने राजा नागराज की बेटी राजकुमारी माधवी के स्वयंवर में भाग लिया। देवताओं के राजा इंद्र सहित दुनिया भर के कई राजाओं ने भाग लिया। स्वयंवर में राजकुमारी माधवी ने वरमाला डालकर राजकुमार अग्रसेन का चयन किया।
              </p>
              <p>
                इस विवाह के कारण दो अलग-अलग पारिवारिक संस्कृतियाँ एक साथ आईं, राजकुमार अग्रसेन सूर्यवंशी थे, और राजकुमारी माधवी नागवंशी थीं। देवताओं के राजा इंद्र राजकुमारी माधवी की सुंदरता पर मोहित हो गए थे और उन्होंने उनसे विवाह करने की योजना बनाई थी।
              </p>
              <p>
                हालाँकि, अब जब वह उससे शादी करने में असमर्थ हो गया था, तो वह अग्रसेन से बहुत ईर्ष्यालु और क्रोधित हो गया। अग्रसेन से बदला लेने के लिए, इंद्र - क्योंकि वह वर्षा के देवता भी थे, ने यह सुनिश्चित किया कि प्रताप नगर में कोई वर्षा न हो। परिणामस्वरूप, प्रताप नगर राज्य में भयावह अकाल पड़ा।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* भगवान शिव की तपस्या */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">भगवान शिव और देवी महालक्ष्मी की कठोर तपस्या</h2>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                अपनी प्रजा को हर संकट से बचाने के लिए नारद ऋषि के सुझाव पर महाराजा अग्रसेन ने काशी शहर में भगवान शिव को प्रसन्न करने के लिए कठोर तपस्या शुरू की। महाराजा अग्रसेन की तपस्या से प्रसन्न होकर, भगवान शिव प्रकट हुए और उन्हें अपनी कुल देवी, देवी महालक्ष्मी को प्रसन्न करने की सलाह दी।
              </p>
              <p>
                महाराज अग्रसेन ने फिर से देवी महालक्ष्मी का ध्यान करना शुरू कर दिया, जो उनके सामने प्रकट हुईं। तब देवी महालक्ष्मी ने महाराजा अग्रसेन को आशीर्वाद दिया और सुझाव दिया कि वह अपने लोगों की समृद्धि के लिए व्यापार की वैश्य परंपरा को अपनाएं।
              </p>
              <p>
                फिर उसने उससे एक नया राज्य खोजने के लिए कहा और उसने उसे और उसके वंशजों को समृद्धि प्रदान करने का वचन दिया। इसलिए, उन्होंने अपनी क्षत्रिय परंपरा को त्याग दिया और अपने लोगों के लाभ के लिए वणिक धर्म को अपनाया।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* नये राज्य की स्थापना */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">नये राज्य की स्थापना</h2>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                देवी महालक्ष्मी के आशीर्वाद से महाराजा अग्रसेन अपनी रानी (माता माधवी) के साथ नए राज्य की स्थापना के लिए जगह का चयन करने के लिए पूरे भारत की यात्रा पर निकल पड़े। अपनी यात्रा के दौरान, एक स्थान पर उन्हें कुछ बाघ शावक और भेड़िये के बच्चे एक साथ खेलते हुए मिले।
              </p>
              <p>
                महाराजा अग्रसेन और रानी माधवी के लिए, यह एक शुभ संकेत था कि यह क्षेत्र वीर भूमि (बहादुरों की भूमि) था और उन्होंने अग्रोहा नामक स्थान पर अपना नया राज्य खोजने का फैसला किया। कृषि और व्यापार के फलने-फूलने से अग्रोहा समृद्ध हो गया।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* पशु-पक्षियों की हत्या पर प्रतिबंध */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2">पशु-पक्षियों की हत्या पर प्रतिबंध</h2>
            <div className="section-divider-left mb-6" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                महाराज अग्रसेन ने अपनी प्रजा की समृद्धि के लिए अनेक यज्ञ किये। उन दिनों यज्ञ करना समृद्धि का प्रतीक था। ऐसे ही एक यज्ञ के दौरान, महाराजा अग्रसेन ने देखा कि एक घोड़ा जिसे बलि देने के लिए लाया गया था, वह यज्ञ वेदी से दूर जाने की बहुत कोशिश कर रहा था।
              </p>
              <p>
                यह देखकर महाराज अग्रसेन को दया आ गई और फिर उन्होंने सोचा कि मूक पशुओं की बलि देकर कौन सी समृद्धि प्राप्त की जा सकती है। अहिंसा के विचार ने महाराज अग्रसेन के मन को जकड़ लिया। तब राजा ने अपने मंत्रियों से इस पर चर्चा की।
              </p>
              <p>
                इस पर महाराज अग्रसेन ने कहा कि हिंसा और अन्याय को समाप्त करने का मतलब कमजोरी नहीं है। फिर उन्होंने घोषणा की कि उनके राज्य में हिंसा और जानवरों की हत्या नहीं होनी चाहिए।
              </p>
            </div>

            <blockquote className="mt-10 p-8 bg-cream rounded-xl border-l-4 border-primary text-center">
              <p className="text-secondary italic text-lg leading-relaxed">
                "एक क्रेन को तीर से निशाना बनाने के बजाय,<br />
                मैं इसे उड़ते हुए देखना चाहता हूं।<br />
                बुलबुल को खाने के बजाय,<br />
                मैं इसे गाते हुए सुनना चाहता हूँ"
              </p>
              <p className="mt-4 font-bold text-foreground">
                उसने सभी पक्षियों और जानवरों की बलि पर प्रतिबंध लगा दिया।
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* एक ईंट और एक रुपया */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gold-gradient text-foreground text-center py-6 px-8 rounded-xl mb-12">
              <p className="text-lg font-bold">
                5,000 वर्ष पहले महाराज अग्रसेन द्वारा प्रतिपादित समानता, समाजवाद और अहिंसा के विचार भारत के वर्तमान संविधान की भावना हैं।
              </p>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-2">"एक ईंट और एक रुपया"</h2>
            <div className="section-divider-left mb-4" />
            <p className="font-bold text-foreground mb-4">अद्भुत, सचमुच अनोखी कल्याणकारी नीति।</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "एक ईंट, एक रुपया" नीति के रूप में भी जाना जाता है, महाराजा अग्रसेन द्वारा परंपरा पर विचार करने योग्य एक कल्याणकारी गतिविधि बहुत लोकप्रिय रही है। यह उस स्थान पर बसने की इच्छा रखने वाले आप्रवासी को प्रत्येक नागरिक और प्रत्येक निवासी द्वारा एक ईंट और एक रुपया देने की सुविधा देने की नीति थी ताकि उसके पास घर के निर्माण के लिए हजारों ईंटें और अपना नया व्यवसाय शुरू करने के लिए रुपये हों।
              </p>
              <p>
                इसलिए, उनके शासन में कोई भी बेरोजगार नहीं था और सभी के पास अपना घर था। मानवता के समाजवाद का इससे बेहतर व्यावहारिक सिद्धांत कोई दूसरा नहीं हो सकता।
              </p>
            </div>

            <blockquote className="mt-8 p-6 bg-primary/10 rounded-xl border-l-4 border-primary text-center">
              <p className="text-secondary font-bold text-lg">
                यदि हम आज के युग में ऐसा विचार अपना लें तो निश्चित रूप से यह विश्व का सबसे महान देश बनेगा और कोई भी गरीब नहीं रहेगा।
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMaharaja;
