/**
 * This function need to add class to LeadBooster widget to rewrite it styles.
 */
const addClassToLeadBooster = () => {
  window.LeadBooster.on('initialized', () => {
    const element = document.getElementById('LeadboosterContainer')
    element.classList.add('leadbooster')
  })
}

export default addClassToLeadBooster
