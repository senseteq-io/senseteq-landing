import Link from 'next/link'

const Button = (props) => {
  const { href, children, className, ...rest } = props

  return (
    <Link href={href}>
      <a className={`btn ${className}`} {...rest}>
        {children}
      </a>
    </Link>
  )
}

export default Button
