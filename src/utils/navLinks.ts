import Analytics from '@/assets/images/analytics.svg'
import Categories from '@/assets/images/categories.svg'
import Home from '@/assets/images/home.svg'
import { NavLink } from '@/types/navLink.interface'

export const navLinks: NavLink[] = [
  { icon: Home, title: 'Home', href: '/' },
  { icon: Categories, title: 'Categories', href: '/categories' },
  { icon: Analytics, title: 'Analytics', href: '/analytics' }
]
