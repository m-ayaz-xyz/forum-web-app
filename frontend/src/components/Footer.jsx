import React from "react";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>&copy; 2025 My Forum. All rights reserved.</p>
        <p>Developed By <a href="https://github.com/m-ayaz-xyz"><SiGithub /></a></p>
      </footer>
    </>
  );
};

export default Footer;
