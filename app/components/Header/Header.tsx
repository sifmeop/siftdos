import Image from 'next/image'
import { FC } from 'react'
import logo from '../../assets/images/logo.png'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.todos}>siftdos</h1>
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
