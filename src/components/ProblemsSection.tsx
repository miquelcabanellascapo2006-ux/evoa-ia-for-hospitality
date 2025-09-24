import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Users, Zap } from "lucide-react";
import restaurantImage from "@/assets/restaurant-ai.jpg";
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
    icon: <Zap className="h-8 w-8 text-brand-purple" />,
    title: "Low Ticket (Entrada)",
    description: "Chatbot básico para reservas y FAQs (WhatsApp/web), respuestas automáticas a reseñas (Google/TripAdvisor), página de reservas simple."
  }, {
    icon: <TrendingDown className="h-8 w-8 text-brand-purple rotate-180" />,
    title: "Mid Ticket (Core/Escalable)",
    description: "Chatbot avanzado multicanal, automatización de reservas con recordatorios, gestión de pedidos vía WhatsApp, página web completa."
  }, {
    icon: <Users className="h-8 w-8 text-brand-purple" />,
    title: "High Ticket (Premium)",
    description: "Asistente 24/7 omnicanal, automatización total del ciclo de reservas/pedidos, gestión interna automatizada, página web premium."
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-foreground">Nuestras </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">soluciones</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Transformamos cada problema en una oportunidad de crecimiento con IA especializada
          </p>
          
          {/* Solutions with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="grid md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => <Card key={index} className="bg-gradient-primary text-white shadow-purple hover:shadow-lg hover:scale-105 transition-all duration-300 border-0">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="text-white">
                          {solution.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant h-80">
                <img src={restaurantImage} alt="Personal de restaurante usando tecnología IA" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={handleScheduleCall} size="lg" className="bg-gradient-primary hover:shadow-purple text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
              Agendar Llamada
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Descubre cómo podemos transformar tu negocio
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemsSection;