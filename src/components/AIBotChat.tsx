
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

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: "Merhaba! Ben Onluk Kimya'nın satış asistanı Kimyager. Size nasıl yardımcı olabilirim? Hangi endüstriyel kimyasal ürünlerimizle ilgileniyorsunuz?",
    timestamp: new Date(),
  },
];

const geminiService = new GeminiService("AIzaSyBshBZTIuz4h4SklyKi5XberpwvGv85CKQ");

const AIBotChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { cartItems, getTotalPrice } = useCart();

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

  return (
    <div className="border rounded-lg shadow-sm flex flex-col h-[500px] bg-white animate-fade-in">
      <div className="bg-kimya-blue text-white p-3 rounded-t-lg flex items-center">
        <Bot className="mr-2" size={18} />
        <h3 className="font-semibold text-white">Kimyager - Satış Asistanı</h3>
      </div>
      
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
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
                }`}
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
      
      <div className="p-3 border-t mt-auto">
        <div className="flex gap-2">
          <Input
            placeholder="Mesajınızı yazın..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIBotChat;
