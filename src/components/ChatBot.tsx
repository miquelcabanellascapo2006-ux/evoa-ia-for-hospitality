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
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! En qué puedo ayudarte?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    servicios: "Ofrecemos tres niveles de servicio: Estándar (automatización básica), Medium (integración CRM) y Premium (IA avanzada). ¿Te interesa alguno en particular?",
    precios: "Nuestros precios varían según el nivel de servicio. El plan Estándar incluye automatización básica, el Medium incluye CRM, y el Premium tiene IA avanzada. ¿Quieres más detalles sobre algún plan?",
    contacto: "Puedes contactarnos a través de nuestro formulario en la web o llamarnos directamente. ¿Prefieres que te contactemos nosotros?",
    automatizacion: "Especializamos en automatización de procesos para hoteles y restaurantes, desde reservas hasta gestión de inventario. ¿Qué procesos te gustaría automatizar?",
    ia: "Nuestra IA puede manejar consultas de clientes, optimizar precios dinámicamente y predecir demanda. ¿Te interesa alguna funcionalidad específica?",
    default: "Entiendo que tienes preguntas sobre nuestros servicios de automatización para hoteles y restaurantes. ¿Podrías ser más específico sobre lo que necesitas?"
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

    if (lowerInput.includes('servicio') || lowerInput.includes('plan')) {
      response = botResponses.servicios;
    } else if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuanto')) {
      response = botResponses.precios;
    } else if (lowerInput.includes('contacto') || lowerInput.includes('telefono') || lowerInput.includes('email')) {
      response = botResponses.contacto;
    } else if (lowerInput.includes('automatiz') || lowerInput.includes('automatiz')) {
      response = botResponses.automatizacion;
    } else if (lowerInput.includes('ia') || lowerInput.includes('inteligencia') || lowerInput.includes('artificial')) {
      response = botResponses.ia;
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false,
        timestamp: new Date()
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

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 rounded-full p-4 group"
            size="lg"
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">¿Necesitas ayuda?</span>
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-background border border-border rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-6 h-6 rounded-full" />
              <span className="font-semibold text-sm">Asistente Virtual</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;