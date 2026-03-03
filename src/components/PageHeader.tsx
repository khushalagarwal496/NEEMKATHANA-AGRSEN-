interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
}

const PageHeader = ({ subtitle, title, description }: PageHeaderProps) => {
  return (
    <div className="bg-foreground pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">{title}</h1>
        <div className="w-24 h-1 mx-auto bg-gold rounded-full" />
        {description && (
          <p className="mt-6 text-cream/70 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
