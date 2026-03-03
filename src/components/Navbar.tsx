import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "होम", href: "/" },
  { label: "महाराजा अग्रसेन", href: "/maharaja-agrasen" },
  { label: "गोत्र", href: "/#gotra" },
  { label: "आरती", href: "/aarti" },
  { label: "नीम का थाना", href: "/neem-ka-thana" },
  { label: "गैलरी", href: "/gallery" },
  { label: "संपर्क", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gold/20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-gold">नीमकाथाना अग्रोहाधाम</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`text-sm transition-colors duration-200 ${location.pathname === item.href
                  ? "text-gold"
                  : "text-foreground hover:text-gold"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream/98 border-t border-gold/20 shadow-md">
          <ul className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="block py-2 text-foreground font-medium hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
