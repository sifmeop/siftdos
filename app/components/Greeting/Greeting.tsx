import React, { FC, useState } from 'react'
import styles from './Greeting.module.scss'
import { useTypedDispatch } from '../../hooks/redux'
import { login, rename } from '../../store/greetingSlice'

const Greeting: FC = () => {
  const [name, setName] = useState('')
  const dispatch = useTypedDispatch()

  const getName = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(rename(name))
    dispatch(login(false))
    localStorage.setItem('name', name)
  }

  return (
    <>
      <div className={styles.bg} />
      <form className={styles.form}>
        <h1 className={styles.title}>Your name?</h1>
        <label htmlFor='name' className={styles.label}>
          <input
            className={styles.input}
            id={'name'}
            type='text'
            placeholder={'Name...'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button disabled={name === ''} onClick={getName} className={styles.button}>
          Hi!
        </button>
      </form>
    </>
  )
}

export default Greeting
