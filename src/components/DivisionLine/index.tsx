import styles from './styles.module.css'

export default function DivisionLine() {
  return (
    <div className={styles['container-line']}>
        <hr className={styles['vertical-line']} />
    </div>
  )
}