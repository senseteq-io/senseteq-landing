import {
  Content,
  Head,
  Header,
  Spinner
} from '../../modules/calculator/components'
import {
  useCalculatorData,
  useLS,
  useMetaData,
  usePages,
  useParams,
  usePath,
  useTransformRoutes
} from '../../modules/calculator/hooks'

import { CalculatorProvider } from '../../modules/calculator/contexts/Calculator'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useFetchResult } from '../../modules/calculator/domains/Result/hooks'

export default function CalculatorAll() {
  /* Transforming the routes from the `routes.js` file into a format that is easier to work with. */
  const routes = useTransformRoutes()

  /* Using the `useMetaData` hook to get the meta data for the current page. */
  const metaData = useMetaData(routes)

  /* Destructuring the metaData object. */
  const { title, description, meta_description, keywords } = metaData

  /* Using the `usePages` hook to get the current page. */
  const page = usePages(routes)

  const initialData = usePath(routes)

  /* Destructuring the `calculatorData`, `updateCalculatorField`, and `updateCalculatorFields` from the
  `useCalculatorData` hook. */
  const { calculatorData, updateCalculatorField } = useCalculatorData(
    routes,
    initialData
  )

  /* Using the `useParams` hook to get the params from the URL. geo - country, g - gender */
  const { geo, g, id } = useParams()

  /* Fetching the data from the database and setting it to the `DBData` variable. */
  const [DBData, loading] = useFetchResult(id)

  /* Using the `useLS` hook to save the `calculatorData` to local storage. */
  useLS(DBData || calculatorData)

  /* Returning the head, header, content, and footer components. */
  return (
    <>
      <style global jsx>{`
        body {
          height: 100vh;
          width: 100vw;
          font-family: var(--calc-module-body-font-family);
          font-size: var(--calc-module-root-font-size);
        }
      `}</style>
      <Head
        title={title}
        description={description}
        metaDescription={meta_description}
        keywords={keywords}
      />
      <Header />
      <Content>
        <CalculatorProvider
          geo={geo}
          g={g}
          loading={loading}
          savedResult={!!id}
          calculatorData={DBData || calculatorData}
          updateCalculatorField={updateCalculatorField}>
          {page}
        </CalculatorProvider>
      </Content>
      {/* <Footer /> */}
    </>
  )
}

/**
 * It fetches the translations for the current locale and passes them to the page as props
 * @returns The props object is being returned.
 */
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

/**
 * It returns an object with a paths property that contains an array of objects with a params property
 * that contains an object with a slug property that contains an array of strings
 * @returns An object with a paths property and a fallback property.
 */
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: [
            'analogues',
            'industries',
            'platforms',
            'administration',
            'localization',
            'authentication',
            'external-services',
            'appearance',
            'brand',
            'revenue'
          ]
        }
      }
    ],
    fallback: true
  }
}
