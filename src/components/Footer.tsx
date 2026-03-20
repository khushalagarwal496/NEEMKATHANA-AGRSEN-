import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                <img src="/og-image.png" alt="अग्रोहाधाम लोगो" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gold">अग्रोहाधाम नीमकाथाना</h3>
            </div>
            <p className="text-cream/60 leading-relaxed">
              महाराजा अग्रसेन जी की विरासत को समर्पित — समानता, सद्भाव और समृद्धि का संदेश।
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-cream/60">
              <li><Link to="/maharaja-agrasen" className="hover:text-gold transition-colors">महाराजा अग्रसेन</Link></li>
              <li><Link to="/gotra" className="hover:text-gold transition-colors">गोत्र और ऋषि</Link></li>
              <li><Link to="/aarti" className="hover:text-gold transition-colors">अग्रसेन आरती</Link></li>
              <li><Link to="/neem-ka-thana" className="hover:text-gold transition-colors">नीम का थाना</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-gold mb-2">संपर्क</h4>
            <p className="text-cream/60 leading-relaxed text-sm">
              अग्रसेन भवन, नीम का थाना <br />
              <div className="mt-4">
                <span className="text-gold font-semibold block leading-tight">रामशरण अग्रवाल</span>
                <span className="text-xs block text-cream/40 mb-1">अग्रवाल समाज कार्यकर्ता</span>
                <a href="tel:+919799174175" className="text-gold hover:underline block text-sm">9799174175</a>
              </div>
              <div className="mt-4">
                <span className="text-gold font-semibold block leading-tight">वेबसाइट डेवलपर</span>
                <div className="flex flex-col gap-0.5 mt-1">
                  <a href="tel:+918949243066" className="text-gold hover:underline block text-sm">8949243066</a>
                  <a href="tel:+919785492208" className="text-gold hover:underline block text-sm border-b border-gold/40 w-max">9785492208</a>
                </div>
              </div>
            </p>
            <div className="rounded-lg overflow-hidden h-[150px] border border-cream/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.391082464036!2d75.76538152459476!3d27.73191122575417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d275a254cff79%3A0x57e5a0a9c02ce3a!2sMaharaja%20Shree%20Agarsen%20Bhawan!5e0!3m2!1sen!2sin!4v1773212653306!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Footer Map Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
          © 2026 अग्रोहाधाम. सर्वाधिकार सुरक्षित। <br />
          <span className="mt-2 block text-gold/60 italic">यह वेबसाइट फतेहचंद अग्रवाल (मंढोली वाले) की तरफ से अग्रवाल समाज के लिए बनाई गई है।</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
