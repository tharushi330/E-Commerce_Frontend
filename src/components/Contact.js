import React from "react";
import '../css/contact.css'; 
import Footer from "./Footer";


export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submission is disabled.");
  };

  return (
    <>
      
        <div className="hero">
          <div className="container2">
            <h1>Contact Us</h1>
            <p>We're here to help with all your gifts you needs</p>
          </div>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-item">
              <div className="icon">📍</div>
              <div className="info-content">
                <h3>Wadduwa</h3>
                <p>No:04, Wasantharama Road,</p>
                <p>Wadduwa</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📱</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p><a href="tel:0760459950">0760459950</a></p>
                <p><a href="tel:0382284400">0382284400</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p><a href="mailto:quickride@premiumcars.com">MyGiftHut@premiumcars.com</a></p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">🕒</div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Static Contact Form */}
          <div className="contact-form">
            <h2>Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" className="form-control" required></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.635504527447!2d79.9202483!3d6.6449281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae236b65f13f5e5%3A0x8b57e0a28b4b4e8!2sWadduwa!5e0!3m2!1sen!2slk!4v1645875044392"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Footer/>
      
    </>
  );
}
