import React from "react";
const Contact = () => {
  const updatedata = () => {
    alert("data sended");
  };
  return (
    <>
      <div className="contact_page">
        <h1>Contact Us</h1>
        <p>
          Have questions or suggestions? We'd love to hear from you! Feel free
          to reach out using the form below or email us directly at{" "}
          <a href="mailto:contact@rajanepaint.com">contact@rajanepaint.com</a>.
        </p>
        <div className="contact_form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button onClick={updatedata}>Send Message</button>
        </div>
      </div>
    </>
  );
};
export default Contact;
