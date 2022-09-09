import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LeftArrow from '../../../../assets/leftArrow.js'
import { usePrice } from '../../../Price/hooks'
import Navigation from '../Navigation'
import { Button, OptionList } from '../../../../components'
import Title from '../Title'
import styles from './Content.module.css'
import { useCalculator } from '../../../../contexts/Calculator'

/**
 * It returns the content of the page
 * @returns The content of the page.
 */
export default function Content({ title, subtitle, options, type }) {
  /* Destructuring the `onSelect`, `onNext`, and `onPrev` functions from the `useCalculator` hook. */
  const { onSelect, onNext, onPrev, calculatorData } = useCalculator()
  const router = useRouter()
  const { price } = usePrice()
  const { t } = useTranslation()
  /* Returning the content of the page. */
  return (
    <>
      <div
        className={`d-none d-md-inline-block ${styles['navigation-block']}`}
        style={{
          left: 32
        }}>
        <Button
          variant="secondary"
          size="xl"
          shape="circle"
          onClick={() => router.back()}>
          <LeftArrow />
        </Button>
      </div>

      <div className={styles.fadeIn}>
        <Title title={title} subtitle={subtitle} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9">
              <OptionList
                className="mb-3"
                type={type}
                options={options}
                onSelect={onSelect}
                calculatorData={calculatorData}
              />
            </div>
          </div>
          <div
            className="d-block d-md-none"
            style={price ? { marginBottom: 64 } : null}>
            <Navigation onPrev={onPrev} onNext={onNext} />
          </div>
        </div>
      </div>
      <div
        className={`d-none d-md-inline-block ${styles['navigation-block']}`}
        style={{
          right: 32
        }}>
        <Button
          variant="dark"
          shape="rounded"
          onClick={onNext}
          size="xl"
          style={{ textTransform: 'uppercase' }}>
          {t('calculator.navigation.next')}
        </Button>
      </div>
    </>
  )
}
