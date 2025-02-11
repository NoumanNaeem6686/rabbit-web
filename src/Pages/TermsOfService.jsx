import React from "react";
import "../Styling/Policy.css";

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <h1>Terms of Service</h1>
      <div className="policy-content">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be
            bound by the terms and provisions of this agreement.
          </p>
        </section>

        <section>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Cloudview Technology's
            website for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section>
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Cloudview Technology's website are provided on an
            'as is' basis. Cloudview Technology makes no warranties, expressed
            or implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsOfService;
