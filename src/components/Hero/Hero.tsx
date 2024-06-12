import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: "url(images/desktop/image-header.jpg)" }}
    >
      <h1 className="text-5xl md:text-6xl tracking-widest text-white font-bold w-full text-center mt-36">
        WE ARE CREATIVES
      </h1>
      <Image
        src="/images/icon-arrow-down.svg"
        alt="arrow down"
        width={30}
        height={30}
        className="mt-32"
      />
    </section>
  );
};

export default Hero;
