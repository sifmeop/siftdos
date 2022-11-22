import React, { FC, useMemo, useState } from 'react'
import styles from '../CreateTodo/CreateTodo.module.scss'
import Input from '../UI/Input/Input'
import { ITodo } from '../../models/todo.interface'
import { useTypedDispatch } from '../../hooks/redux'
import Popup from '../Popup/Popup'
import { ICategory } from '../../models/category.interface'
import { renameTodo } from '../../store/todosSlice'
import { IOption } from '../../models/option.interface'
import MySelect from '../UI/MySelect/MySelect'

interface IChangeTodoProps {
  todo: ITodo
  setEdit: (change: boolean) => void
}

const ChangeTodo: FC<IChangeTodoProps> = ({ todo, setEdit }) => {
  const [title, setTitle] = useState<string>(todo.title)
  const [body, setBody] = useState<string>(todo.body)
  const [category, setCategory] = useState<ICategory>(todo.category)
  const dispatch = useTypedDispatch()

  const changeCategory = (value: IOption) => {
    setCategory(value.value)
  }

  const changeTodo = () => {
    if (todo.title === title && todo.body === body && todo.category.color === category.color) {
      setEdit(false)
      return false
    }
    const renamedTodo = { id: todo.id, title, body, category, isCompleted: false }
    dispatch(renameTodo(renamedTodo))
    setEdit(false)
  }

  const defaultValue = useMemo(
    () => ({
      value: todo.category,
      label: todo.category.title
    }),
    [todo.category]
  )

  return (
    <Popup>
      <MySelect changeCategory={changeCategory} defaultValue={defaultValue} />
      <div>
        Title
        <Input id={'title'} value={title} onChange={setTitle} />
      </div>
      <div>
        Body
        <Input id={'body'} value={body} onChange={setBody} />
      </div>
      <button disabled={title === ''} onClick={changeTodo} className={styles.button}>
        Create
      </button>
    </Popup>
  )
}

export default ChangeTodo
