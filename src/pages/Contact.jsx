import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Contact() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setStatus('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Form submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Nav activePage="contact" basePath="../" />
      <div className="container contact-container">
        <section className="hero" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p>Have a project in mind, technical query, or want to collaborate? Reach out directly.</p>
        </section>

        <div className="contact-card">
          <div className="contact-methods">
            <a href="mailto:dariusdevworks@gmail.com" className="contact-link">
              ✉️ dariusdevworks@gmail.com
            </a>
          </div>

          <form
            id="contact-form"
            action="https://formsubmit.co/ajax/dariusdevworks@gmail.com"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <div className="form-status success">
                Thank you! Your message has been sent directly to dariusdevworks@gmail.com.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error">
                Unable to send message right now. Please email directly at
                dariusdevworks@gmail.com.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
