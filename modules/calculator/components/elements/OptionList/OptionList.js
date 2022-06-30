import { useEffect, useState } from 'react'

import Option from '../Option'

/**
 * It takes an array of options, a type, a class name, and an onSelect function as props, and returns a
 * list of options that can be selected
 * @returns A component that renders a list of options.
 */
export default function OptionList({
  options,
  type,
  className,
  onSelect,
  calculatorData
}) {
  /* Creating a state variable called `selected` and a function called `setSelected` that can be used
  to update the value of `selected`. */
  const [selected, setSelected] = useState()

  /**
   * `handleSelect` is a function that takes a value as an argument, sets the selected value to the
   * value passed in, saves the value to local storage, and then calls the `onSelect` function
   * @param value - The value of the selected item
   */
  const handleSelect = (value) => {
    /* Setting the value of the `selected` state variable to the value passed in. */
    setSelected(value)

    /* Delaying the call to the `onSelect` function by 1 second. */
    setTimeout(() => {
      onSelect(type, value)
    }, 1000)
  }

  /* This is a React hook that is called when the component is mounted. It is used to set the selected
  value to the value stored in local storage. */
  useEffect(() => {
    setSelected(calculatorData[type])
  }, [calculatorData, type])

  /* Returning a component that renders a list of options. */
  return (
    <div className={`bootstrap-container ${className}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-9">
          <div className="row justify-content-center">
            {options?.map((option, index) => (
              <div
                key={`${option?.label}-${index}`}
                className="col-12 col-md-4 justify-content-center align-items-center mb-3">
                <Option
                  src={option?.src}
                  value={option?.value}
                  label={option?.label}
                  onSelect={handleSelect}
                  selected={option?.value === selected}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
