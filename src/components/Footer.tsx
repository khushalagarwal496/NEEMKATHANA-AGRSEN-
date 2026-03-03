import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-cream text-foreground py-16 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">नीमकाथाना अग्रोहाधाम</h3>
            <p className="text-foreground/70 leading-relaxed">
              महाराजा अग्रसेन जी की विरासत को समर्पित — समानता, सद्भाव और समृद्धि का संदेश।
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/maharaja-agrasen" className="hover:text-gold transition-colors">महाराजा अग्रसेन</Link></li>
              <li><Link to="/#gotra" className="hover:text-gold transition-colors">गोत्र और ऋषि</Link></li>
              <li><Link to="/aarti" className="hover:text-gold transition-colors">अग्रसेन आरती</Link></li>
              <li><Link to="/neem-ka-thana" className="hover:text-gold transition-colors">नीम का थाना</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">संपर्क</h4>
            <p className="text-foreground/70 leading-relaxed">
              अग्रसेन भवन, श्याम नगर<br />
              नीम का थाना, राजस्थान
            </p>
          </div>
        </div>
        <div className="border-t border-foreground/10 mt-12 pt-8 text-center text-foreground/50 text-sm">
          © 2026 नीमकाथाना अग्रोहाधाम. सर्वाधिकार सुरक्षित।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
