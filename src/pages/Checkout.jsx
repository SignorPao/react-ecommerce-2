import React, { useContext } from "react";

// import link
import { HashLink as Link } from "react-router-hash-link";

// import icons
import { BsCart3, BsChevronLeft } from "react-icons/bs";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import button icons
import Gpay from "../assets/gpay.png";
import Paypal from "../assets/ppal.png";
import Applepay from "../assets/apay.png";

const Checkout = () => {
  // get cart
  const { itemAmount, cart, total } = useContext(CartContext);

  return (
    <section className="pt-28 lg:pt-40 pb-12 lg:py-32 min-h-screen overflow-hidden flex items-center justify-center">
      {itemAmount ? (
        <div className="container mx-auto flex flex-col gap-y-20 lg:flex-row lg:gap-x-16">
          {/* payment */}
          <div className="flex flex-col lg:w-3/5 order-2 lg:order-1">
            
            {/* checkout header */}
            <div className="mb-6">
              <h3 className="text-xl text-center lg:text-left lg:text-3xl font-medium">
                Payment
              </h3>
            </div>

            {/* express checkout */}
            <div className="mb-4 flex flex-col justify-center items-center gap-y-4">
              <p className="capitalize text-sm font-light">Express checkout</p>
              <div className="flex flex-row gap-x-1 w-full">
                <button className="bg-black rounded-sm w-full flex items-center justify-center p-1 opacity-90 hover:opacity-100 transition duration-300">
                  <img src={Gpay} alt="google pay button" className="w-12" />
                </button>
                <button className="bg-yellow-300 rounded-sm w-full flex items-center justify-center p-1 opacity-90 hover:opacity-100 transition duration-300">
                  <img src={Paypal} alt="paypal button" className="w-20" />
                </button>
                <button className="bg-black rounded-sm w-full flex items-center justify-center p-1 opacity-90 hover:opacity-100 transition duration-300">
                  <img src={Applepay} alt="apple pay button" className="w-14" />
                </button>
              </div>
              <p className="uppercase text-sm font-extralight">Or</p>
            </div>

            {/* contact info or log in */}
            <div className="flex items-center justify-between mb-4 lg:mb-8">
              <h4 className="font-light text-base lg:text-lg">
                Contact information
              </h4>
              <p className="text-xs lg:text-sm font-light">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="font-medium hover:text-accent transition duration-300">
                    Log in
                  </span>
                </Link>
              </p>
            </div>

            {/* info & address */}
            <form className="w-full mx-auto">
              {/* fname & lname */}
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm lg:text-sm focus:outline-none"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm lg:text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* email */}
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Email"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    name="Last Name"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm lg:text-sm focus:outline-none focus:invalid:text-red-500"
                  />
                </div>
              </div>

              {/* address */}
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Address"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded-sm lg:text-sm focus:outline-none"
                    name="Address"
                    cols={20}
                    rows={4}
                    placeholder="Address"
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* city & postcode */}
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="city"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm lg:text-sm focus:outline-none"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="postcode"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Post Code"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-sm lg:text-sm focus:outline-none"
                  />
                </div>
              </div>

              {/* save btn */}
              <div className="flex items-center my-8">
                <label className="flex items-center text-sm group text-heading">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded-sm focus:outline-none accent-primary"
                  />
                  <span className="ml-2 capitalize">
                    Save this information for next time
                  </span>
                </label>
              </div>

              {/* notes */}
              <div className="relative xl:pt-6">
                <label
                  htmlFor="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  {" "}
                  Notes (Optional)
                </label>
                <textarea
                  name="note"
                  className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded-sm focus:outline-none"
                  rows={4}
                  placeholder="Notes for delivery"
                  defaultValue={""}
                />
              </div>

              {/* return & continue */}
              <div className="mt-8 flex items-center justify-between">
                {/* return */}
                <Link
                  to={"/cart"}
                  className="flex gap-x-2 items-center text-sm hover:text-accent transition duration-300"
                >
                  <BsChevronLeft />
                  <span>Return to cart</span>
                </Link>

                {/* continue to shipping */}
                <div className="bg-primary max-w-[200px] lg:max-w-[350px] capitalize flex items-center justify-center p-2 text-white w-full font-medium cursor-pointer">
                  Continue to shipping
                </div>
              </div>
            </form>
          </div>

          {/* summary */}
          <div className="flex flex-col lg:w-2/5 order-1 lg:order-2">
            {/* summary header */}
            <div className="mb-6 border-b py-4">
              <h4 className="text-sm text-center lg:text-left lg:text-xl font-medium capitalize">
                Order Summary
              </h4>
            </div>

            {/* cart list */}
            <div className="flex flex-col gap-y-4">
              {cart.map((item) => {
                // destructure item
                const { id, title, image, price, amount } = item;

                return (
                  <div key={id} className="flex items-center justify-between">
                    {/* image & title */}
                    <div className="flex items-center gap-x-4">
                      <div className="relative">
                        <img
                          src={image}
                          alt="product"
                          className="max-w-[40px]"
                        />
                        <div className="bg-gray-400 absolute -right-2 -top-2 text-[12px] h-[20px] w-[20px] text-white rounded-full flex items-center justify-center">
                          {amount}
                        </div>
                      </div>
                      <p className="text-sm font-medium max-w-[200px] lg:max-w-[280px]">
                        {title}
                      </p>
                    </div>

                    {/* total price */}
                    <div className="flex-1 flex justify-end items-center font-semibold">{`$ ${parseFloat(
                      price * amount
                    ).toFixed(2)}`}</div>
                  </div>
                );
              })}
            </div>

            {/* summary bottom */}
            <div>
              <div className="flex py-4 mt-4">
                <h2 className="text-base font-bold">ITEMS: {itemAmount}</h2>
              </div>

              <div className="flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5">
                <span>Subtotal</span>
                <span className="ml-2">$ {parseFloat(total).toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5">
                <span>Shipping Tax</span>
                <span className="ml-2">Free</span>
              </div>

              <div className="flex items-center justify-between w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 last:border-b-0 last:pb-0">
                <span>Total</span>
                <span className="ml-2">$ {parseFloat(total).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // empty cart page
        <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 m-auto flex flex-col items-center justify-center gap-y-16 capitalize">
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

export default Checkout;
