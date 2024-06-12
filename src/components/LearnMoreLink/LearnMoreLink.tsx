import Link from "next/link";
import React from "react";

interface LearnModeLinkProps {
  variant?: "red" | "yellow";
}

const LearnMoreLink: React.FC<LearnModeLinkProps> = ({ variant = "red" }) => {
  const variants = {
    red: "border-red-300 hover:border-red-800",
    yellow: "border-yellow-300 hover:border-yellow-800",
  };

  return (
    <Link
      href="/"
      className={`relative flex flex-col font-bold text-primary-dark uppercase rounded-full`}
    >
      Learn More
      <span
        className={`rounded-full absolute -bottom-0 ${variants[variant]} border-[5px] opacity-60 w-full`}
      ></span>
    </Link>
  );
};

export default LearnMoreLink;
