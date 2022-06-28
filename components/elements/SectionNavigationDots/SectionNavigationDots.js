const SectionNavigationDots = (props) => {
  const { sectionsConfig } = props

  // [HELPER_FUNCTIONS]
  /**
   * It takes an id of section as an argument,
   * and then scrolls the page to the section with that id
   *
   * @param id - The id of the section you want to scroll to.
   */
  const handleClickDot = (id) =>
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  const handleMouseMoveDot = (id) => {
    const dotElement = document.getElementById(`navigation-${id}`)
    dotElement.querySelector('.navigation-dot-tooltip').style.display = 'block'
  }
  const handleMouseLeaveDot = (id) => {
    const dotElement = document.getElementById(`navigation-${id}`)
    dotElement.querySelector('.navigation-dot-tooltip').style.display = 'none'
  }

  return (
    <ul id="navigation-dots">
      {sectionsConfig?.map(({ title, idSection }) => (
        <li
          key={idSection}
          className="navigation-dot"
          id={`navigation-${idSection}`}
          onClick={() => handleClickDot(idSection)}
          onMouseMove={() => handleMouseMoveDot(idSection)}
          onMouseLeave={() => handleMouseLeaveDot(idSection)}>
          <div className="navigation-dot-tooltip">
            <p className="title">{title}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SectionNavigationDots
