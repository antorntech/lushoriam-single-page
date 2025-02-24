import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
