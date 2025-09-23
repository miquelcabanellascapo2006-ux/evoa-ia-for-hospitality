import { Button } from "@/components/ui/button";
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img src={logo} alt="EVOA IA Logo" className="h-24 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              EVOA IA
            </span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
          Transformamos tu negocio de hostelería con{" "}
          <span className="text-brand-purple">Inteligencia Artificial</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Somos la agencia especializada en soluciones de IA para PYMES del sector hostelero. Automatizamos procesos, optimizamos operaciones y mejoramos la experiencia del cliente.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={handleScheduleCall} size="lg" className="bg-gradient-primary hover:shadow-purple text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            Agendar Llamada
          </Button>
          <p className="text-sm text-muted-foreground">
            Consulta gratuita de 30 minutos
          </p>
        </div>
      </div>
    </section>;
};
export default HeroSection;