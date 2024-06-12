import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="container flex justify-between align-middle items-center pt-10">
      <Logo />
      <MobileMenu />
      <div className="hidden md:flex">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
