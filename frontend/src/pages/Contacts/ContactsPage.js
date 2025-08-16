import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import Title from '../../Components/Title/Title';
import classes from './contacts.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={classes.contactPage}>
      <Title 
        title="Contact Us" 
        margin="2rem 0 1rem 0" 
        fontSize="2.5rem" 
        color="#5c2a2a"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />

      <div className={classes.contactContainer}>
        {/* Contact Information */}
        <div className={classes.contactInfo}>
          <h2 className={classes.sectionTitle}>Get in Touch</h2>
          <p className={classes.infoText}>
            Have questions about our cakes or want to place a custom order? Reach out to us!
          </p>

          <div className={classes.infoItems}>
            <div className={classes.infoItem}>
              <div className={classes.infoIcon}>
                <FaPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>011-234-5667</p>
                <p>076-8978908</p>
              </div>
            </div>

            <div className={classes.infoItem}>
              <div className={classes.infoIcon}>
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <p>mdcakes@gmail.com</p>
              </div>
            </div>

            <div className={classes.infoItem}>
              <div className={classes.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Location</h3>
                <p>230/9, MD Cakes, Wattala Road, Colombo</p>
              </div>
            </div>

            <div className={classes.infoItem}>
              <div className={classes.infoIcon}>
                <FaClock />
              </div>
              <div>
                <h3>Hours</h3>
                <p>Monday - Saturday: 9AM - 7PM</p>
                <p>Sunday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={classes.contactForm}>
          <h2 className={classes.sectionTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={classes.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={classes.submitButton}>
              <MdSend /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className={classes.mapContainer}>
        <iframe
          title="MD Cakes Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798511757687!2d79.88021431539396!3d6.914657295003809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b5c000001%3A0x5b6b5a5a5a5a5a5a!2sMD%20Cakes!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}