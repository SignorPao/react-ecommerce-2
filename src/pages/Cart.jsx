import React, { useContext } from "react";

// import link
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// import icons
import { BsCart3 } from "react-icons/bs";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  // get cart
  const { cart, itemAmount, total } = useContext(CartContext);

  // get cart context
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <section className="pt-40 pb-12 lg:py-32 min-h-screen select-none">
      {itemAmount ? (
        // cart page
        <div className="container mx-auto">
          {/* cart header */}
          <div className="flex items-center justify-between capitalize">
            <h3 className="text-3xl font-medium">Your cart</h3>
            <Link to={"/#products"}>
              <span className="text-base hover:text-accent transition duration-300">
                Continue shopping
              </span>
            </Link>
          </div>

          {/* cart items table */}
          <table className="table-fixed min-w-full mt-8">
            <thead className="border-b-[0.5px] border-black/20">
              <tr className="">
                <th className="w-[60%] text-left py-4 uppercase font-extralight text-xs">
                  Product
                </th>
                <th className="w-[10%] text-center py-4 uppercase font-extralight text-xs">
                  Price
                </th>
                <th className="w-[20%] text-center py-4 uppercase font-extralight text-xs">
                  Quantity
                </th>
                <th className="w-[10%] text-right py-4 uppercase font-extralight text-xs">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // destructure item
                const { id, title, image, price, amount } = item;

                return (
                  <tr key={id} className="border-b-[0.5px] border-black/20">
                    {/* image & title */}
                    <td className="text-left py-8 flex gap-x-12">
                      {/* image */}
                      <Link to={`/product/${id}`}>
                        <img
                          src={image}
                          alt="product"
                          className="max-w-[60px]"
                        />
                      </Link>

                      {/* title & remove icon */}
                      <div className="w-full flex flex-col gap-y-2">
                        <Link
                          to={`/product/${id}`}
                          className="w-fit text-sm uppercase font-medium text-black hover:underline"
                        >
                          {title}
                        </Link>

                        <div
                          className="w-fit text-xl cursor-pointer"
                          onClick={() => removeFromCart(id)}
                        >
                          <button className="text-[10px] uppercase py-[1px] px-4 text-black/50 hover:text-black bg-gray-100 hover:bg-red-300 transition duration-300">
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* price */}
                    <td className="max-w-[10%] text-center py-8">
                      <div className="flex-1 flex items-center justify-around text-accent">
                        $ {price}
                      </div>
                    </td>

                    {/* quantity */}
                    <td className="max-w-[20%] py-8">
                      <div className="flex max-w-[150px] mx-auto items-center justify-center h-full border text-black font-medium py-4">
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
                    </td>

                    {/* final price */}
                    <td className="max-w-[10%] text-right py-8">
                      <div className="flex-1 flex justify-end items-center font-semibold text-accent">{`$ ${parseFloat(
                        price * amount
                      ).toFixed(2)}`}</div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* cart bottom */}
          <div className="flex justify-between pt-8 gap-x-10">
            {/* order notes */}
            <div className="flex-1 flex flex-col">
              <span className="text-xs">Order notes:</span>
              <textarea
                className="border focus:outline-none p-4"
                cols="30"
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* total & shipping */}
            <div className="flex-1 flex flex-col items-end gap-y-8">
              {/* total */}
              <div className="flex flex-col items-end">
                <div className="uppercase font-semibold text-accent text-xl">
                  <span className="mr-1 text-black text-base font-medium">
                    Subtotal:{" "}
                  </span>
                  $ {parseFloat(total).toFixed(2)}
                </div>

                {/* taxes */}
                <p className="text-xs text-black/60">
                  Shipping & taxes calculated at checkout
                </p>
              </div>

              {/* checkout */}
              <Link
                to={"#!"}
                className="bg-primary max-w-[350px] capitalize flex items-center justify-center p-2 text-white w-full font-medium"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // empty cart page
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-16 capitalize">
          <p className="text-xl">Your cart is empty</p>
          <Link to={"/#products"}>
            <button className="flex flex-col items-center justify-center gap-y-6 group">
              <div className="text-5xl p-16 shadow-lg rounded-full text-black/50 group-hover:text-black transition duration-300 group-hover:shadow-xl">
                <BsCart3 />
              </div>
              <span className="text-base group-hover:text-accent transition duration-300 capitalize">
                Continue shopping
              </span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
