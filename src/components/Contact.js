import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mt-3">Send Email using Emailjs</h2>
        <form>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Your message"
              className="form-control"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
