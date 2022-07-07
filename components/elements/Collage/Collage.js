import Image from 'next/image'

const Collage = (props) => {
  const { images } = props

  return (
    <div className="collage-wrapper" data-aos="fade-down">
      <div className="left-top-image-wrapper">
        <div className="left-top-image">
          <Image
            src={images?.[0]?.src}
            alt={images?.[0]?.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="right-top-image-wrapper">
        <div className="right-top-image">
          <Image
            src={images?.[1]?.src}
            alt={images?.[1]?.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="center-bottom-image-wrapper">
        <div className="center-bottom-image">
          <Image
            src={images?.[2]?.src}
            alt={images?.[2]?.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Collage
