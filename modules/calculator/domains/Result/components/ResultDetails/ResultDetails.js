import Image from 'next/image'
import { Text } from '../../../../components'

const ResultDetails = ({ features }) => {
  return (
    <div className="row mb-5">
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mb-4">
        <div>
          <Image
            src="/assets/result.svg"
            width="250px"
            height="250px"
            alt="MVP calculator result"
          />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="row">
          {features.map((feature, index) => (
            <div key={feature.replace(' ', '-')} className="col-12 mb-2">
              <Text variant="secondary">✅ {feature}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResultDetails
