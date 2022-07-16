import { useEffect, useState } from 'react'

import styles from './Modal.module.css'

const Modal = ({ children, visible, onClose }) => {
  const [isVisible, setIsVisible] = useState()

  // Initial state
  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  return (
    <>
      {isVisible ? (
        <>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <span className={styles.close} onClick={onClose}>
                &times;
              </span>
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Modal
