import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { Text } from '../../../../components'

const TagSelect = (props) => {
  const { title, onChange, tags, carousel } = props

  const settings = {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (
    <div className="row">
      {title && (
        <div className="col-12">
          <p className="subtitle">{title}</p>
        </div>
      )}
      {carousel ? (
        <div className="tags-carousel col-12">
          <Slider {...settings}>
            {tags?.map(({ _id, name }) => (
              <div key={_id} className="tag-card-wrapper">
                <div className="tag-card" onClick={() => onChange?.(_id, name)}>
                  <Text>{name}</Text>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="col-12 tags">
          {tags?.map(({ _id, name }) => (
            <div
              className="tag-card"
              key={_id}
              onClick={() => onChange?.(_id, name)}>
              <Text>{name}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

TagSelect.propTypes = {
  onChange: PropTypes.func,
  tags: PropTypes.array,
  title: PropTypes.any
}

export default TagSelect
