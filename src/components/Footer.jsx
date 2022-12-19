import React from "react";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-4 lg:justify-between text-xs">
        <div className="text-center lg:text-left">
          &copy; {year} React Ecommerce
        </div>
        <div className="flex flex-row items-center justify-center text-[10px]">
          <a href="#!" className="border-solid border-white/80 border-r-[1px] px-2 hover:text-white transition duration-300">Privacy & Cookies</a>
          <a href="#!" className="border-solid border-white/80 border-r-[1px] px-2 hover:text-white transition duration-300">FAQs</a>
          <a href="#!" className="px-2 border-white/80 hover:text-white transition duration-300">Accessibility</a>
        </div>
        <div className="text-center lg:text-left">
          Created by{" "}
          <a
            href="https://github.com/SignorPao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            @signorPao
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
