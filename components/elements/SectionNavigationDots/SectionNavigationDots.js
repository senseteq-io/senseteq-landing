import { useTranslation } from 'next-i18next'

const SectionNavigationDots = (props) => {
  const { sectionsConfig } = props

  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')

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
    <ul id="navigation-dots" aria-label={t('navigation_dots.aria.text')}>
      {sectionsConfig?.map(({ title, idSection }) => (
        <li
          aria-label={`${t('navigation_dots.dots.go_to.text')} ${t(title)} ${t(
            'navigation_dots.dots.section.text'
          )}`}
          key={idSection}
          className="navigation-dot"
          id={`navigation-${idSection}`}
          onClick={() => handleClickDot(idSection)}
          onMouseMove={() => handleMouseMoveDot(idSection)}
          onMouseLeave={() => handleMouseLeaveDot(idSection)}>
          <div className="navigation-dot-tooltip">
            <p className="title">{t(title)}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SectionNavigationDots
