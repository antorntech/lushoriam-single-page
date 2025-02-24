import React from "react";
import Container from "../components/shared/Container";

const PrivacyPolicy = () => {
  return (
    <Container className="md:h-screen">
      <div className="p-5 max-w-3xl mx-auto">
        <p className="mb-6">
          Welcome to <strong>Lushoriam</strong>. Your privacy is important to
          us. This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you register, place an order,
          or subscribe to our newsletter.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your information to process orders, provide customer support,
          send updates, and improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          3. Sharing Your Information
        </h2>
        <p className="mb-4">
          We do not sell or trade your personal information. However, we may
          share it with trusted third-party services for order processing,
          shipping, or marketing with your consent.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Security</h2>
        <p className="mb-4">
          We implement security measures to protect your information but cannot
          guarantee absolute security due to the nature of the internet.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, modify, or delete your personal
          information. Contact us at support@lushoriam.com for any requests.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Please review it
          regularly for any changes.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
