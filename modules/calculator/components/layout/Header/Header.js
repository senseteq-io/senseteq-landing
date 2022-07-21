import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import ls from '../../../utils/ls'
import styles from './Header.module.css'
import { useTranslation } from 'next-i18next'

// FIXME
const MENU_ITEM_STYLES = {
  display: 'block',
  fontSize: '13px',
  letterSpacing: '1.92px',
  textTransform: 'uppercase',
  fontWeight: 700
}

export default function Header() {
  const { t } = useTranslation()

  const refresh = () => {
    ls.clear()
    Router.push(`/s/${t('calculator.paths.mvp_calculator')}`)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
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
          <div className="col-auto">
            <div className="row">
              <div className="col-auto">
                <div id="simple-menu" style={MENU_ITEM_STYLES}>
                  <div className="menu-item">
                    <Link href="/">
                      <a>{t('calculator.menu.about_us')}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
