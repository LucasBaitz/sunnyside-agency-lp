import { ClientTestimony } from "@/Interfaces/ClientTestimony";
import React from "react";
import Testimony from "./Testimony/Testimony";

interface TestimonialsProps {
  testimonials: ClientTestimony[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="testimonials py-10 md:p-24">
      <h2 className="uppercase text-lg md:text-2xl font-bold text-center testimonials-title mb-12">
        Client Testimonials
      </h2>
      <div className="flex flex-col md:flex-row align-middle justify-center items-center gap-y-10 p-10">
        {testimonials.map((t) => (
          <Testimony key={t.name} testimony={t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
