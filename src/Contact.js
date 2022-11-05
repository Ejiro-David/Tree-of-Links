import React from "react";


function Contact() {
  return (
    <div>
      <form>
        <label for="fname">First Name</label>
        <input name="fname" type="text" required value="first name" id="first_name"/><br></br>

        <label for="lname">Last Name</label>
        <input name="lname" type="text" required value="last name" id="last_name"/><br></br>

        <label for="email">Email</label>
        <input name="email" type="email" required value="email" id="email"/><br></br>

        <textarea type="text" required value="message" id="message"/><br></br>
        <button id="btn__submit" onClick={'xx'}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;