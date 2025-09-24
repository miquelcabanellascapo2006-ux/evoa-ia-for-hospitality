import React, { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import logo from '@/assets/logo.png';
interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  showCalendlyButton?: boolean;
}
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    text: "¡Hola! En qué puedo ayudarte?",
    isUser: false,
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const botResponses = {
    // Preguntas sobre la empresa
    empresa: "EVOA es una agencia especializada en soluciones de IA para PYMEs. Llevamos años ayudando a empresas españolas a automatizar procesos y mejorar su eficiencia. Nuestro enfoque es hacer la IA accesible para pequeñas y medianas empresas.",
    
    // Preguntas sobre servicios
    servicios: "Nuestros servicios principales son:\n• Servicio Estándar\n• Servicio Medium\n• Servicio Premium\n\n¿Sobre qué servicio te gustaría saber más?",
    
    // Servicios específicos
    chatbots: "Nuestros chatbots personalizados automatizan la atención al cliente 24/7, responden preguntas frecuentes y capturan leads. Se integran con tu web y redes sociales.\n\n¿Te gustaría contratar este servicio?",
    automatizacion: "Automatizamos procesos repetitivos como facturación, inventarios, reportes y flujos de trabajo. Esto libera tiempo para tareas más estratégicas.\n\n¿Te gustaría contratar este servicio?",
    analisis: "Convertimos tus datos en insights valiosos. Análisis predictivo, reportes automáticos y dashboards para tomar mejores decisiones empresariales.\n\n¿Te gustaría contratar este servicio?",
    estandar: "Servicio Estándar: Solución básica de IA perfecta para empezar. Incluye implementación básica y soporte inicial.\n\n¿Te gustaría contratar este servicio?",
    medium: "Servicio Medium: Solución intermedia con funcionalidades avanzadas, integración con múltiples sistemas y soporte prioritario.\n\n¿Te gustaría contratar este servicio?",
    premium: "Servicio Premium: Solución completa y personalizada. IA avanzada, integración total, soporte 24/7 y consultoría estratégica.\n\n¿Te gustaría contratar este servicio?",
    
    // ¿Qué es un chatbot?
    que_es_chatbot: "Un chatbot para nuestra empresa es una herramienta digital que permite atender automáticamente a nuestros clientes, responder sus dudas y brindar información sobre nuestros productos o servicios de manera rápida y eficiente, sin que siempre tenga que intervenir una persona.",
    
    // Implementación y costos
    precios: "Los costos varían según la complejidad del proyecto. Un proyecto típico tarda entre 2-8 semanas. Ofrecemos soporte técnico completo post-implementación y facilitamos la integración con tus sistemas actuales.",
    implementacion: "La implementación es sencilla y nos encargamos de la integración con tus sistemas existentes. Incluimos capacitación y soporte continuo para garantizar el éxito del proyecto.",
    
    // ROI y beneficios
    beneficios: "Las empresas ven mejoras en eficiencia del 40-60%, reducción de costos operativos y mejor experiencia del cliente. Tenemos casos de éxito documentados donde las PYMEs recuperan su inversión en 3-6 meses.",
    
    // Seguridad y privacidad
    seguridad: "Cumplimos con todas las regulaciones españolas de protección de datos (RGPD). Implementamos medidas de seguridad avanzadas y tu información permanece completamente privada y protegida.",
    
    // Preguntas generales sobre IA
    que_es_ia: "La IA es tecnología que puede aprender y automatizar tareas. No reemplaza empleados, los potencia para que se enfoquen en tareas más estratégicas. En España vemos tendencias hacia automatización de atención al cliente y análisis predictivo.",
    
    // Contacto y consulta
    contacto: "Puedes contactarnos para una consulta gratuita. Evaluamos tu caso específico y te proponemos la mejor solución de IA para tu PYME. ¿Te gustaría agendar una llamada?",
    
    // Respuesta para contratar servicio
    contratar_si: "¡Perfecto! Te ayudamos a comenzar con tu proyecto de IA. Haz clic en el botón para agendar una consulta gratuita donde evaluaremos tu caso específico.",
    
    default: "Soy el asistente de EVOA, especialistas en IA para PYMEs españolas. Puedo ayudarte con información sobre nuestros servicios, costos, implementación, beneficios o cualquier duda sobre IA. ¿En qué puedo asistirte?"
  };
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simple keyword-based response
    const lowerInput = inputValue.toLowerCase();
    let response = botResponses.default;
    let showCalendlyButton = false;
    
    // Detectar respuestas afirmativas para contratar servicios
    if (lowerInput.includes('si') || lowerInput.includes('sí') || lowerInput.includes('claro') || lowerInput.includes('por supuesto') || lowerInput.includes('me interesa') || lowerInput.includes('quiero') || lowerInput.includes('acepto') || lowerInput.includes('ok') || lowerInput.includes('vale')) {
      response = botResponses.contratar_si;
      showCalendlyButton = true;
    }
    // Preguntas sobre la empresa
    else if (lowerInput.includes('evoa') || lowerInput.includes('agencia') || lowerInput.includes('empresa') || lowerInput.includes('quienes son') || lowerInput.includes('experiencia')) {
      response = botResponses.empresa;
    }
    // Preguntas sobre qué es un chatbot
    else if (lowerInput.includes('que es chatbot') || lowerInput.includes('que es un chatbot') || lowerInput.includes('chatbot que es')) {
      response = botResponses.que_es_chatbot;
    }
    // Servicios específicos
    else if (lowerInput.includes('chatbot') && (lowerInput.includes('info') || lowerInput.includes('saber') || lowerInput.includes('mas'))) {
      response = botResponses.chatbots;
    }
    else if (lowerInput.includes('automatiz') && (lowerInput.includes('info') || lowerInput.includes('saber') || lowerInput.includes('mas'))) {
      response = botResponses.automatizacion;
    }
    else if (lowerInput.includes('analisis') && (lowerInput.includes('info') || lowerInput.includes('saber') || lowerInput.includes('mas'))) {
      response = botResponses.analisis;
    }
    else if (lowerInput.includes('estandar') || lowerInput.includes('standard')) {
      response = botResponses.estandar;
    }
    else if (lowerInput.includes('medium')) {
      response = botResponses.medium;
    }
    else if (lowerInput.includes('premium')) {
      response = botResponses.premium;
    }
    // Preguntas sobre servicios generales
    else if (lowerInput.includes('servicio') || lowerInput.includes('plan') || lowerInput.includes('que ofrec')) {
      response = botResponses.servicios;
    } 
    // Preguntas sobre precios e implementación
    else if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuanto') || lowerInput.includes('tarda') || lowerInput.includes('tiempo')) {
      response = botResponses.precios;
    }
    else if (lowerInput.includes('implementar') || lowerInput.includes('integrar') || lowerInput.includes('soporte') || lowerInput.includes('dificil')) {
      response = botResponses.implementacion;
    }
    // Preguntas sobre beneficios y ROI
    else if (lowerInput.includes('beneficio') || lowerInput.includes('roi') || lowerInput.includes('retorno') || lowerInput.includes('caso') || lowerInput.includes('exito') || lowerInput.includes('resultado')) {
      response = botResponses.beneficios;
    }
    // Preguntas sobre seguridad
    else if (lowerInput.includes('seguridad') || lowerInput.includes('privacidad') || lowerInput.includes('datos') || lowerInput.includes('proteccion')) {
      response = botResponses.seguridad;
    }
    // Preguntas generales sobre IA
    else if (lowerInput.includes('que es') || lowerInput.includes('ia') || lowerInput.includes('inteligencia') || lowerInput.includes('artificial') || lowerInput.includes('reemplazar') || lowerInput.includes('tendencia')) {
      response = botResponses.que_es_ia;
    }
    // Contacto
    else if (lowerInput.includes('contacto') || lowerInput.includes('telefono') || lowerInput.includes('email') || lowerInput.includes('consulta') || lowerInput.includes('llamada')) {
      response = botResponses.contacto;
    }
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date(),
        showCalendlyButton: showCalendlyButton
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    setInputValue('');
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return <>
      {/* Floating Chat Button */}
      {!isOpen && <div className="fixed bottom-6 right-6 z-50">
          <Button onClick={() => setIsOpen(true)} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 group" size="lg">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">¿Necesitas ayuda?</span>
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </Button>
        </div>}

      {/* Chat Window */}
      {isOpen && <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-background border border-border rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-6 h-6 rounded-full" />
              <span className="font-semibold text-sm">EVOA</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {messages.map(message => <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} rounded-lg`}>
                    <div className="p-3 text-sm">
                      {message.text}
                    </div>
                    {message.showCalendlyButton && (
                      <div className="p-3 pt-2">
                        <Button 
                          onClick={() => window.open('https://calendly.com/miquelcabanellascapo2006/30min', '_blank')}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="sm"
                        >
                          Comenzar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>)}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Escribe tu pregunta..." className="flex-1" />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>}
    </>;
};
export default ChatBot;