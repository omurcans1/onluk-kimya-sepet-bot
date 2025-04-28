
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-wrapper py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 bg-kimya-blue rounded-md flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">10</span>
            </div>
            <span className="text-kimya-blue font-bold text-xl">Onluk Kimya</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-kimya-blue">Anasayfa</Link>
            
            {/* Ürünler Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-kimya-blue flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Ürünler <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link 
                    to="/products/hammadde" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Endüstriyel Hammaddeler
                  </Link>
                  <Link 
                    to="/products/temizlik" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Temizlik Kimyasalları
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-kimya-blue">Hakkımızda</Link>
            <Link to="/contact" className="text-gray-700 hover:text-kimya-blue">İletişim</Link>
          </nav>

          {/* Cart Button */}
          <Link to="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link to="/" className="block text-gray-700 hover:text-kimya-blue py-1">Anasayfa</Link>
            <Link to="/products/hammadde" className="block text-gray-700 hover:text-kimya-blue py-1">Endüstriyel Hammaddeler</Link>
            <Link to="/products/temizlik" className="block text-gray-700 hover:text-kimya-blue py-1">Temizlik Kimyasalları</Link>
            <Link to="/about" className="block text-gray-700 hover:text-kimya-blue py-1">Hakkımızda</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-kimya-blue py-1">İletişim</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
