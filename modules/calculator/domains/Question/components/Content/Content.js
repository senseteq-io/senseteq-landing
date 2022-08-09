import { useRouter } from 'next/router'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
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
  /* Returning the content of the page. */
  return (
    <div className={styles.fadeIn}>
      <Title title={title} subtitle={subtitle} />
      <div className="container">
        <div className="row">
          <div className="col d-none d-sm-flex justify-content-end align-items-center mb-3">
            <Button
              variant="outlined"
              shape="circle"
              onClick={() => router.back()}>
              <AiOutlineArrowLeft />
            </Button>
          </div>
          <div className="col-12 col-md-9">
            <OptionList
              className="mb-3"
              type={type}
              options={options}
              onSelect={onSelect}
              calculatorData={calculatorData}
            />
          </div>
          <div className="col d-none d-sm-flex justify-content-start align-items-center  mb-3">
            <Button variant="outlined" shape="circle" onClick={onNext}>
              <AiOutlineArrowRight />
            </Button>
          </div>
        </div>
        <div className="d-block d-sm-none">
          <Navigation onPrev={onPrev} onNext={onNext} />
        </div>
      </div>
    </div>
  )
}
