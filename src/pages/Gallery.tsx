import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const galleryImages = [
    // User can upload or paste image filenames here. Example image paths below
    { id: 1, src: "https://images.unsplash.com/photo-1518770660439-4636190af475", alt: "Gallery Image 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "Gallery Image 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", alt: "Gallery Image 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", alt: "Gallery Image 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Gallery Image 5" },
    { id: 6, src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", alt: "Gallery Image 6" },
];

const Gallery = () => {
    return (
        <div className="min-h-screen flex flex-col pt-16 bg-cream">
            <Navbar />
            <PageHeader
                title="गैलरी"
                subtitle="Agroha Dham and Cultural Heritage Images"
            />

            <main className="flex-1 py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8 p-6 bg-gold/10 rounded-lg border border-gold/20 flex flex-col items-center text-center">
                        <h2 className="text-xl font-semibold text-foreground mb-2">अपनी तस्वीरें यहाँ जोड़ें</h2>
                        <p className="text-foreground/80 max-w-2xl">
                            To add your own photos to this gallery, place your image files in the <code className="bg-gold/20 px-1 rounded">public</code> folder and add them to the <code className="bg-gold/20 px-1 rounded">galleryImages</code> array in <code className="bg-gold/20 px-1 rounded">src/pages/Gallery.tsx</code>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map((img) => (
                            <div
                                key={img.id}
                                className="group relative aspect-square overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl border border-gold/10"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full border border-white/20">
                                        {img.alt}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Gallery;
