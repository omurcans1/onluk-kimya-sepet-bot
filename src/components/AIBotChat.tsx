
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from '@/context/CartContext';

// Bu yapay zekalı sohbet botu şimdilik sabit yanıtlar verecek
// Daha sonra Gemini API ile entegre edilecek

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
    text: "Merhaba! Ben Onluk Kimya'nın satış asistanı Kimyager. Sepetinizdeki ürünlerle ilgili sorularınızı yanıtlamaktan ve size en uygun fiyatı sunmaktan mutluluk duyarım. Size nasıl yardımcı olabilirim?",
    timestamp: new Date(),
  },
];

const AIBotChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { cartItems, getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();
  const discountedTotal = totalPrice * 0.95; // %5 indirim

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('fiyat') || lowerMessage.includes('indirim') || lowerMessage.includes('ucuz')) {
      return `Sepetinizde toplam ${totalPrice.toLocaleString('tr-TR')} ₺ değerinde ürün bulunuyor. Size özel %5 indirim yaparak ${discountedTotal.toLocaleString('tr-TR')} ₺'ye düşürebilirim. Bu fırsat sadece bugüne özel! Hemen siparişinizi onaylamak ister misiniz?`;
    }
    
    if (lowerMessage.includes('teslimat') || lowerMessage.includes('kargo')) {
      return 'Siparişleriniz 1-3 iş günü içerisinde kargoya verilir. 5000₺ üzeri siparişlerde kargo ücretsizdir.';
    }

    if (lowerMessage.includes('ödeme') || lowerMessage.includes('kredi') || lowerMessage.includes('havale')) {
      return 'Ödeme seçeneklerimiz arasında havale, EFT ve kredi kartı bulunmaktadır. Kredi kartına 3 taksit imkanı sunuyoruz.';
    }

    if (lowerMessage.includes('kalite') || lowerMessage.includes('garanti') || lowerMessage.includes('sertifika')) {
      return 'Tüm ürünlerimiz TSE ve ISO standartlarına uygun olarak üretilmektedir. Kaliteden ödün vermeden en iyi hizmeti sunmayı prensip ediniyoruz. Ürünlerimiz kalite kontrol süreçlerinden geçerek size ulaştırılır.';
    }

    if (lowerMessage.includes('merhaba') || lowerMessage.includes('selam')) {
      return 'Merhaba! Size nasıl yardımcı olabilirim? Ürünlerimizle ilgili detaylı bilgi almak veya sipariş vermek için buradayım.';
    }

    return 'Sepetinizdeki ürünler için en uygun fiyatı sizin için hazırladım. Onluk Kimya olarak kaliteli ürünleri uygun fiyatlarla sunmaktan gurur duyuyoruz. Başka sorunuz var mı?';
  };

  const handleSendMessage = () => {
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

    // Simüle edilmiş bot yanıtı gecikmesi
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateBotResponse(inputMessage),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsThinking(false);
    }, 1000);
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
