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
      name: "María González",
      position: "Directora General",
      company: "Hotel Boutique Casa Blanca",
      location: "Madrid",
      content: "Desde que implementamos las soluciones de EVOA IA, nuestros ingresos aumentaron un 35%. El sistema de pricing dinámico y los chatbots han revolucionado nuestra operación. El equipo de EVOA nos acompañó en cada paso del proceso.",
      rating: 5,
      result: "+35% ingresos"
    },
    {
      name: "Carlos Mendoza",
      position: "Propietario",
      company: "Restaurante El Jardín",
      location: "Barcelona",
      content: "La automatización de reservas y el análisis predictivo nos han permitido optimizar nuestro personal y reducir costos operativos en un 25%. EVOA IA realmente entiende las necesidades del sector hostelero.",
      rating: 5,
      result: "-25% costos"
    },
    {
      name: "Ana Rodríguez",
      position: "Gerente de Operaciones",
      company: "Cadena Hotelera Costa del Sol",
      location: "Málaga",
      content: "El chatbot inteligente maneja el 80% de nuestras consultas automáticamente y la satisfacción del cliente ha subido notablemente. La implementación fue rápida y el soporte técnico excepcional.",
      rating: 5,
      result: "80% automatización"
    },
    {
      name: "Pedro Martín",
      position: "Director Comercial",
      company: "Resort Mediterráneo",
      location: "Valencia",
      content: "Las recomendaciones personalizadas han incrementado nuestras ventas adicionales en un 40%. Los huéspedes se sienten más atendidos y nosotros generamos más ingresos. Una inversión que se pagó sola en 3 meses.",
      rating: 5,
      result: "+40% ventas adicionales"
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