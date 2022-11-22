import { FC, PropsWithChildren } from 'react'
import styles from './SettingsItem.module.scss'

const SettingsItem: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default SettingsItem
