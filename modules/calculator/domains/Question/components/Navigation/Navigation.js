import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Button } from '../../../../components'
import { useRouter } from 'next/router'

/**
 * It renders a container with two buttons, one for going to the previous question and one for going to
 * the next question
 * @returns A component that renders a button that when clicked will call the onPrev function.
 */
export default function CalculatorQuestionNavigation({ onPrev, onNext }) {
  const router = useRouter()
  return (
    <div className="bs-container">
      <div className="bs-row bs-align-items-center bs-justify-content-center">
        <div className="bs-col-12 bs-col-md-9">
          <div className="bs-row bs-justify-content-end bs-g-2">
            <div className="bs-col-auto ">
              <Button
                variant="outlined"
                shape="circle"
                onClick={() => router.back()}>
                <AiOutlineArrowLeft />
              </Button>
            </div>
            <div className="bs-col-auto">
              <Button variant="outlined" shape="circle" onClick={onNext}>
                <AiOutlineArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
