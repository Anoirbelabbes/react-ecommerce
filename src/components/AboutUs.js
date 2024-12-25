import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mt-5" style={styles.container}>
      <h2 className="mb-4 text-center" style={styles.title}>About Us</h2>
      
      <p className="lead" style={styles.lead}>
        Our platform's main goal is to develop an innovative e-commerce solution that helps sellers grow their business by recommending products tailored to their specific field. Through this approach, we aim to provide value to both vendors and customers.
      </p>

      <p style={styles.paragraph}>
        Additionally, we offer customers personalized suggestions thanks to an advanced recommendation system. This system analyzes user behavior and preferences, ensuring that each customer receives a shopping experience suited to their individual tastes.
      </p>

      <p style={styles.paragraph}>
        Our platform also addresses the issue of reliability by allowing sellers with physical stores to add their locations. This feature enables customers to easily find nearby stores that offer the products they are looking for, ensuring a seamless connection between the online and offline shopping experience.
      </p>

      <p style={styles.paragraph}>
        We are dedicated to enhancing the e-commerce experience for both sellers and buyers, helping businesses thrive while providing customers with a convenient and personalized shopping journey.
      </p>

      <div className="text-center mt-4" style={styles.footer}>
        <p>Thank you for choosing us! We are excited to be part of your journey.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f0f8ff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1e90ff',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
  },
  lead: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
    marginBottom: '20px',
    animation: 'fadeIn 1s ease-out',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
    paddingLeft: '15px',
    borderLeft: '4px solid #1e90ff',
    animation: 'slideIn 0.5s ease-in-out',
  },
  footer: {
    fontSize: '18px',
    color: '#2f4f4f',
    fontStyle: 'italic',
  },
};

// Ajoutez des animations CSS
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  </style>`
);

export default AboutUs;
