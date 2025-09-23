import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="EVOA IA Logo" className="h-12 mr-4" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EVOA IA
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformamos negocios de hostelería con soluciones de Inteligencia Artificial 
              diseñadas específicamente para PYMEs del sector.
            </p>
            <Button 
              onClick={handleScheduleCall}
              className="bg-gradient-primary hover:shadow-purple text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Agendar Llamada
            </Button>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-purple-light">
              Servicios
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Chatbots Inteligentes</li>
              <li>Automatización de Procesos</li>
              <li>Análisis Predictivo</li>
              <li>Revenue Management</li>
              <li>Personalización IA</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-purple-light">
              Contacto
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>Consulta Gratuita</p>
              <p>30 minutos sin compromiso</p>
              <Button 
                onClick={handleScheduleCall}
                variant="outline"
                size="sm"
                className="mt-3 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
              >
                Agendar Llamada
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 EVOA IA. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Especialistas en IA para Hostelería</span>
            <span>•</span>
            <span>Resultados Garantizados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;