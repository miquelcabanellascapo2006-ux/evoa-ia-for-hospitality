import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Download, Mail, CheckCircle } from "lucide-react";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "El email debe tener menos de 255 caracteres" })
});

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      toast({
        title: "Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email: result.data.email,
            source: 'website'
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Ya estás suscrito",
            description: "Este email ya está registrado en nuestro newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        toast({
          title: "¡Suscripción exitosa!",
          description: "Recibirás tu guía gratuita de IA en tu email.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al suscribirse. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadGuide = () => {
    // Download the actual PDF guide
    const link = document.createElement('a');
    link.href = '/Guia_Ia_Hosteleria.pdf';
    link.download = 'Guia_IA_Hosteleria.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Descarga iniciada",
      description: "Tu guía de IA se está descargando.",
    });
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="glass rounded-3xl shadow-elegant p-8 md:p-12 border border-white/50 backdrop-blur-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-elegant rounded-full mb-6 animate-float shadow-elegant">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground mb-4 tracking-tight">
              Recibe tu Guía Gratuita de IA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descarga nuestra guía completa sobre cómo la Inteligencia Artificial puede transformar tu negocio. 
              Incluye casos prácticos, estrategias y consejos de implementación.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-12 px-8 bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {isLoading ? "Enviando..." : "Obtener Guía"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Al suscribirte, recibirás contenido exclusivo sobre IA y tecnología.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ¡Suscripción Confirmada!
              </h3>
              <p className="text-muted-foreground mb-6">
                Recibirás tu guía gratuita en tu email en los próximos minutos.
              </p>
              <Button 
                onClick={handleDownloadGuide}
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Descargar Guía Ahora
              </Button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Casos Reales</h4>
                <p className="text-sm text-muted-foreground">
                  Ejemplos prácticos de implementación de IA en diferentes sectores
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Estrategias</h4>
                <p className="text-sm text-muted-foreground">
                  Metodologías probadas para integrar IA en tu negocio
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Implementación</h4>
                <p className="text-sm text-muted-foreground">
                  Pasos concretos para comenzar tu transformación digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;