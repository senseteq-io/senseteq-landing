import styles from './Progress.module.css'

const Progress = ({ progress }) => {
  return <div className={styles.progress} style={{ width: `${progress}%` }} />
}

export default Progress
