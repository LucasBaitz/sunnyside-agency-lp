import { ClientTestimony } from "@/Interfaces/ClientTestimony";
import Image from "next/image";
import React from "react";

interface TestimonyProps {
  testimony: ClientTestimony;
}

const Testimony: React.FC<TestimonyProps> = ({ testimony }) => {
  return (
    <div className="bg-inherit flex flex-col align-middle items-center justify-center md:gap-y-10 p-2">
      <Image
        src={testimony.picture}
        alt={`${testimony.name}s profile picture`}
        width={75}
        height={75}
        className="rounded-full"
      />
      <p className="text-center font-normal text-gray-600 p-5">{testimony.testimony}</p>
      <div className="flex flex-col items-center justify-center gap-3">
        <h3 className="text-primary-dark text-lg font-extrabold">{testimony.name}</h3>
        <p className="text-gray-400 text-sm">{testimony.occupation}</p>
      </div>
    </div>
  );
};

export default Testimony;
