import React from "react";
import "./Contact.css";
import hng9 from "../images/I4G.png";
import i4g from "../images/Vector.png";

function Contact() {
  return (
    <div className="contact-container">
      <header>
        <h2>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </header>
      <main>
        <form className="main">
          <div className="input-cont">
            <label for="fname">First Name</label>
            <input
              name="fname"
              type="text"
              required
              placeholder="Enter your first name"
              id="first_name"
            />
            <br></br>
          </div>
          <div className="input-cont">
            <label for="lname">Last Name</label>
            <input
              name="lname"
              type="text"
              required
              placeholder="Enter your last name"
              id="last_name"
            />
            <br></br>
          </div>

          <div className="input-cont">
            <label for="email">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="yourname@email.com"
              id="email"
            />
            <br></br>
          </div>

          <div className="input-cont">
            <label for="message">Message</label>
            <textarea
              type="text"
              required
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
            />
            <br></br>
          </div>

          <div className="input-cont" id="consent-cont" >
            <input type="checkbox" id="consent" name="consent" value="" />
            <br></br>
            <label for="consent">
              You agree to providing your data to name who may contact you.
            </label>
            <br></br>
          </div>
          <br></br>
          <button id="btn__submit" onClick={"xx"}>
            Send Message
          </button>
        </form>
      </main>
      <footer>
        <img alt="zuri_svg" src={i4g}></img>
        <p>HNG Internship 9 Frontend Task</p>
        <img alt="hng9" src={hng9}></img>
      </footer>
    </div>
  );
}

export default Contact;
