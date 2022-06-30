import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="bootstrap-container">
        <div className="row">
          <div className="col-auto">
            <Image
              src="/assets/logo.svg"
              width="120px"
              height="28px"
              alt="Senseteq"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
