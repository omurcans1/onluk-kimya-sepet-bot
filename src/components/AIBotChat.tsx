import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from '@/context/CartContext';
import { GeminiService } from '@/services/geminiService';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface AIBotChatProps {
  compact?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Merhaba! Ben Onluk Kimya'nın satış asistanı Kimyager. Size nasıl yardımcı olabilirim? Hangi endüstriyel kimyasal ürünlerimizle ilgileniyorsunuz?",
    timestamp: new Date(),
  },
];

const geminiService = new GeminiService("AIzaSyDOvIR7j-BumWdXwC_qdFIIvVdoSLUrlec");

const AIBotChat: React.FC<AIBotChatProps> = ({ compact }) => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { cartItems, getTotalPrice } = useCart();
  const [open, setOpen] = useState(!compact);

  const totalPrice = getTotalPrice();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage('');
    setIsThinking(true);

    try {
      // Sepet bilgisini ve kullanıcı mesajını Gemini'ye iletiyoruz
      const cartItemsInfo = cartItems.length > 0 
        ? `Sepetteki ürünler: ${cartItems.map(item => `${item.product.name} (${item.quantity} adet)`).join(', ')}` 
        : "Sepette henüz ürün yok.";
      
      const response = await geminiService.generateResponse(
        `${cartItemsInfo}\nToplam tutar: ${totalPrice}TL.\n\nMüşteri mesajı: ${inputMessage}`
      );

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Bot yanıt hatası:', error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: "Üzgünüm, şu anda teknik bir sorun yaşıyorum. Lütfen daha sonra tekrar deneyiniz.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsThinking(false);
    }
  };

  if (compact && !open) {
    return (
      <div
        className="fixed bottom-6 right-6 z-50 w-[44px] h-[44px] bg-kimya-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
        title="Kimyager - Satış Asistanı"
      >
        <Bot size={18} color="#fff" />
      </div>
    );
  }

  if (compact) {
    return (
      <div className="fixed bottom-6 right-6 z-50 border rounded-xl shadow-lg flex flex-col bg-white animate-fade-in h-[400px] w-[300px] min-w-0 text-base">
        <div className="bg-kimya-blue text-white rounded-t-xl flex items-center justify-between p-3">
          <div className="flex items-center">
            <Bot className="mr-3" size={18} />
            <h3 className="font-semibold text-white text-base">Kimyager</h3>
          </div>
          <button onClick={() => setOpen(false)} className="ml-3 text-white text-xl leading-none">×</button>
        </div>
        <ScrollArea className="flex-grow p-3">
          <div className="space-y-3">
            {messages.slice(-5).map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-kimya-blue text-white rounded-tr-none' : 'bg-kimya-gray text-gray-800 rounded-tl-none'} text-sm`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
        </ScrollArea>
        <div className="p-3 border-t mt-auto">
          <div className="flex gap-2">
            <Input
              placeholder="Mesaj..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') { handleSendMessage(); } }}
              className="flex-grow text-sm py-2"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 border rounded-xl shadow-lg flex flex-col bg-white animate-fade-in ${compact ? 'h-[260px] w-[260px] text-xs' : 'h-[500px]'} min-w-0`}>
      <div className={`bg-kimya-blue text-white rounded-t-xl flex items-center justify-between ${compact ? 'p-2' : 'p-3'}`}>
        <div className="flex items-center">
          <Bot className="mr-2" size={compact ? 14 : 18} />
          <h3 className={`font-semibold text-white ${compact ? 'text-xs' : ''}`}>Kimyager - Satış Asistanı</h3>
        </div>
        {compact && (
          <button onClick={() => setOpen(false)} className="ml-2 text-white text-lg leading-none">×</button>
        )}
      </div>
      
      <ScrollArea className={`flex-grow ${compact ? 'p-2' : 'p-4'}`}>
        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-kimya-blue text-white rounded-tr-none'
                    : 'bg-kimya-gray text-gray-800 rounded-tl-none'
                } ${compact ? 'max-w-[120px] p-1' : ''}`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 block mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-kimya-gray text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef}></div>
        </div>
      </ScrollArea>
      
      <div className={`p-3 border-t mt-auto ${compact ? 'p-2' : ''}`}>
        <div className="flex gap-1">
          <Input
            placeholder="Mesajınızı yazın..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            className={`flex-grow ${compact ? 'text-xs py-1' : ''}`}
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className={`h-4 w-4 ${compact ? 'h-3 w-3' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIBotChat;
