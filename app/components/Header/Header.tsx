import { FC } from 'react'
import styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Image from 'next/image'
import logo from '../../assets/images/logo.png'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.todos}>TODOS</h1>
      <Image src={logo} alt={'Todos logo'} className={styles.logo} />
      <Navigation />
      <a
        href={'https://github.com/sifmeop'}
        target={'_blank'}
        className={styles.creator}
        rel='noreferrer'
      >
        by sifmeop
      </a>
    </header>
  )
}

export default Header
