
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Product } from '@/context/CartContext';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  let categoryTitle = "Tüm Ürünler";
  let categoryDescription = "Endüstriyel kimyasallar ve temizlik ürünleri";
  
  if (category === "hammadde") {
    categoryTitle = "Endüstriyel Hammaddeler";
    categoryDescription = "Kimya endüstrisi için yüksek kaliteli hammaddeler";
  } else if (category === "temizlik") {
    categoryTitle = "Temizlik Kimyasalları";
    categoryDescription = "Profesyonel temizlik ve hijyen ürünleri";
  }

  useEffect(() => {
    // Kategori filtresine göre ürünleri al
    let productsToShow = category ? getProductsByCategory(category) : products;
    
    // Arama terimine göre filtrele
    if (searchTerm) {
      productsToShow = productsToShow.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(productsToShow);
  }, [category, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Banner */}
      <div className="bg-kimya-blue text-white py-12">
        <div className="container-wrapper">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">{categoryTitle}</h1>
          <p className="opacity-90">{categoryDescription}</p>
        </div>
      </div>
      
      {/* Search & Filter */}
      <div className="bg-white shadow-sm">
        <div className="container-wrapper py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="flex-grow bg-kimya-gray py-8">
        <div className="container-wrapper">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-gray-600 mb-6">{filteredProducts.length} adet ürün bulundu</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">Ürün Bulunamadı</h3>
              <p className="text-gray-500">Arama kriterlerinize uygun ürün bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
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
  );
};

export default Products;
