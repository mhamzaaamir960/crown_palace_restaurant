import React from "react";
import FooterMetaData from "./FooterMetaData";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="w-full min-h-[35vh] flex flex-col gap-y-6 items-center bg-primary border-t-4 border-t-secondary p-4 min-w-[300px]">
      <div className="flex flex-wrap justify-start  xl:justify-around items-start w-full mb-10 gap-x-8">
        <FooterMetaData />
        <FooterLinks />
        <SocialLinks />
      </div>

      <div className="flex flex-col justify-center w-full items-center border-t-2 border-secondary pt-4 ">
        <p className="text-gray-300">© 2024 Crown Palace - The Tasty House</p>
        <p className="text-gray-300">All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
