import { useTranslation } from 'next-i18next'

import { Button } from '../../../../components'
import { useRouter } from 'next/router'

/**
 * It renders a container with two buttons, one for going to the previous question and one for going to
 * the next question
 * @returns A component that renders a button that when clicked will call the onPrev function.
 */
export default function CalculatorQuestionNavigation({ onPrev, onNext }) {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md-9">
        <div className="row justify-content-end g-2">
          <div className="col">
            <Button
              variant="transparent"
              shape="rounded"
              block
              size="lg"
              onClick={() => router.back()}
              style={{ textTransform: 'uppercase' }}>
              {t('calculator.navigation.previous')}
            </Button>
          </div>
          <div className="col">
            <Button
              variant="dark"
              size="lg"
              shape="rounded"
              block
              onClick={onNext}
              style={{ textTransform: 'uppercase' }}>
              {t('calculator.navigation.next')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
