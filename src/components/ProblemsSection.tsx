import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Users, Zap } from "lucide-react";
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
    title: "Estándar",
    subtitle: "Servicios rápidos y de implementación inmediata",
    features: ["Chatbot básico para reservas y FAQs", "Respuestas automáticas a reseñas", "Página de reservas simple"],
    image: serviceStandard
  }, {
    title: "Medium",
    subtitle: "Soluciones completas que mejoran la operativa",
    features: ["Chatbot avanzado multicanal (WhatsApp + Web + Instagram)", "Automatización de reservas con confirmaciones y recordatorios", "Gestión de pedidos a domicilio y takeaway vía WhatsApp", "Página web completa optimizada con integración al chatbot"],
    image: serviceMedium
  }, {
    title: "Premium",
    subtitle: "Asistente integral + automatización total",
    features: ["Chatbot 24/7 omnicanal: WhatsApp, Instagram, Facebook, Google Business, Web", "Automatización de todo el ciclo de reservas/pedidos", "Gestión interna automatizada (recordatorios empleados, stock bajo)", "Página web premium + carta digital interactiva", "Soporte y personalización a medida"],
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
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => <div key={index} className="bg-gradient-primary text-white rounded-xl p-6 shadow-purple hover:shadow-lg hover:scale-105 transition-all duration-300 border-0 relative">
                {index === 1 && <div className="absolute -top-3 left-6">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-soft">
                      Más vendido
                    </span>
                  </div>}
                
                {/* Service Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img src={solution.image} alt={`Servicio ${solution.title}`} className="w-full h-40 object-cover" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 font-medium text-sm">
                    {solution.subtitle}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start text-white">
                      <span className="text-white mr-2 mt-1">•</span>
                      <span className="text-xs leading-relaxed">{feature}</span>
                    </li>)}
                </ul>
                <div className="text-center">
                  <Button onClick={handleScheduleCall} variant="secondary" className="bg-white text-brand-purple hover:bg-white/90 font-semibold px-6 py-2 w-full">
                    Comenzar
                  </Button>
                </div>
              </div>)}
          </div>

          
        </div>
      </div>
    </section>;
};
export default ProblemsSection;