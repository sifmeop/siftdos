import React, { FC, PropsWithChildren } from 'react'
import styles from './Popup.module.scss'

const Popup: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <div className={styles.bg} />
      <form className={styles.popup}>{children}</form>
    </>
  )
}

export default Popup
