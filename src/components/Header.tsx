import React from "react"
import { Link, useLocation } from "react-router-dom"
import { ShoppingCart, Home, Info, Phone, Briefcase } from "lucide-react"

const navItems = [
  { name: "Anasayfa", path: "/", icon: <Home className="w-5 h-5 mr-1" /> },
  { name: "Ürünler", path: "/products", icon: <Briefcase className="w-5 h-5 mr-1" /> },
  { name: "Hakkımızda", path: "/about", icon: <Info className="w-5 h-5 mr-1" /> },
  { name: "İletişim", path: "/contact", icon: <Phone className="w-5 h-5 mr-1" /> },
  { name: "Sepet", path: "/cart", icon: <ShoppingCart className="w-5 h-5 mr-1" /> },
]

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="container-wrapper flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl text-kimya-blue tracking-tight flex items-center gap-2">
          <span>Onluk Kimya</span>
        </Link>
        <ul className="flex gap-2 md:gap-4 items-center">
          {navItems.map(item => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors duration-150 hover:bg-kimya-blue/10 hover:text-kimya-blue focus:outline-none focus:ring-2 focus:ring-kimya-blue/30 ${location.pathname === item.path ? "bg-kimya-blue/10 text-kimya-blue" : "text-gray-700"}`}
                tabIndex={0}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
