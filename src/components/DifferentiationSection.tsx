import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, HeartHandshake, Rocket, Shield, Clock3 } from "lucide-react";
import aiSolutionsImage from "@/assets/ai-solutions.jpg";
const DifferentiationSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };
  const differentiators = [{
    icon: <Target className="h-10 w-10 text-brand-purple" />,
    title: "Especialización Total",
    description: "Nos enfocamos exclusivamente en el sector hostelero. Conocemos cada desafío, cada oportunidad y cada matiz de tu industria.",
    badge: "100% Hostelería"
  }, {
    icon: <Lightbulb className="h-10 w-10 text-brand-purple" />,
    title: "Soluciones Personalizadas",
    description: "No vendemos productos genéricos. Cada solución se diseña específicamente para las necesidades únicas de tu negocio.",
    badge: "Hecho a Medida"
  }, {
    icon: <HeartHandshake className="h-10 w-10 text-brand-purple" />,
    title: "Acompañamiento Completo",
    description: "Te acompañamos desde la implementación hasta el éxito. Formación, soporte y optimización continua incluidos.",
    badge: "Soporte Total"
  }, {
    icon: <Rocket className="h-10 w-10 text-brand-purple" />,
    title: "Implementación Rápida",
    description: "Resultados visibles en semanas, no meses. Nuestra metodología ágil garantiza una rápida puesta en marcha.",
    badge: "Resultados Rápidos"
  }, {
    icon: <Shield className="h-10 w-10 text-brand-purple" />,
    title: "ROI Garantizado",
    description: "Medimos y garantizamos el retorno de inversión. Si no ves mejoras tangibles, trabajamos hasta conseguirlas.",
    badge: "ROI Asegurado"
  }, {
    icon: <Clock3 className="h-10 w-10 text-brand-purple" />,
    title: "Experiencia Demostrada",
    description: "Años de experiencia transformando negocios hosteleros con casos de éxito reales y resultados medibles.",
    badge: "Experiencia Probada"
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">¿Por qué elegir </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">EVOA IA</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">No somos una agencia más de IA. Somos especialistas que comprenden profundamente los desafíos únicos del sector hostelero.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant h-80">
            <img src={aiSolutionsImage} alt="Tecnología IA para hostelería - chatbots y sistemas automatizados" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-brand-purple/30 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.slice(0, 4).map((diff, index) => <Card key={index} className="group bg-white shadow-soft hover:shadow-purple transition-all duration-300 border border-brand-purple-light/20 overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-brand-purple-light text-brand-purple-dark font-medium text-xs">
                      {diff.badge}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <div className="text-white text-sm">
                        {diff.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-brand-purple transition-colors duration-300">
                    {diff.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Additional differentiators */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {differentiators.slice(4).map((diff, index) => <Card key={index + 4} className="group bg-white shadow-soft hover:shadow-purple transition-all duration-300 border border-brand-purple-light/20 overflow-hidden">
              
            </Card>)}
        </div>

        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white shadow-purple">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a los hoteles, restaurantes y establecimientos que ya están viendo 
            resultados extraordinarios con nuestras soluciones de IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleScheduleCall} size="lg" variant="secondary" className="bg-white text-brand-purple hover:bg-gray-100 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Agendar Llamada
            </Button>
            <div className="text-white/80 text-sm">
              <p className="font-medium">Consulta gratuita • Sin compromiso</p>
              <p>Resultados garantizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentiationSection;