const Stepper = (props) => {
  const { stepperConfig } = props
  return (
    <div className="stepper">
      {stepperConfig?.map(({ name, description }, index) => (
        <div key={name} className={'step-wrapper '}>
          <div className="step-content">
            <div className="step-tail" />
            <div className="step-number">{index + 1}</div>
            <p className="name">{name}</p>
            <p className="body2 description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stepper
