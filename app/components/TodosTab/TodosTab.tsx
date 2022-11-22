import { FC } from 'react'
import styles from './TodosTab.module.scss'
import { ITab } from '../../models/tab.interface'

const TodosTab: FC<ITab> = ({ tab, setTab }) => {
  return (
    <div className={styles.item}>
      <button onClick={() => setTab([])}>Clear</button>
      <ul>
        {tab.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </ul>
    </div>
  )
}

export default TodosTab
