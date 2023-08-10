import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h4 className="text-center">
        All Right Reserverd &copy; peppermint robotics{" "}
      </h4>
      <p className="text-center mt-3">
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
        <a href="https://www.linkedin.com/company/getpeppermint/">Linkedin</a>
      </p>
    </div>
  );
}
