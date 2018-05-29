import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <figure className="price-table">
          <h4 className="has-text-centered has-text-weight-semibold heading">
            {price.plan}
          </h4>
          <p className="price">
            <span>$</span>{price.price}
          </p>
          <p className="has-text-weight-semibold centered">{price.description}</p>
            {price.items.map(item => (
              <p key={item} className="price-details">
                {item}
              </p>
            ))}
            <a href="#contactform" className="button" class="scroll_to">Book Now</a>
        </figure>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
