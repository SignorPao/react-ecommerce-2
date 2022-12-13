import React, { useContext } from "react";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  // get state & handlers from sidebar context
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <header className="bg-blue-500">
      <div>header</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
