import Image from 'next/image'

/**
 * It renders an arrow icon that, when clicked, scrolls the page to the section by id
 */
const ArrowDown = (props) => {
  const { sectionId, ariaLabel, alt } = props

  // [HELPER_FUNCTIONS]
  const handleClickDot = () =>
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    })

  return (
    <div className="down-arrow-wrapper">
      <div className="down-arrow-icon" onClick={handleClickDot}>
        <Image
          aria-label={ariaLabel}
          src="/assets/down_arrow.svg"
          alt={alt}
          layout="fill"
          className="down-arrow-icon"
        />
      </div>
    </div>
  )
}

export default ArrowDown
