const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <img
        src="/images/hero-maharaja.webp"
        alt="महाराजा अग्रसेन जी"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            ॥ जय महाराजा अग्रसेन ॥
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
            महाराजा<br />
            <span className="text-gold-gradient">अग्रसेन जी</span>
          </h1>
          <p className="text-cream/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            समानता, सद्भाव और समृद्धि के प्रतीक — अग्रवाल समुदाय के आदि संस्थापक
          </p>
          <a
            href="#about"
            className="inline-block px-8 py-3 gold-gradient text-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            और जानें
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
