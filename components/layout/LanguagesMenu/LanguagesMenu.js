const LANGUAGES_ITEMS = [
  {
    title: 'NO'
  },
  {
    title: 'EN'
  }
]

const LanguagesMenu = () => {
  return (
    <div id="languages-menu">
      {LANGUAGES_ITEMS?.map(({ title }) => (
        <div className="language-item" key={title}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default LanguagesMenu
