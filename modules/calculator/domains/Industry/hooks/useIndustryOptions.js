import { INDUSTRIES } from '../../../__constants__'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'

/**
 * It returns an array of objects that contain the label and value of each industry option
 * @returns An array of objects.
 */
const useIndustryOptions = () => {
  /* A hook that allows us to use the translation function. */
  const { t } = useTranslation()

  /* A hook that allows us to use the translation function. */
  const options = useMemo(() => {
    return [
      {
        label: t('calculator.industries.options.e_commerce'),
        value: INDUSTRIES.E_COMMERCE
      },
      {
        label: t('calculator.industries.options.sports_and_fitness'),
        value: INDUSTRIES.SPORTS_AND_FITNESS
      },
      {
        label: t('calculator.industries.options.media_and_entertainment'),
        value: INDUSTRIES.MEDIA_AND_ENTERTAINMENT
      },
      {
        label: t('calculator.industries.options.food'),
        value: INDUSTRIES.FOOD
      },
      {
        label: t('calculator.industries.options.education_and_training'),
        value: INDUSTRIES.EDUCATION_AND_TRAINING
      },
      {
        label: t('calculator.industries.options.healthcare'),
        value: INDUSTRIES.HEALTHCARE
      },
      {
        label: t('calculator.industries.options.automotive'),
        value: INDUSTRIES.AUTOMOTIVE
      },
      {
        label: t('calculator.industries.options.finance_banking_insurance'),
        value: INDUSTRIES.FINANCE_BANKING_INSURANCE
      },
      {
        label: t('calculator.industries.options.travel'),
        value: INDUSTRIES.TRAVEL
      },
      {
        label: t('calculator.industries.options.real_estate'),
        value: INDUSTRIES.REAL_ESTATE
      },
      {
        label: t('calculator.industries.options.manufacturing'),
        value: INDUSTRIES.MANUFACTURING
      },
      {
        label: t('calculator.industries.options.logistic'),
        value: INDUSTRIES.LOGISTIC
      },
      {
        label: t('calculator.industries.options.agritech'),
        value: INDUSTRIES.AGRITECH
      },
      {
        label: t('calculator.industries.options.natural_resources'),
        value: INDUSTRIES.NATURAL_RESOURCES
      },
      {
        label: t('calculator.industries.options.green_energy'),
        value: INDUSTRIES.GREEN_ENERGY
      },
      {
        label: t('calculator.industries.options.internet_of_things'),
        value: INDUSTRIES.INTERNET_OF_THINGS
      },
      {
        label: t('calculator.industries.options.robotics'),
        value: INDUSTRIES.ROBOTICS
      },
      {
        label: t('calculator.industries.options.kids'),
        value: INDUSTRIES.KIDS
      },
      {
        label: t('calculator.industries.options.social_networking'),
        value: INDUSTRIES.SOCIAL_NETWORKING
      },
      {
        label: t('calculator.industries.options.dating'),
        value: INDUSTRIES.DATING
      },
      {
        label: t('calculator.industries.options.productivity'),
        value: INDUSTRIES.PRODUCTIVITY
      },
      {
        label: t('calculator.industries.options.another'),
        value: INDUSTRIES.ANOTHER
      }
    ]
  }, [t])

  return options
}

export default useIndustryOptions
