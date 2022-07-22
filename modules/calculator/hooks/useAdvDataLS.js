import { useEffect } from 'react'

const useAdvDataLS = ({ geo, g, adv }) => {
  useEffect(() => {
    if (geo) window?.localStorage.setItem('s_geo', geo)
    if (g) window?.localStorage.setItem('s_g', g)
    if (adv) window?.localStorage.setItem('s_adv', adv)
  }, [geo, g, adv])
}

export default useAdvDataLS
