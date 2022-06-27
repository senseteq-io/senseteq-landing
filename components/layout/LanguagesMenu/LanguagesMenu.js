const LANGUAGES_ITEMS = [
  {
    title: 'NO',
    ariaLabel: 'change language to Norwegian'
  },
  {
    title: 'EN',
    ariaLabel: 'change language to English'
  }
]

const LanguagesMenu = () => {
  return (
    <div id="languages-menu">
      {LANGUAGES_ITEMS?.map(({ title, ariaLabel }) => (
        <div className="language-item" key={title} aria-label={ariaLabel}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default LanguagesMenu
