import React, { useContext } from "react";

// import link
import { Link } from "react-router-dom";

// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  console.log(product);

  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <div>
      {/* image / buttons */}
      <div className="border border-gray-300 h-[300px] relative overflow-hidden transition group">
        {/* image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[200px] mx-auto flex items-center justify-center">
            <img
              src={image}
              alt="product"
              className="max-h-[160px] hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        {/* buttons */}
        <div className="absolute top-0 -right-12 group-hover:right-0 flex flex-col items-center justify-center gap-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex items-center justify-center text-white w-12 h-12 bg-blue-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            className="h-12 w-12 bg-white flex items-center justify-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* category / title / price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold text-blue-500">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
