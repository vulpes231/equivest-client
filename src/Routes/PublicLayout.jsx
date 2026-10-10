import React from "react";
import Navbar from "../pages/Landing/Navbar";
import Footer from "../pages/Landing/Footer";
import { useLocation } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const location = useLocation();

  const showAuth = ["/verifyemail", "/login", "/register", "/forgot-password"];
  return (
    <>
      {!showAuth.includes(location.pathname) && <Navbar />}

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PublicLayout;
