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
    <div className="languages-wrapper">
      {LANGUAGES_ITEMS?.map(({ title }) => (
        <div className="language-item" key={title}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default LanguagesMenu
