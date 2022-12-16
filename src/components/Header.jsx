import React, { useContext, useEffect, useState } from "react";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/logo.png";

// import icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // get state & handlers from sidebar context
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // get cart context
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all duration-300 select-none`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-[40px]" />{" "}
            <span className="font-logo font-bold text-xl lg:text-3xl text-accent">
              React Ecommerce
            </span>
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] text-white rounded-full flex items-center justify-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
