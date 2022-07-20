import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: '100vh' }}>
        <div className="col-auto">
          <div className={styles.loader}></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
