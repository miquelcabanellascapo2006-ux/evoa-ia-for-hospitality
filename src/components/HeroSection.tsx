import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";
import logo from "@/assets/logo.png";
const HeroSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };
  return <section id="inicio" className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-purple-light/5 to-brand-purple/10" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-purple-light/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Revoluciona tu </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Negocio</span>
              <span className="text-foreground"> con IA</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              Automatiza operaciones, aumenta ingresos y mejora la experiencia de tus huéspedes 
              con nuestras soluciones de inteligencia artificial especializadas para PYMES hoteleras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button onClick={handleScheduleCall} size="lg" className="bg-gradient-primary hover:shadow-purple text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Agendar Llamada
              </Button>
              <p className="text-sm text-muted-foreground">
                Consulta gratuita de 30 minutos
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-96 relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={heroImage} alt="Hotel moderno con tecnología IA integrada" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;