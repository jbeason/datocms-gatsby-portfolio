import React, { Component } from "react"

class Contact extends Component {
  render() {
    return (
      <div className="contact inner boxed">
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

export default Contact
