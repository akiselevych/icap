//styles
import styles from './styles.module.scss'
import global from '@/styles/global.module.scss'

const AdminPageSymbol = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {"<br /> - this is how each new paragraph will be labeled."}
      </div>
      <div className={styles.row}>
        {"<bold>  </bold> - this is how text inside will be bold."}
      </div>
    </div>
  )
}

export default AdminPageSymbol