import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Users, Zap, Check } from "lucide-react";
import restaurantImage from "@/assets/restaurant-ai.jpg";
import serviceStandard from "@/assets/service-standard.jpg";
import serviceMedium from "@/assets/service-medium.jpg";
import servicePremium from "@/assets/service-premium.jpg";
const ProblemsSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };
  const problems = [{
    icon: <Clock className="h-8 w-8 text-brand-purple" />,
    title: "Gestión Manual Ineficiente",
    description: "Procesos manuales que consumen tiempo valioso y generan errores costosos en reservas, inventario y facturación."
  }, {
    icon: <TrendingDown className="h-8 w-8 text-brand-purple" />,
    title: "Pérdida de Ingresos",
    description: "Oportunidades perdidas por falta de análisis de datos, precios no optimizados y gestión deficiente de la demanda."
  }, {
    icon: <Users className="h-8 w-8 text-brand-purple" />,
    title: "Experiencia del Cliente Limitada",
    description: "Dificultades para personalizar el servicio y responder rápidamente a las necesidades de los huéspedes."
  }, {
    icon: <AlertTriangle className="h-8 w-8 text-brand-purple" />,
    title: "Falta de Competitividad",
    description: "Quedarse atrás frente a competidores que ya implementan tecnologías avanzadas de automatización."
  }];
  const solutions = [{
    title: "Starter",
    subtitle: "Tu presencia digital básica",
    features: ["Página web con carta digital"],
    image: serviceStandard
  }, {
    title: "Estándar",
    subtitle: "La base perfecta para empezar",
    features: ["Página de reservas simple", "Chatbot básico en la página web para reservas y FAQs"],
    image: serviceStandard
  }, {
    title: "Medium",
    subtitle: "Automatización completa multicanal",
    features: ["Chatbot avanzado multicanal", "Automatización de reservas y recordatorios", "Página web completa con integración del chatbot", "Respuestas automáticas a reseñas"],
    image: serviceMedium
  }, {
    title: "Premium",
    subtitle: "Solución integral para tu negocio",
    features: ["Chatbot avanzado multicanal", "Automatización de reservas y recordatorios", "Página web completa con integración del chatbot", "Respuestas automáticas a reseñas", "Gestión de pedidos a domicilio y Takeaway", "Sistema de pago integrado"],
    image: servicePremium
  }];
  return <section id="servicios" className="py-20 bg-gradient-to-br from-white to-brand-purple-light/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Problems Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-foreground">¿Te suenan estos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">problemas</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">La mayoría de PYMES hosteleras enfrentan estos desafíos diarios que limitan su crecimiento</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => <Card key={index} className="bg-white shadow-soft hover:shadow-purple transition-all duration-300 border border-brand-purple-light/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <div className="flex justify-center mb-6">
            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-soft">
              servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-foreground">Tres caminos hacia el </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Exito</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Transformamos cada problema en una oportunidad de crecimiento con IA especializada
          </p>
          
          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => <div key={index} className="group relative bg-gradient-primary text-white rounded-2xl overflow-hidden shadow-purple hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {index === 2 && <div className="absolute -top-3 right-6 z-10">
                    <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Más vendido
                    </span>
                  </div>}
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={`Servicio ${solution.title}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {solution.subtitle}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start text-white group/item">
                        <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>)}
                  </ul>
                  
                  <Button 
                    onClick={handleScheduleCall} 
                    variant="secondary" 
                    className="bg-white text-brand-purple hover:bg-white/95 hover:scale-105 font-bold px-8 py-6 w-full rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Comenzar Ahora
                  </Button>
                </div>
              </div>)}
          </div>

          
        </div>
      </div>
    </section>;
};
export default ProblemsSection;