import { useCallback, useEffect, useState } from 'react'

import { Button } from '../../../components'
import { CUSTOMERS } from '../../../constants'
import Image from 'next/image'

const CustomerSlider = () => {
  // [COMPONENTS_STATE_HOOKS]
  const [slideIndex, setSlideIndex] = useState(1)

  // [HELPER_FUNCTIONS]

  /**
   * The function plusSlides() takes a number as an argument
   * and calls the function showSlide() with the argument slideIndex + count
   *
   * @param count - The number of slides to move forward or backward.
   */
  const plusSlides = (count) => showSlide(slideIndex + count)

  /**
   * A function that takes in a parameter index
   * and calls the showSlide function with the parameter.
   *
   * @param index - the index of the slide to show
   */
  const currentSlide = (index) => showSlide(index)

  /**
   * A function that takes in a parameter index
   * and change active slide and active dot.
   *
   * @param index - the index of the slide to show
   */
  const showSlide = useCallback(
    (index) => {
      let slides = document?.getElementsByClassName('slider-item')
      let dots = document?.getElementsByClassName('dot')

      if (slides?.length) {
        if (index > slides.length) {
          setSlideIndex(1)
        } else if (index < 1) {
          setSlideIndex(slides.length)
        } else setSlideIndex(index)

        for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none'

        for (let i = 0; i < dots.length; i++)
          dots[i].className = dots[i].className.replace(' active', '')
        console.log({ dots }, dots[slideIndex - 1])
        slides[slideIndex - 1].style.display = 'block'
        dots[slideIndex - 1].className += ' active'
      }
    },
    [slideIndex]
  )
  // [USE_EFFECTS]
  // change active slide and active dit after click on arroq ot dot
  useEffect(() => showSlide(slideIndex), [slideIndex, showSlide])

  return (
    <div className="customers-slider-wrapper">
      <div className="cover-gradient" />
      {CUSTOMERS?.map(({ href, src, buttonText, description }) => (
        <div
          key={href}
          className="slider-item"
          style={{
            background: `url(${src}) center center / cover no-repeat`
          }}>
          <div className="content-wrapper">
            <div className="content">
              <p className="description">{description}</p>
              {buttonText && (
                <Button
                  target="_blank"
                  href={href}
                  className="btn-white go-to-site">
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="dots-wrapper">
        <div className="dots">
          {CUSTOMERS?.map((_, index) => (
            <span
              key={`dot_${index}`}
              className="dot"
              onClick={() => currentSlide(index + 1)}
            />
          ))}
        </div>
      </div>
      <div className="arrows-wrapper">
        <div className="prev-slide-icon-wrapper" onClick={() => plusSlides(1)}>
          <div className="prev-slide-icon">
            <Image src="/left_arrow.svg" layout="fill" alt="Previous slide" />
          </div>
        </div>
        <div className="next-slide-icon-wrapper" onClick={() => plusSlides(1)}>
          <div className="next-slide-icon">
            <Image src="/right_arrow.svg" layout="fill" alt="Next slide" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSlider
