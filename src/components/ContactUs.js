import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    // Ici vous pouvez ajouter votre logique d'envoi de formulaire, par exemple avec une API
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <p className="lead text-center">
        We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to contact us.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>If you prefer, you can also reach us at:</p>
        <p>Email: <a href="mailto:anouar.belabbes@gmail.com">anouar.belabbes@gmail.com</a></p>
        <p>Phone: +212 654 13 53 04</p>
      </div>
    </div>
  );
};

export default ContactUs;
