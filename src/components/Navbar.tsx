import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "होम", href: "/" },
  {
    label: "परिचय",
    href: "#",
    children: [
      { label: "महाराजा अग्रसेन जी", href: "/maharaja-agrasen" },
      { label: "अग्रवालों के गोत्र", href: "/gotra" },
      { label: "अग्रसेन आरती", href: "/aarti" },
    ],
  },
  { label: "नीम का थाना", href: "/neem-ka-thana" },
  { label: "संपर्क", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-gold">अग्रोहाधाम</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-cream hover:text-gold transition-colors duration-200">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-[#1a1512] border border-gold/20 rounded-lg shadow-2xl py-2 overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            to={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              location.pathname === child.href
                                ? "text-gold bg-gold/10"
                                : "text-cream hover:text-gold hover:bg-gold/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-gold"
                      : "text-cream hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/98 border-t border-gold/20">
          <ul className="flex flex-col p-4 gap-2">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-2 mt-2">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block pl-4 py-2 text-cream hover:text-gold transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block py-2 text-cream hover:text-gold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
