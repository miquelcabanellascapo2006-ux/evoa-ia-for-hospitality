import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Users, Zap, Check } from "lucide-react";
import restaurantImage from "@/assets/restaurant-ai.jpg";
import serviceStarter from "@/assets/service-starter.jpg";
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
    price: "39,95€",
    features: ["Página web con carta digital"],
    image: serviceStarter
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
  return <section id="servicios" className="py-24 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6">
        {/* Problems Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tighter">
            <span className="text-foreground">¿Te suenan estos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">problemas</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">La mayoría de PYMES hosteleras enfrentan estos desafíos diarios que limitan su crecimiento</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {problems.map((problem, index) => <Card key={index} className="bg-white shadow-soft hover:shadow-elegant transition-all duration-500 border border-border/50 hover:border-brand-purple/30 rounded-2xl group hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-brand-purple-light/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {problem.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground tracking-tight">
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
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-purple uppercase tracking-wider">
              <Zap className="h-4 w-4" />
              Nuestros Servicios
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tighter">
            <span className="text-foreground">Tres caminos hacia el </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Éxito</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Transformamos cada problema en una oportunidad de crecimiento con IA especializada
          </p>
          
          {/* Solutions Grid */}
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {solutions.map((solution, index) => <div key={index} className={`group relative bg-gradient-primary text-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${index === 2 ? 'ring-4 ring-brand-purple/40 scale-[1.05]' : ''}`}>
                
                {/* Most Popular Badge */}
                {index === 2 && <div className="absolute -top-4 -right-4 z-10">
                    <div className="bg-accent text-accent-foreground px-8 py-4 rounded-bl-3xl rounded-tr-3xl shadow-elegant backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 fill-current" />
                        <span className="text-sm font-extrabold tracking-wide">MÁS VENDIDO</span>
                      </div>
                    </div>
                  </div>}
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={solution.image} alt={`Servicio ${solution.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent" />
                </div>
                
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
                      {solution.title}
                    </h3>
                    <p className="text-white/90 text-base font-medium">
                      {solution.subtitle}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {solution.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start text-white group/item">
                        <Check className="h-6 w-6 text-white mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed font-medium">{feature}</span>
                      </li>)}
                  </ul>
                  
                  <Button onClick={handleScheduleCall} variant="secondary" className="bg-white text-brand-purple hover:bg-white/95 hover:scale-[1.02] hover:-translate-y-1 font-bold px-8 py-7 w-full rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-base">
                    Comenzar Ahora
                  </Button>
                  
                  {/* Price Badge */}
                  {solution.price && <div className="mt-4 flex justify-end">
                      
                    </div>}
                </div>
              </div>)}
          </div>

          
        </div>
      </div>
    </section>;
};
export default ProblemsSection;