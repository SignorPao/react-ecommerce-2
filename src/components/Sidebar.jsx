import React, { useContext, useRef, useEffect } from "react";

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
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);

  // get cart
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  // sidebar ref
  const btnRef = useRef();

  // click outside to close sidebar cart list
  useEffect(() => {
    let handler = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full md:w-[45vw] xl:max-w-[30vw] h-screen bg-white fixed top-0 shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] select-none flex flex-col`}
      ref={btnRef}
    >
      {/* sidebar header */}
      <div className="flex-shrink flex items-center justify-between py-4 border-b">
        <div className="uppercase font-semibold text-sm text-black">
          Shopping Bag ({itemAmount})
        </div>

        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl text-black" />
        </div>
      </div>

      {/* cart list */}
      <div className="flex-grow flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden px-2">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>

      {/* bottom */}
      <div className="flex-shrink flex flex-col py-4 gap-y-2 border-t">
        <div className="flex w-full items-center justify-between">
          {/* total */}
          <div className="uppercase font-semibold text-accent">
            <span className="mr-1 text-black">Total: </span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>

          {/* clear icon */}
          <div
            className="cursor-pointer py-4 bg-red-500 transition duration-300 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center text-xl"
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>

        {/* view cart */}
        <Link
          to={"/cart"}
          className="bg-white capitalize flex items-center justify-center p-2 text-primary border border-primary w-full font-medium"
          onClick={handleClose}
        >
          View cart
        </Link>

        {/* checkout */}
        <Link
          to={"/"}
          className="bg-primary capitalize flex items-center justify-center p-2 text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
