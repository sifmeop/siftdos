import { useAppSelector } from '@/hooks/redux'
import { Category } from '@/types/category.interface'
import { Option } from '@/types/option.interface'
import { memo } from 'react'
import ReactSelect from 'react-select'

interface Props {
  id: string
  handleChange: (value: any) => void
  defaultValue?: Category
}

const selectStyles = (color: string) => ({
  display: 'flex',
  alignItems: 'center',
  '::before': {
    content: '" "',
    display: 'block',
    width: 20,
    height: 20,
    backgroundColor: color,
    marginRight: 10,
    borderRadius: 20
  }
})

const Select = ({ id, handleChange, defaultValue }: Props) => {
  const categories = useAppSelector((state) => state.categories.categories)

  const options: Option[] = categories.map((category) => ({
    value: category,
    label: category.title
  }))

  const selectDefaultValue = (): Option => {
    if (!defaultValue) {
      return options[0]
    }

    const findIndex = categories.findIndex((category) => category.title === defaultValue.title)

    return options[findIndex]
  }

  const defaultCategory = selectDefaultValue()

  return (
    <ReactSelect
      id={id}
      options={options}
      isSearchable={false}
      onChange={(e) => handleChange(e?.value!)}
      defaultValue={defaultCategory}
      className='text-[#252525]'
      styles={{
        singleValue: (styles, { data }) => ({
          ...styles,
          ...selectStyles(data.value.color)
        })
      }}
    />
  )
}

export default memo(Select)
