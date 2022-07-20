import Image from 'next/image'
import Router from 'next/router'
import ls from '../../../utils/ls'
import styles from './Header.module.css'
import { useTranslation } from 'next-i18next'

export default function Header() {
  const { t } = useTranslation()

  const refresh = () => {
    ls.clear()
    Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <a onClick={refresh} style={{ cursor: 'pointer' }}>
              <Image
                src="/assets/logo.svg"
                width="120px"
                height="28px"
                alt="Senseteq"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
