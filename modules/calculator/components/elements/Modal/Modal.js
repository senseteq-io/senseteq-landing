import { useEffect, useState } from 'react'

import styles from './Modal.module.css'

const Modal = ({ children, visible, onClose }) => {
  const [isVisible, setIsVisible] = useState()

  // Initial state
  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  return (
    <div className={styles.modal} open={isVisible} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
