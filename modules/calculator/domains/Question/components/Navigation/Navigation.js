import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Button } from '../../../../components'

/**
 * It renders a container with two buttons, one for going to the previous question and one for going to
 * the next question
 * @returns A component that renders a button that when clicked will call the onPrev function.
 */
export default function CalculatorQuestionNavigation({ onPrev, onNext }) {
  return (
    <div className="bootstrap-container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-9">
          <div className="row justify-content-end g-2">
            <div className="col-auto ">
              <Button variant="outlined" shape="circle" onClick={onPrev}>
                <AiOutlineArrowLeft />
              </Button>
            </div>
            <div className="col-auto">
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
