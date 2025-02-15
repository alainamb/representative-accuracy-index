import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create issue body with all form details
    const issueBody = `
Submitted by: ${formData.name}
Contact Email: ${formData.email}

Message:
${formData.message}
    `;

    // Use user's subject line or default if empty
    const issueTitle = formData.subject.trim() || 'Contact Form Submission';

    const issueUrl = 'https://github.com/username/representative-accuracy-index/issues/new?' + 
      `title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

    window.open(issueUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Layout title="Contact">
      <div className="container margin-vert--lg">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="margin-bottom--md">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="margin-bottom--md">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="margin-bottom--md">
            <label htmlFor="subject">Subject (Optional)</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
              placeholder="Brief description of your message"
            />
          </div>
          <div className="margin-bottom--md">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
              rows="4"
            />
          </div>
          <button type="submit" className="button button--primary">
            Submit
          </button>
        </form>
        <div className="margin-top--lg">
          <h2>Project Maintainer</h2>
          <p>Alaina Brandt</p>
          <p>GitHub: <a href="https://github.com/username">@username</a></p>
        </div>
      </div>
    </Layout>
  );
}