
import { toast } from "sonner";

const GEMINI_API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export interface GeminiResponse {
  text: string;
  error?: string;
}

export class GeminiService {
  private apiKey: string | null = null;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateResponse(prompt: string): Promise<GeminiResponse> {
    try {
      if (!this.apiKey || this.apiKey === "YOUR_API_KEY_HERE") {
        console.log("API anahtarı tanımlanmamış");
        return {
          text: "Sistem yapılandırması tamamlanmamış. Lütfen yönetici ile iletişime geçin.",
          error: "API key not provided"
        };
      }

      const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Sen profesyonel bir endüstriyel kimyasallar satış temsilcisisin. 
              Müşterinin talebini dikkatlice dinle ve uygun öneriler sun. 
              Fiyatlar konusunda pazarlık yapabilirsin ama %5'ten fazla indirim yapma.
              Her zaman nazik ve profesyonel ol.
              
              Müşterinin mesajı: ${prompt}`
            }]
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API Hata Detayı:", errorData);
        throw new Error(`API isteği başarısız oldu: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
        throw new Error('Geçersiz API yanıtı formatı');
      }
      
      return {
        text: data.candidates[0].content.parts[0].text
      };
    } catch (error) {
      console.error('Gemini API Hatası:', error);
      toast.error("AI yanıt üretirken bir hata oluştu");
      return {
        text: "Üzgünüm, şu anda yanıt üretemiyorum. Lütfen daha sonra tekrar deneyin.",
        error: error instanceof Error ? error.message : 'Bilinmeyen hata'
      };
    }
  }
}
