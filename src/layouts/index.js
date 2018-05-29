import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import './all.sass'

const TemplateWrapper = ({ children, data }) => (
  <div className="container">
    <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsHome.seoMetaTags}
    />
    <div className="container__sidebar">
      <div className="sidebar">
        <h6 className="sidebar__title">
          <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
        </h6>
        <div
          className="sidebar__intro"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
          }}
        />
        <nav id="main-nav">
          <ul className="option-set" data-option-key="filter">
            <li><Link className="navbar-item" to="/about">About</Link></li>
            <li><Link className="navbar-item" to="/projects">Projects</Link></li>
            <li> <a href="#" className="sub-nav-toggle">Services <i className="fas fa-angle-down is-pulled-right"></i></a>
              <ul className="sub-nav hidden">
                <li> <Link className="navbar-item" to="/websites">Web Services</Link> </li>
                <li> <Link className="navbar-item" to="/photography">Photography</Link> </li>
              </ul>
            </li>
            <li><Link className="navbar-item" to="/contact">Contact</Link></li>
          </ul>  
        </nav>
        <p className="sidebar__social">
          {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
            <a
              key={profile.profileType}
              href={profile.url}
              target="blank"
              className={`social social--${profile.profileType.toLowerCase()}`}
            />
          ))}
        </p>
        <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>
      </div>
    </div>
    <div className="container__body">
      <div className="container__mobile-header">
        <div className="mobile-header">
          <div className="mobile-header__menu">
            <Link to="#" data-js="toggleSidebar" />
          </div>
          <div className="mobile-header__logo">
            <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
          </div>
        </div>
      </div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    datoCmsSite {
      globalSeo {
        siteName
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      copyright
    }
    allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          profileType
          url
        }
      }
    }
  }
`
