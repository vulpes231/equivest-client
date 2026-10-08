import React from "react";
import Navbar from "../pages/Landing/Navbar";
import Footer from "../pages/Landing/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default PublicLayout;
