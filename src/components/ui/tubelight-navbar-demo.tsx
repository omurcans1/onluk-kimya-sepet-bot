import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Anasayfa', url: '/', icon: Home },
    { name: 'Hakkımızda', url: '/about', icon: User },
    { name: 'Ürünler', url: '/products', icon: Briefcase },
    { name: 'İletişim', url: '/contact', icon: FileText }
  ]
  return <NavBar items={navItems} />
}
