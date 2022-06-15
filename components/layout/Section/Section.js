const Section = (props) => {
  const { children, className } = props

  return (
    <section className={className}>
      <div className="section-content">{children}</div>
    </section>
  )
}

export default Section
