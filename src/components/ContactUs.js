import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    // Ajoutez ici votre logique d'envoi de formulaire, par exemple avec une API
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <h2 className="mb-4 text-center" style={styles.title}>Contact Us</h2>

      <p className="lead text-center" style={styles.lead}>
        We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to contact us.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8" style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" style={styles.label}>Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={styles.label}>Your Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={styles.label}>Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={styles.textarea}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn" style={styles.button}>Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-4" style={styles.contactInfo}>
        <p>If you prefer, you can also reach us at:</p>
        <p>Email: <a href="mailto:anouar.belabbes@gmail.com" style={styles.link}>anouar.belabbes@gmail.com</a></p>
        <p>Phone: <a href="tel:+212654135304" style={styles.link}>+212 654 13 53 04</a></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#007bff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  },
  lead: {
    fontSize: '18px',
    color: '#495057',
    marginBottom: '30px',
    animation: 'fadeIn 1s ease-out',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
  label: {
    fontWeight: 'bold',
    color: '#343a40',
  },
  input: {
    borderRadius: '10px',
    border: '1px solid #ced4da',
    padding: '10px',
    fontSize: '16px',
  },
  textarea: {
    borderRadius: '10px',
    border: '1px solid #ced4da',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    padding: '10px 20px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  contactInfo: {
    fontSize: '16px',
    color: '#495057',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

// Ajouter des animations CSS
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .btn:hover {
      background-color: #0056b3 !important;
      transform: scale(1.05);
    }
  </style>`
);

export default ContactUs;
