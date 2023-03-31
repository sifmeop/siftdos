import { useEditTodo } from '@/hooks/useEditTodo'
import { Category } from '@/types/category.interface'
import { Todo } from '@/types/todo.interface'
import Input from '@/ui/Input/Input'
import Popup from '@/ui/Popup/Popup'
import Select from '@/ui/Select/Select'
import { memo, useState } from 'react'
import styles from './ChangeTodo.module.scss'

interface Props {
  todo: Todo
  onClose: () => void
}

const ChangeTodo = ({ todo, onClose }: Props) => {
  const [title, setTitle] = useState<string>(todo.title)
  const [description, setDescription] = useState<string>(todo.description)
  const [category, setCategory] = useState<Category>(todo.category)

  const { handleEditTodo } = useEditTodo(todo, title, description, category)

  const changeCategory = (value: Category) => {
    setCategory(value)
  }

  const changeTodo = () => {
    if (
      todo.title === title &&
      todo.description === description &&
      todo.category.color === category.color
    ) {
      onClose()
      return
    }
    handleEditTodo()
    onClose()
  }

  return (
    <Popup onClose={() => onClose()}>
      <form className={styles.changeTodo}>
        <label htmlFor='changeTodo'>
          Category
          <Select id='changeTodo' handleChange={changeCategory} defaultValue={todo.category} />
        </label>
        <label htmlFor='title'>
          Title
          <Input id='title' value={title} onChange={setTitle} placeholder='Write title...' />
        </label>
        <label htmlFor='body'>
          Body
          <Input
            id='body'
            value={description}
            onChange={setDescription}
            placeholder='Write description...'
          />
        </label>
        <button className={styles.button} onClick={changeTodo} disabled={title === ''}>
          Change
        </button>
      </form>
    </Popup>
  )
}

export default memo(ChangeTodo)
