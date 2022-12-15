import React, { useContext } from "react";

// import link
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import components
import CartItem from "../components/CartItem";

const Sidebar = () => {
  // get state & handlers from sidebar context
  const { isOpen, handleClose } = useContext(SidebarContext);

  // get cart
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[45vw] xl:max-w-[30vw] h-screen bg-white fixed top-0 shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] select-none`}
    >
      {/* sidebar header */}
      <div className="flex items-center justify-between border-b h-[10vh]">
        <div className="uppercase font-semibold text-sm">Shopping Bag (0)</div>

        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* cart list */}
      <div className="flex flex-col gap-y-2 h-[80vh] overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/* bottom */}
      <div className="flex h-[10vh]">
        <div className="flex w-full items-center justify-between">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-1">Total: </span>$ 1000
          </div>

          {/* clear icon */}
          <div
            className="cursor-pointer py-4 bg-red-500 transition duration-300 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center text-xl"
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
