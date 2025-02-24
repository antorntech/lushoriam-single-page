import React from "react";
import Container from "../components/shared/Container";

const TermsAndConditions = () => {
  return (
    <Container className="h-screen">
      <div className="p-5 max-w-3xl mx-auto">
        <p className="mb-6">
          Welcome to <strong>Lushoriam</strong>. These Terms and Conditions
          outline the rules and regulations for using our website.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing and using our website, you accept and agree to comply
          with these terms. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Use of Our Services</h2>
        <p className="mb-4">
          You agree to use our website legally and responsibly. Any misuse,
          unauthorized access, or fraudulent activity is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          3. Account Responsibilities
        </h2>
        <p className="mb-4">
          If you create an account, you are responsible for maintaining its
          security and ensuring all information is accurate.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          4. Purchases and Payments
        </h2>
        <p className="mb-4">
          All purchases made through our website are subject to our pricing and
          refund policies. Ensure that payment details are valid and authorized.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Intellectual Property</h2>
        <p className="mb-4">
          All content on our website, including text, images, and trademarks, is
          owned by Lushoriam. Unauthorized use or reproduction is prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not liable for any damages resulting from the use or inability
          to use our services, including indirect or consequential losses.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          7. Changes to These Terms
        </h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Please check this page regularly for updates.
        </p>
      </div>
    </Container>
  );
};

export default TermsAndConditions;
