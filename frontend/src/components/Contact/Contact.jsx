import React, { useState } from 'react';
import "../../App.css";
import sofa from "../../assets/sofa.jpeg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9\b]+$/;
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = 'Phone number must contain only digits';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, submit the data
      console.log('Form data submitted:', formData);
    } else {
      console.log('Validation failed');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (

    
    <div>
    <div className="contact-container">
      <div className="left-half">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <div className="right-half">
        <img src={sofa} alt="contactus-img" />
      </div>
    </div>
  </div>
  );
}
