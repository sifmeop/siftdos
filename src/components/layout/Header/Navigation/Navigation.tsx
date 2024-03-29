import { navLinks } from '@/utils/navLinks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        {navLinks.map((link) => (
          <li key={link.title} className={styles.menuItem}>
            <Link
              href={link.href}
              className={
                router.pathname === link.href
                  ? `${styles.menuLink} ${styles.active}`
                  : styles.menuLink
              }
            >
              <link.icon />
              {/* {link.icon} */}
              <p className={styles.link}>{link.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
