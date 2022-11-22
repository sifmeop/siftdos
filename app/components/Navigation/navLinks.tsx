import { INavLink } from '../../models/navLink.interface'
import Home from '../../assets/images/home.svg'
import Categories from '../../assets/images/categories.svg'
import Analytics from '../../assets/images/analytics.svg'

export const navLinks: INavLink[] = [
  { icon: <Home />, title: 'Home', href: '/' },
  { icon: <Categories />, title: 'Categories', href: '/categories' },
  { icon: <Analytics />, title: 'Analytics', href: '/analytics' }
]
