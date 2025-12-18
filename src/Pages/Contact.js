import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Request Sent Successfully! ✅");
    e.target.reset();
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="contactContainer">
      <div className="contactCard">
        <h1 className="contactTitle">Emergency Contact</h1>

        <p className="contactSubtitle">
          Reach out immediately during blood emergencies.
        </p>

        <div className="contactInfo">
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> support@hemora.com</p>
          <p><strong>🏥 Location:</strong> 24/7 Blood Support Center, India</p>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Emergency Message" required></textarea>
          <button type="submit">Send Request</button>
        </form>

        {successMsg && <div className="successMessage">{successMsg}</div>}
      </div>
    </div>
  );
}
