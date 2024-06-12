import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Socials from "./Socials/Socials";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center align-middle footer-bg gap-14 p-20">
      <div className="flex flex-col items-center justify-center align-middle gap-10">
        <Logo variant="footer" />
        <Navbar variant="footer" />
      </div>

      <Socials />
    </footer>
  );
};

export default Footer;
