import React, { useContext } from "react";

// import link
import { Link } from "react-router-dom";

// import icons
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

// import cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item;

  // get cart context
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 select-none">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} alt="product" className="max-w-[80px]" />
        </Link>

        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[210px] text-black hover:underline"
            >
              {title}
            </Link>

            {/* remove icon */}
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>

          {/* quantity & price */}
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              {/* minus */}
              <div
                className="flex-1 h-full flex items-center justify-center cursor-pointer active:scale-125 hover:text-red-500"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>

              {/* amount */}
              <div className="h-full flex items-center justify-center px-2">
                {amount}
              </div>

              {/* plus */}
              <div
                className="flex-1 h-full flex items-center justify-center cursor-pointer active:scale-125 hover:text-green-500"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>

            {/* item price */}
            <div className="flex-1 flex items-center justify-around text-accent">
              $ {price}
            </div>

            {/* item final price */}
            <div className="flex-1 flex justify-end items-center font-semibold text-accent">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
