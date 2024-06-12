import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
        <Image
          src="/images/desktop/image-gallery-milkbottles.jpg"
          alt="Milkbottles"
          className="w-full"
          width={500}
          height={500}
        />
        <Image
          src="/images/desktop/image-gallery-orange.jpg"
          alt="Orange"
          className="w-full"
          width={500}
          height={500}
        />
        <Image
          src="/images/desktop/image-gallery-cone.jpg"
          alt="Icecream cone"
          className="w-full"
          width={500}
          height={500}
        />
        <Image
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          alt="Sugar Cubes"
          className="w-full"
          width={500}
          height={500}
        />
      
    </div>
  );
};

export default Gallery;
