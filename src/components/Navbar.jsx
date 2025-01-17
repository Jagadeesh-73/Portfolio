import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
  
    if (targetElement) {
      const headerOffset = 85; // Offset to adjust for fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", 
      });
    }
  
    // Close mobile menu if it's open
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
        <div className="flex items-center justify-between gap-6">
          <a href="#">
            <img src={logo} width={150} alt="logo" />
          </a>
          <ul className="flex items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm hover:text-yellow-400"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
