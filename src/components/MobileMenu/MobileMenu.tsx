"use client";
import React from "react";
import { SocialMidiaIcons } from "../SocialMidiaIcons/SocialMidiaIcons";
import Navbar from "../Navbar/Navbar";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";

const MobileMenu: React.FC = () => {
  return (
    <div className="relative flex md:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <SocialMidiaIcons.hamburger />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[150px] bg-[#FFFBF8]">
          <Navbar orientation="vertical" variant="mobile" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileMenu;
