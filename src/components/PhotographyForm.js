import React, { Component } from "react"

class PhotographyForm extends Component {
  render() {
    return (
      <div id="contactform" className="contact inner boxed">
        <form name="contact" method="post" data-netlify="true" action="/thanks/" data-netlify-honeypot="bot-field" className="form-part">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
            <input type="text" name="name" placeholder="Name"/>
            </label>
          </p>
          <p>
            <label>
              <input type="email" name="email" placeholder="Email"/>
            </label>
          </p>
          <p>
              <label> I'm interested in &hellip;
                <select name="your-recipient" class="" aria-required="true" aria-invalid="false">
                    <option value="an individual session">an individual session</option>
                    <option value="a couples session">a couples session</option>
                    <option value="a family session">a family session</option>
                    <option value="wedding photography">wedding photography</option>
                    <option value="corporate photography">corporate photography</option>
                    <option value="food photography">food photography</option>
                </select>
              </label>
          </p>    
          <p>
            <label>
              <textarea name="message" placeholder="Tell us a little about your project"/>
            </label>
          </p>
          <p className="centered">
            <button className="send-btn" type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default PhotographyForm
