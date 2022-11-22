import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/redux'
import styles from '../../CreateTodo/CreateTodo.module.scss'
import Select from 'react-select'
import { choiceCategory } from '../../../utils/selectCategory'
import { IOption } from '../../../models/option.interface'

interface SelectProps {
  changeCategory: (value: any) => void
  defaultValue?: IOption
}

const MySelect: FC<SelectProps> = ({ changeCategory, defaultValue }) => {
  const { categories } = useTypedSelector((state) => state.categories)

  const options: IOption[] = [{ value: { id: 0, title: 'None', color: '#eeeeee' }, label: 'None' }]

  categories.map((category) =>
    options.push({
      value: category,
      label: category.title
    })
  )

  return (
    <Select
      options={options}
      isSearchable={false}
      onChange={changeCategory}
      defaultValue={defaultValue ? defaultValue : options[0]}
      className={styles.select}
      styles={{
        singleValue: (styles, { data }) => ({ ...styles, ...choiceCategory(data.value.color) })
      }}
    />
  )
}

export default MySelect
