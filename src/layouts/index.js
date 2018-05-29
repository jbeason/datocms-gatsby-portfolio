import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsHome.seoMetaTags}
    />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
