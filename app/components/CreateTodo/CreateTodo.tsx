import React, { FC, useState } from 'react'
import styles from './CreateTodo.module.scss'
import Input from '../UI/Input/Input'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { addTodo } from '../../store/todosSlice'
import { ICategory } from '../../models/category.interface'
import MySelect from '../UI/MySelect/MySelect'
import { IOption } from '../../models/option.interface'

const CreateTodo: FC = () => {
  const { categories } = useTypedSelector((state) => state.categories)
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [category, setCategory] = useState<ICategory>({ title: 'None', color: '#eeeeee', id: 0 })
  const dispatch = useTypedDispatch()

  const changeCategory = (value: IOption) => {
    const find = categories.find((category) => category.id === value.value.id)
    setCategory(find ?? { title: 'None', color: '#eeeeee', id: 0 })
  }

  const createTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newTodo = { id: Date.now(), title, body, category, isCompleted: false }
    dispatch(addTodo(newTodo))
    setTitle('')
    setBody('')
  }

  return (
    <form className={styles.form}>
      <MySelect changeCategory={changeCategory} />
      <label htmlFor='title'>
        Title
        <Input id={'title'} value={title} onChange={setTitle} />
      </label>
      <label htmlFor='body'>
        Body
        <Input id={'body'} value={body} onChange={setBody} />
      </label>
      <button disabled={title === ''} onClick={createTodo} className={styles.button}>
        Create
      </button>
    </form>
  )
}

export default CreateTodo
