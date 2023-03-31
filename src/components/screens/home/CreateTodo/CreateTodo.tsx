import Input from '@/components/ui/Input/Input'
import Select from '@/components/ui/Select/Select'
import { useCreateTodo } from '@/hooks/useCreateTodo'
import { Category } from '@/types/category.interface'
import { CategoryDefaultValue } from '@/utils/constants'
import { useCallback, useState } from 'react'
import styles from './CreateTodo.module.scss'

const CreateTodo = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<Category>(CategoryDefaultValue)

  const { handleCreateTodo } = useCreateTodo(title, description, category)

  const createTodo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      handleCreateTodo()
      setTitle('')
      setDescription('')
    },
    [handleCreateTodo]
  )

  return (
    <form className={styles.form}>
      <label htmlFor='category'>
        Category
        <Select id='category' handleChange={setCategory} />
      </label>
      <label htmlFor='title'>
        Title
        <Input id='title' value={title} onChange={setTitle} placeholder='Write title...' />
      </label>
      <label htmlFor='description'>
        Description
        <Input
          id='description'
          value={description}
          onChange={setDescription}
          placeholder='Write description...'
        />
      </label>
      <button className={styles.button} onClick={createTodo} disabled={title.trim() === ''}>
        Create
      </button>
    </form>
  )
}

export default CreateTodo
