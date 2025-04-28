import React from "react"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const Products = () => {
  const category = "Konsantre Hijyenik Genel Temizleyiciler"
  const filteredProducts = products.filter(p => p.category === category)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-kimya-gray via-white to-blue-100">
      <div className="bg-kimya-blue text-white py-14 shadow-lg mb-10">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">{category}</h1>
          <p className="opacity-90 text-lg max-w-2xl mx-auto">Endüstriyel ve profesyonel alanlar için konsantre hijyenik genel temizleyiciler.</p>
        </div>
      </div>
      <div className="container-wrapper pb-20">
        <ul className="divide-y divide-kimya-gray/20 bg-white/80 rounded-xl shadow-md">
          {filteredProducts.map(product => (
            <li
              key={product.id}
              className="flex flex-col md:flex-row items-center md:items-stretch gap-4 py-6 px-4 md:px-8 hover:bg-blue-50/40 transition group cursor-pointer"
              onClick={() => window.location.href = `/product/${product.id}`}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') window.location.href = `/product/${product.id}`; }}
              role="button"
              aria-label={`${product.name} detay sayfasına git`}
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-muted ring-1 ring-border flex items-center justify-center">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col justify-center md:justify-start">
                <h2 className="text-lg font-semibold text-kimya-blue group-hover:underline group-hover:underline-offset-4 transition-all">{product.name}</h2>
                <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[120px]">
                <span className="font-bold text-kimya-blue text-lg">{product.price} TL</span>
                <Button variant="outline" className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Sepete Ekle
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container-wrapper">
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Onluk Kimya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Products
