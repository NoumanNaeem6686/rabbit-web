import React from "react";
import "../Styling/Policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <div className="policy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Personal information (name, email address, etc.)</li>
            <li>Usage data and preferences</li>
            <li>Device information</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send important updates and notifications</li>
            <li>Respond to your requests and inquiries</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
