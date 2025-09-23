import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Users, Zap } from "lucide-react";

const ProblemsSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };

  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-brand-purple" />,
      title: "Gestión Manual Ineficiente",
      description: "Procesos manuales que consumen tiempo valioso y generan errores costosos en reservas, inventario y facturación."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-brand-purple" />,
      title: "Pérdida de Ingresos",
      description: "Oportunidades perdidas por falta de análisis de datos, precios no optimizados y gestión deficiente de la demanda."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-purple" />,
      title: "Experiencia del Cliente Limitada",
      description: "Dificultades para personalizar el servicio y responder rápidamente a las necesidades de los huéspedes."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-brand-purple" />,
      title: "Falta de Competitividad",
      description: "Quedarse atrás frente a competidores que ya implementan tecnologías avanzadas de automatización."
    }
  ];

  const solutions = [
    {
      icon: <Zap className="h-8 w-8 text-brand-purple" />,
      title: "Automatización Inteligente",
      description: "Chatbots de IA para atención al cliente 24/7, gestión automática de reservas y optimización de inventarios."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-brand-purple rotate-180" />,
      title: "Optimización de Ingresos",
      description: "Análisis predictivo para pricing dinámico, forecasting de demanda y estrategias de revenue management."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-purple" />,
      title: "Personalización Avanzada",
      description: "Sistemas de recomendaciones personalizadas y análisis de sentimientos para mejorar la satisfacción del cliente."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-brand-purple" />,
      title: "Ventaja Competitiva",
      description: "Implementación de tecnologías de vanguardia que posicionan tu negocio como líder en innovación."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        {/* Problems Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-foreground">¿Te suenan estos </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">problemas</span>
            <span className="text-foreground">?</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            La mayoría de PYMEs hosteleras enfrentan estos desafíos diarios que limitan su crecimiento
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-purple transition-all duration-300 border-0">
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
              </Card>
            ))}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-primary text-white shadow-purple hover:shadow-lg hover:scale-105 transition-all duration-300 border-0">
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
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleScheduleCall}
              size="lg"
              className="bg-gradient-primary hover:shadow-purple text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Agendar Llamada
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Descubre cómo podemos transformar tu negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;