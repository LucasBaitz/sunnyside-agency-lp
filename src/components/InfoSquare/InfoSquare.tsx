import React from "react";
import LearnMoreLink from "../LearnMoreLink/LearnMoreLink";

interface InfoSquareProps {
  title: string;
  description: string;
  variant?: "red" | "yellow";
}

const InfoSquare: React.FC<InfoSquareProps> = ({
  title,
  description,
  variant,
}) => {
  return (
    <div className="bg-[#FFFBF8] w-full md:w-1/2 flex flex-col justify-center align-middle items-center text-center md:text-start p-5 py-16 md:px-36 md:py-20 gap-10">
      <h2 className="text-3xl md:text-5xl text-primary-dark font-black">
        {title}
      </h2>
      <p className="text-base text-gray-500 font-medium">{description}</p>
      <div className="w-full flex items-start justify-center md:justify-start">
        <LearnMoreLink variant={variant} />
      </div>
    </div>
  );
};

export default InfoSquare;
