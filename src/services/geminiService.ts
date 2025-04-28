
import { toast } from "sonner";
import { products } from "@/data/products";

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

      // Ürün bilgilerini hazırlama
      const productInfo = products.map(product => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          details: product.details
        };
      });

      const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Sen Onluk Kimya'nın satış temsilcisisin. Adın Kimyager. Müşterilere kısa, net ve satışa yönelik cevaplar vermelisin.

MARKA HIKAYESI:
Onluk Kimya, 1985 yılında kurulan ve Türkiye'nin endüstriyel kimyasallar alanında öncü firmalarından biridir. Mükemmelliği ve inovasyonu temsil eden Onluk Kimya, müşterilerine yalnızca ürün değil, çözüm ortaklığı sunar. Firma, her zaman kaliteyi ve müşteri memnuniyetini ön planda tutarak büyümektedir.

ÜRÜNLERIMIZ:
${JSON.stringify(productInfo)}

TALIMATLAR:
1. Kısa ve öz cevaplar ver (maksimum 3-4 cümle).
2. Her fırsatta müşteriye ürünleri öner.
3. Müşterinin sorularını satış fırsatına çevir.
4. Teknik sorulara kısa ve net yanıt ver, ardından hemen satışa yönlendir.
5. Kibarlığı ve profesyonelliği koru ama gereksiz uzun açıklamalardan kaçın.
6. Fiyat indirimi sorulduğunda maksimum %5 indirim yapabilirsin.
7. Nakliye ücretsizdir ve 24 saat içinde teslimat yapılır.

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
