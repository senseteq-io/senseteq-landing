import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="bs-container">
        <div className="bs-row">
          <div className="bs-col-auto">
            <Link href="/mvp-calculator">
              <a>
                <Image
                  src="/assets/logo.svg"
                  width="120px"
                  height="28px"
                  alt="Senseteq"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
