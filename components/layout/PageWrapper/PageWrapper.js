import { Header } from '../../layout'

const PageWrapper = (props) => {
  const { className, children } = props

  return (
    <div id="page-wrapper" className={className}>
      <Header />
      {children}
    </div>
  )
}

export default PageWrapper
