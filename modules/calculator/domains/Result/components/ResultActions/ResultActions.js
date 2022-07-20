import { Button } from '../../../../components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const ResultActions = ({ onOpenSaveModal }) => {
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation()
  const router = useRouter()
  const { query } = router

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <div className="row align-items-center justify-content-center">
          {!query?.id ? (
            <div className="d-flex col-12 col-md-auto mb-4 justify-content-center">
              <Button variant="lg" shape="rounded" onClick={onOpenSaveModal}>
                {t('calculator.result.buttons.save_and_share')}
              </Button>
            </div>
          ) : null}
          <div className="d-flex col-12 col-md-auto mb-4 justify-content-center">
            <Link href="https://senseteq.pipedrive.com/scheduler/J1A9amTK/mote-for-a-diskutere-prosjekt">
              <a target="_blank">
                <Button variant="lg" shape="rounded">
                  {t('calculator.result.buttons.schedule_meeting')}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultActions
