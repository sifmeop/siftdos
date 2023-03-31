import { memo, useEffect } from 'react'
import { CgCloseR } from 'react-icons/cg'
import styles from './Popup.module.scss'

interface Props {
  children: React.ReactNode
  onClose: () => void
}

const Popup = ({ children, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className={styles.bg} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <CgCloseR size='2rem' className={styles.close} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default memo(Popup)
