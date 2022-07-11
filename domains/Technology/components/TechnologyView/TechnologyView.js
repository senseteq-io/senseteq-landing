import Image from 'next/image'
import { Title } from '../../../../components'

const TechnologyView = (props) => {
  const { name, src } = props

  return (
    <div className="technology-item">
      <div className="technology-image-wrapper">
        <Image src={src} alt={name} layout="fill" />
      </div>
      <Title as="h6">{name}</Title>
    </div>
  )
}

export default TechnologyView
