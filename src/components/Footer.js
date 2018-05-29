import React, { Component } from "react"
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

class Footer extends Component {
    render() {
      return (
        <footer>
            <div className="barrier"></div>
            <div className="container clearfix no-header">
                <div className="column centered">
                <figure className="image">
                    <img src={logo} alt="The Beason Company" />
                </figure>
                <div className="medium-break"></div>
                <p><Link href="mailto:hello@beason.co" title="">hello@beason.co</Link></p>
                <p><Link href="#" title="legal">Legal</Link></p>
                <p><Link href="#" title="">301-000-0000</Link></p>
                </div>
            </div>
        </footer>
        );
    }
  }
  
  export default Footer