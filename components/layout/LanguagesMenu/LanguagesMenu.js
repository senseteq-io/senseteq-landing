import { LANGUAGES_ITEMS } from '../../../constants'
import { useRouter } from 'next/router'

const LanguagesMenu = () => {
  // [ADDITIONAL_HOOKS]
  const router = useRouter()

  // [HELPER_FUNCTIONS]
  const handleClickLanguageItem = (locale) =>
    router.push(
      { route: router.pathname, query: router.query },
      router.asPath,
      { locale }
    )

  return (
    <div id="languages-menu">
      {LANGUAGES_ITEMS?.map(({ title, ariaLabel }) => (
        <div
          className="language-item"
          key={title}
          aria-label={ariaLabel}
          onClick={() => handleClickLanguageItem(title.toLowerCase())}>
          {title}
        </div>
      ))}
    </div>
  )
}

export default LanguagesMenu
