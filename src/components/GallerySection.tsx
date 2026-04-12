import React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
    title: string;
    description: string;
  }>(null);

  const images = [
    {
      src: "/images/one-rupee-one-brick.png",
      alt: "एक रुपया एक ईंट",
      title: "समानता का प्रतीक",
      description: "महाराजा अग्रसेन की 'एक रुपया एक ईंट' की महान सामाजिक नीति"
    },
    {
      src: "/images/agrasen-lakshmi.jpg",
      alt: "महाराजा अग्रसेन और लक्ष्मी माता",
      title: "दिव्य दर्शन",
      description: "महाराजा अग्रसेन जी और महालक्ष्मी माता का आशीर्वाद"
    },
    {
      src: "/images/award-ceremony.jpg",
      alt: "सम्मान समारोह",
      title: "प्रतिभा सम्मान",
      description: "समाज के गौरवशाली व्यक्तियों का सम्मान और अभिनंदन"
    },
    {
      src: "/images/event-banner.jpg",
      alt: "श्री अग्रवाल समाज नीमकाथाना कार्यक्रम",
      title: "समाज का गौरव",
      description: "नीमकाथाना के श्री अग्रवाल समाज का भव्य कार्यक्रम"
    },
    {
      src: "/images/deity-frames.jpg",
      alt: "लक्ष्मी माता, महाराजा अग्रसेन और भारत माता",
      title: "आध्यात्मिक आभा",
      description: "हमारे पूज्य देवी-देवता और महाराजा अग्रसेन जी"
    },
    {
      src: "/images/guest-welcome.jpg",
      alt: "अतिथि सत्कार",
      title: "अतिथि देवो भव",
      description: "समाज द्वारा अतिथियों का हार्दिक स्वागत और अभिनंदन"
    },
    {
      src: "/images/cultural-dance-1.jpg",
      alt: "सांस्कृतिक नृत्य",
      title: "सांस्कृतिक उत्सव",
      description: "समाज की महिलाओं द्वारा भव्य सांस्कृतिक नृत्य प्रदर्शन"
    },
    {
      src: "/images/cultural-dance-2.jpg",
      alt: "सांस्कृतिक प्रस्तुति",
      title: "उत्सव की उमंग",
      description: "परंपराओं का जीवंत प्रदर्शन"
    },
    {
      src: "/images/agroha-dham.png",
      alt: "अग्रोहा धाम मंदिर",
      title: "अग्रोहा धाम",
      description: "महाराजा अग्रसेन जी को समर्पित भव्य मंदिर"
    },
    {
      src: "/images/agrasen-statue.png",
      alt: "महाराजा अग्रसेन प्रतिमा",
      title: "महाराजा अग्रसेन",
      description: "अग्रवाल समाज के आदि पुरुष"
    },
    {
      src: "/images/cultural-symbol.png",
      alt: "सांस्कृतिक प्रतीक",
      title: "सांस्कृतिक विरासत",
      description: "हमारी समृद्ध परंपरा और मूल्य"
    },
    {
      src: "/images/hero-maharaja.webp",
      alt: "महाराजा अग्रसेन जी",
      title: "दिव्य अवतार",
      description: "समानता और समृद्धि के प्रतीक"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">छायाचित्र</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">गैलरी</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm translate-y-4 transition-transform duration-500 delay-75 group-hover:translate-y-0">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] md:max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none focus:outline-none focus-visible:outline-none">
          <div className="relative w-full h-full flex flex-col items-center">
            <div className="bg-[#1a1512] border border-gold/30 rounded-2xl overflow-hidden shadow-2xl animate-fade-in w-full max-h-[85vh] flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-black/20">
                <img
                  src={selectedImage?.src}
                  alt={selectedImage?.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-foreground/95 text-cream border-t border-gold/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gold mb-2">
                    {selectedImage?.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-cream/80 text-lg">{selectedImage?.description}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
