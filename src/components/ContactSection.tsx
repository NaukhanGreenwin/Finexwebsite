"use client";

import contact from "@/data/contact.json";
import "@/app/contact.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Contact Heading */}
        <h2 className="contact-heading">CONTACT</h2>
        <div className="contact-underline"></div>
        
        {/* Google Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9512773969254!2d-79.6571!3d43.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43f0c7d77d35%3A0x4a3d53c0c8a8d0b7!2s2179%20Dunwin%20Dr%20%232%2C%20Mississauga%2C%20ON%20L5L%201X2%2C%20Canada!5e0!3m2!1sen!2sus!4v1693420125156!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        {/* Contact Information */}
        <div className="contact-info-container">
          {/* Left Column - Inquiries */}
          <div>
            <h3 className="contact-section-title">Inquiries</h3>
            <p className="contact-text">
              {contact.inquiries.text}
            </p>
            
            {/* Contact Form */}
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <input type="text" className="form-input" placeholder="NAME" />
                </div>
                <div className="form-row">
                  <input type="email" className="form-input" placeholder="EMAIL*" />
                </div>
                <div className="form-row">
                  <input type="tel" className="form-input" placeholder="PHONE" />
                </div>
                <div className="form-row">
                  <input type="text" className="form-input" placeholder="ADDRESS" />
                </div>
                <div className="form-row">
                  <input type="text" className="form-input" placeholder="COMPANY" />
                </div>
              </form>
            </div>
            
            <h3 className="contact-section-title contact-us">Contact Us!</h3>
          </div>
          
          {/* Right Column - Head Office */}
          <div>
            <h3 className="contact-section-title">Head Office</h3>
            <p className="contact-text">
              {contact.address.street}<br />
              {contact.address.city}, {contact.address.province} {contact.address.postalCode}
            </p>
            
            <p className="contact-text">
              <span className="contact-bold">Email:</span> {contact.emails[0].address}
            </p>
            <p className="contact-text">
              <span className="contact-bold">Tel:</span> {contact.phones[0].number}
            </p>
            <p className="contact-text">
              <span className="contact-bold">Toll Free:</span> {contact.phones[1].number}
            </p>
            
            {/* Employment Section */}
            <div className="contact-employment">
              <h3 className="contact-section-title">Employment</h3>
              <p className="contact-text">
                {contact.employment.text}<br />
                {contact.employment.email}
              </p>
            </div>
            
            {/* Quote Section */}
            <div className="contact-quote">
              <p className="contact-quote-text">
                {contact.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
