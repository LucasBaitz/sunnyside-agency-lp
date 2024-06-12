import { SocialMidiaIcons } from "@/components/SocialMidiaIcons/SocialMidiaIcons";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials: React.FC = () => {
  return (
    <div>
      <ul className="flex gap-7">
        <li>
          <Link className="hover:fill-white" href={"https://facebook.com"}>
            <SocialMidiaIcons.facebook className="hover:fill-white" />
          </Link>
        </li>
        <li>
          <Link className="hover:fill-white" href={"https://instagram.com"}>
            <SocialMidiaIcons.instagram className="hover:fill-white" />
          </Link>
        </li>
        <li>
          <Link className="hover:fill-white" href={"https://twitter.com"}>
            <SocialMidiaIcons.twitter className="hover:fill-white" />
          </Link>
        </li>
        <li>
          <Link className="hover:fill-white" href={"https://pinterest.com"}>
            <SocialMidiaIcons.pinterest className="hover:fill-white" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
