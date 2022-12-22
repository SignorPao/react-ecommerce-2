import React from "react";

// import links
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const NavMobile = ({ click }) => {
  return (
    <div className="w-full h-full bg-white/90 shadow-2xl transition-all duration-300 z-10">
      <ul className="h-full flex flex-col items-center justify-center gap-y-8">
        <li className="hover:text-accent transition duration-300">
          {/* <NavLink to="/" end onClick={click}> */}
          <Link to={"/#home"} onClick={click}>
            Home
          </Link>
          {/* </NavLink> */}
        </li>
        {/* <li className="hover:text-accent transition duration-300">
          <NavLink to="/cart" onClick={click}>
            Cart
          </NavLink>
        </li> */}
        <li className="hover:text-accent transition duration-300">
          <NavLink to="login" onClick={click}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
