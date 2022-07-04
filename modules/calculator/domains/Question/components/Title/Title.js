import { Text, Title } from '../../../../components'

/**
 * It renders a title and subtitle
 * @returns A component that renders a title and subtitle.
 */
export default function CalculatorQuestionTitle({ title, subtitle }) {
  return (
    <div className="container mb-4">
      <div className="row">
        <div className="col-12 mb-4">
          <Title as="h3" align="center" lighter>
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </Title>
        </div>
        <div className="col-12 mb-4">
          <Text align="center" variant="secondary" subtitle>
            {subtitle}
          </Text>
        </div>
      </div>
    </div>
  )
}
