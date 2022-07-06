const ReasonView = (props) => {
  const { index, title, description } = props
  return (
    <div
      key={title}
      className="reason-item-wrapper col-12 col-md-6 col-lg-4"
      data-aos="fade-left">
      <div className="number-wrapper">
        <p className="number">{index + 1}</p>
      </div>
      <div className="reason-item">
        <h4 className="title">{t(title)}</h4>
        <p className="body2">{t(description)}</p>
      </div>
    </div>
  )
}

export default ReasonView
