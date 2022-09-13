import { InnerEmailForm } from '../../../domains/Result/components'
import Button from '../../elements/Button'
import Image from 'next/image'
import Text from '../../elements/Typography/Text'
import Title from '../../elements/Typography/Title'

/**
 * It renders a container with two columns, the first column contains an image and the second column
 * contains a title, two paragraphs and a button
 * @returns A component that renders a container with a row and two columns. The first column contains
 * an image and the second column contains a title, two paragraphs, and a button.
 */
export default function Welcome({
  title,
  isEmailShow,
  descriptionLine1,
  descriptionLine2,
  buttonText,
  geo,
  g,
  onClick
}) {
  return (
    <div className="container">
      <div className="row">
        <div
          role="img"
          className="col-12 col-lg-6 align-items-center justify-content-center d-flex mb-4">
          <Image
            src="/assets/welcome.svg"
            width="380px"
            height="260px"
            alt="Build MVP"
          />
        </div>
        <div
          className="col-12 col-lg-6"
          role="article"
          itemScope
          itemType="https://schema.org/CreativeWork">
          <div className="row">
            {g ? (
              <Text semibold style={{ color: '#9a1088' }}>
                {g}
              </Text>
            ) : null}
            <div className="col-12 mb-3">
              <Title as="h3" regular itemProp="name">
                {geo} {title}
              </Title>
            </div>
            <div className="col-12 mb-2" itemProp="about">
              <Text>{descriptionLine1}</Text>
            </div>
            <div className="col-12 mb-4" itemProp="about">
              <Text>{descriptionLine2}</Text>
            </div>
            <div className="col-12 mb-4">
              {isEmailShow ? (
                <InnerEmailForm buttonText={buttonText} onClick={onClick} />
              ) : (
                <Button
                  variant="lg"
                  shape="rounded"
                  role="button"
                  onClick={onClick}>
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
