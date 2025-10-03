import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";
import logo from "@/assets/logo.png";
const HeroSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };
  return <section id="inicio" className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-brand-purple-light/8 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tighter">
              <span className="text-foreground">Revoluciona tu </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Negocio</span>
              <span className="text-foreground"> con IA</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed max-w-2xl">Automatiza operaciones, aumenta ingresos y mejora la experiencia de tus huéspedes con nuestras soluciones de inteligencia artificial especializadas para la hostelería.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button onClick={handleScheduleCall} size="lg" className="bg-gradient-primary hover:shadow-elegant text-white font-bold px-10 py-6 text-base rounded-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5">
                Agendar Llamada Gratuita
              </Button>
              <div className="flex flex-col text-sm">
                <span className="text-muted-foreground">✓ Sin compromiso</span>
                <span className="text-muted-foreground">✓ 30 minutos de consulta</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg h-[450px] relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-brand-purple/10">
              <img src={heroImage} alt="Hotel moderno con tecnología IA integrada" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 via-brand-purple/5 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;