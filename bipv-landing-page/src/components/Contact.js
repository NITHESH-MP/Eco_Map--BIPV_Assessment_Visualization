// src/components/Contact.js
import React from 'react';
import './styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <p>
      Have questions or need assistance? Feel free to reach out to us!
    </p>
    <div className="contact-info">
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>Phone: +123 456 7890</p>
    </div>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;
