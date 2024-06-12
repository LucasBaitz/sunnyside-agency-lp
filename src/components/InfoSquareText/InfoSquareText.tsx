import Image from "next/image";
import React from "react";

interface InfoSquareTextProps {
  image: string;
  title: string;
  description: string;
  className: string;
}

const InfoSquareText: React.FC<InfoSquareTextProps> = ({
  image,
  title,
  description,
  className,
}) => {
  return (
    <div className="relative">
      <Image
        src={`/images/desktop/${image}`}
        alt=""
        width={2000}
        height={2000}
        className="object-cover"
      />
      <div className="absolute bottom-6 md:bottom-0 w-full text-center md:p-28 mt-10">
        <h2 className={`font-bold text-xl md:text-3xl text-white mb-3 ${className}`}>
          {title}
        </h2>
        <p className={`text-white text-center text-sm md:text-md px-5 ${className} `}>{description}</p>
      </div>
    </div>
  );
};

export default InfoSquareText;
