import { useState } from 'react'

const useModal = () => {
  const [visibility, setVisibility] = useState(false)

  // Actions
  const open = () => setVisibility(true)
  const close = () => setVisibility(false)

  return [visibility, open, close]
}

export default useModal
