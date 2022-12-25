import React, { useContext, useEffect, useState, useRef } from "react";

// import components
import NavMobile from "./NavMobile";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import links
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

// import logo
import Logo from "../assets/logo.png";

// import icons
import { BsBag } from "react-icons/bs";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // get state & handlers from sidebar context
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  // get cart context
  const { itemAmount } = useContext(CartContext);

  // page scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // mobile nav ref
  const btnRef = useRef();

  // click outside to close mobile menu
  useEffect(() => {
    let handler = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setNavMobile(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all duration-300 select-none`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* burger icon: mobile - show | desktop - hidden */}
        <button
          className="lg:hidden z-[15]"
          onClick={() => setNavMobile((prev) => !prev)}
        >
          {navMobile ? (
            <div className="text-3xl text-black">
              <IoCloseOutline />
            </div>
          ) : (
            <div className="text-3xl text-black">
              <IoMenuOutline />
            </div>
          )}
        </button>

        {/* nav mobile: mobile - toggle(show/hidden) | desktop - hidden */}
        <div
          className={`${
            navMobile ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vw] md:w-[45vw] transition-all lg:hidden`}
          ref={btnRef}
        >
          <NavMobile click={() => setNavMobile(!navMobile)} />
        </div>

        {/* logo */}
        <Link to={"/#home"}>
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-[40px]" />{" "}
            <span className="font-logo font-bold text-xl lg:text-3xl text-accent">
              React Ecommerce
            </span>
          </div>
        </Link>

        {/* navigation & cart icon */}
        <div className="flex flex-row gap-x-4">
          {/* nav: mobile - hidden | desktop - show */}
          <ul className="hidden lg:flex gap-x-4 text-black lg:text-lg">
            <li className="hover:text-accent transition duration-300">
              <Link to={"/#home"}>Home</Link>
            </li>
            <li className="hover:text-accent transition duration-300">
              <NavLink to="login">Login</NavLink>
            </li>
          </ul>

          {/* cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl text-black" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] text-white rounded-full flex items-center justify-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
