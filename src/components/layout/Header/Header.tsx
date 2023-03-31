import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import styles from './Header.module.scss'
import Navigation from './Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.todos}>siftdos</h1>
      <Image src={logo} alt='Todos logo' className={styles.logo} />
      <Navigation />
      <a href='https://github.com/sifmeop' target='_blank' className={styles.creator}>
        by sifmeop
      </a>
    </header>
  )
}

export default Header
