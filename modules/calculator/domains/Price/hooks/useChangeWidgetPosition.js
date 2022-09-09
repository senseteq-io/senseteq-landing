import { useEffect } from 'react'

/**
 * This hook changing offsets of widgets on trigger change.
 * @param {boolean} trigger
 */
const useChangeWidgetPosition = (trigger) => {
  // [USE_EFFECTS]
  useEffect(() => {
    const leadboosterContainer = document.getElementById('LeadboosterContainer')
    const videoaskButton = document.getElementById('videoask-widget')

    const isMobile = window.matchMedia('(max-width: 576px)').matches

    if (leadboosterContainer) {
      leadboosterContainer?.style?.setProperty('right', '12px', 'important')
    }
    if (trigger && isMobile) {
      if (leadboosterContainer) {
        leadboosterContainer?.style?.setProperty('bottom', '64px', 'important')
        leadboosterContainer?.style?.setProperty('z-index', '1', 'important')
        leadboosterContainer?.style?.setProperty('right', '0px', 'important')
      }
      if (videoaskButton) {
        videoaskButton.style.setProperty(
          'bottom',
          'calc(64px + 20px)',
          'important'
        )
        videoaskButton.style.setProperty('z-index', '1', 'important')
      }
    }
    return () => {
      if (leadboosterContainer) {
        leadboosterContainer?.style?.setProperty('right', '28px', 'important')
      }
      if (videoaskButton) {
        videoaskButton.style.setProperty('bottom', '20px', 'important')
      }
    }
  }, [trigger])
}

export default useChangeWidgetPosition
