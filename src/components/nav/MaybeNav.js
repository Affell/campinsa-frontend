import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

const NoNavPaths = ["/login"];

const MaybeNav = ({ children, footer = false }) => {
  const location = useLocation();
  if (NoNavPaths.includes(location.pathname)) {
    return children;
  }

  return (
    <>
      <Navbar />
      {children}
      {footer && <Footer />}
    </>);
};

export default MaybeNav;