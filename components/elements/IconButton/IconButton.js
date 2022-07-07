import Image from 'next/image'
import Link from 'next/link'

const IconButton = (props) => {
  const { href, alt, ariaLabel, src, ...rest } = props

  return (
    <Link href={href}>
      <a className="icon-button" {...rest} rel="noreferrer">
        <Image src={src} alt={alt} layout="fill" aria-label={ariaLabel} />
      </a>
    </Link>
  )
}

export default IconButton
