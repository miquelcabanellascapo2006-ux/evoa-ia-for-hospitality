import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialsBackground from "@/assets/testimonials-bg.jpg";

const TestimonialsSection = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/miquelcabanellascapo2006/30min", "_blank");
  };

  const testimonials = [
    {
      name: "Isabel Ramón",
      position: "Directora General",
      company: "Hotel Son Vida",
      location: "Palma de Mallorca",
      content: "Desde que implementamos EVOA IA en nuestro hotel de lujo, hemos aumentado la ocupación un 42% durante temporada media. El sistema de pricing dinámico se adapta perfectamente a la demanda turística de Mallorca y los chatbots atienden a nuestros huéspedes internacionales las 24 horas.",
      rating: 5,
      result: "+42% ocupación"
    },
    {
      name: "Tomeu Barceló",
      position: "Propietario",
      company: "Restaurant Ca'n Joan de S'Aigo",
      location: "Palma de Mallorca",
      content: "Como restaurante centenario en Palma, necesitábamos modernizarnos sin perder nuestra esencia. EVOA IA nos ayudó a automatizar reservas y gestionar las colas durante la temporada alta. Hemos reducido las esperas un 60% y aumentado la satisfacción de nuestros clientes mallorquines y turistas.",
      rating: 5,
      result: "-60% tiempo espera"
    },
    {
      name: "Catalina Soler",
      position: "Gerente",
      company: "Hotel Rural Es Turó",
      location: "Felanitx, Mallorca",
      content: "En nuestro hotel rural en el interior de Mallorca, el chatbot de EVOA IA ha sido clave para informar sobre actividades locales y rutas de senderismo. El 85% de las consultas se resuelven automáticamente, permitiendo que nos centremos en ofrecer experiencias auténticas mallorquinas.",
      rating: 5,
      result: "85% consultas automatizadas"
    },
    {
      name: "Miquel Forteza",
      position: "Director Comercial",
      company: "Hotel Majestic",
      location: "Can Pastilla, Mallorca",
      content: "En plena Playa de Palma, competir es intenso. Las recomendaciones personalizadas de EVOA IA han incrementado nuestros servicios adicionales un 38%. Los huéspedes alemanes y británicos reciben sugerencias en su idioma sobre excursiones y restaurantes locales. ROI en solo 2 meses.",
      rating: 5,
      result: "+38% servicios adicionales"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={testimonialsBackground} 
          alt="Testimonios de éxito"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Lo que dicen nuestros </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Casos reales de éxito que demuestran el impacto transformador de nuestras soluciones de IA 
            en negocios hosteleros como el tuyo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-soft hover:shadow-purple transition-all duration-300 border border-brand-purple-light/20 overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-purple-light opacity-30" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Result Badge */}
                <div className="mb-4">
                  <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.result}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-brand-purple-light/20 pt-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-purple font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company} • {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-purple-light/10 to-brand-purple/10 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h3>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Únete a los cientos de negocios hosteleros que ya están transformando 
            sus operaciones y aumentando sus ingresos con nuestras soluciones de IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleScheduleCall}
              size="lg"
              className="bg-gradient-primary hover:shadow-purple text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Agendar Llamada
            </Button>
            <p className="text-sm text-muted-foreground">
              Consulta gratuita • Resultados garantizados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;