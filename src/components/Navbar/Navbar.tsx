import Link from "next/link";
import React from "react";

interface NavbarProps {
  variant?: "header" | "footer" | "mobile";
  orientation?: "vertical" | "horizontal";
}

const Navbar: React.FC<NavbarProps> = ({
  variant = "header",
  orientation = "horizontal",
}) => {
  const variants = {
    header: "text-white text-xl",
    footer: "footer-text hover:text-white text-center text-xl ",
    mobile: "text-gray-500 text-center w-full text-xl",
  };

  const contactVariant = {
    header: "text-md bg-white text-black rounded-full py-4 px-8 uppercase hover:bg-opacity-40 hover:text-white",
    footer: "",
    mobile:
      "bg-[#FCD901] rounded-full p-4 text-black text-center max-w-[150px] text-xl font-bold",
  };

  return (
    <ul
      className={`flex align-middle items-center ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      } gap-10`}
    >
      <li className={variants[variant]}>
        <Link href="/" className={variants[variant]}>
          About
        </Link>
      </li>
      <li className={variants[variant]}>
        <Link href="/" className={variants[variant]}>
          Services
        </Link>
      </li>
      <li className={variants[variant]}>
        <Link href="/" className={variants[variant]}>
          Projects
        </Link>
      </li>
      {variant !== "footer" && (
        <li className="flex items-center justify-center">
          <Link href="/" className={`${contactVariant[variant]} font-bold`} >
            Contact
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
