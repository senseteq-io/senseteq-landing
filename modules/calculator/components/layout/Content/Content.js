import styles from './Content.module.css'

export default function Content({ children }) {
  return (
    <main className={`calculator-module-content ${styles.content}`}>
      {children}
    </main>
  )
}
