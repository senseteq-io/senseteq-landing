import Navigation from '../Navigation'
import { OptionList } from '../../../../components'
import Title from '../Title'
import styles from './Content.module.css'
import { useCalculator } from '../../../../contexts/Calculator'

/**
 * It returns the content of the page
 * @returns The content of the page.
 */
export default function Content({ title, subtitle, options, type }) {
  /* Destructuring the `onSelect`, `onNext`, and `onPrev` functions from the `useCalculator` hook. */
  const { onSelect, onNext, onPrev, calculatorData } = useCalculator()

  /* Returning the content of the page. */
  return (
    <div className={styles.fadeIn}>
      <Title title={title} subtitle={subtitle} />
      <OptionList
        className="mb-3"
        type={type}
        options={options}
        onSelect={onSelect}
        calculatorData={calculatorData}
      />
      <Navigation onPrev={onPrev} onNext={onNext} />
    </div>
  )
}
