import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  const scrollToContacts = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40 shadow-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection("inicio")}>
            <img src={logo} alt="EVOA IA Logo" className="h-10 mr-3 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
              EVOA IA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-brand-purple transition-colors duration-200 font-semibold text-sm relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("servicios")} className="text-foreground hover:text-brand-purple transition-colors duration-200 font-semibold text-sm relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection("testimonios")} className="text-foreground hover:text-brand-purple transition-colors duration-200 font-semibold text-sm relative group">
              Testimonios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={scrollToContacts} className="text-foreground hover:text-brand-purple transition-colors duration-200 font-semibold text-sm relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button onClick={handleScheduleCall} className="bg-gradient-primary hover:shadow-elegant text-white font-bold text-sm px-6 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
              Agendar Llamada
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-brand-purple p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <div className="md:hidden bg-white border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("inicio")} className="block w-full text-left px-3 py-2 text-foreground hover:text-brand-purple hover:bg-brand-purple-light/20 rounded-md transition-colors duration-200 font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection("servicios")} className="block w-full text-left px-3 py-2 text-foreground hover:text-brand-purple hover:bg-brand-purple-light/20 rounded-md transition-colors duration-200 font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection("testimonios")} className="block w-full text-left px-3 py-2 text-foreground hover:text-brand-purple hover:bg-brand-purple-light/20 rounded-md transition-colors duration-200 font-medium">
                Testimonios
              </button>
              <button onClick={scrollToContacts} className="block w-full text-left px-3 py-2 text-foreground hover:text-brand-purple hover:bg-brand-purple-light/20 rounded-md transition-colors duration-200 font-medium">
                Contactos
              </button>
              <div className="pt-2">
                <Button onClick={handleScheduleCall} className="w-full bg-gradient-primary hover:shadow-purple text-white font-semibold">
                  Agendar Llamada
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;