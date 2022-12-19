import React, { useContext } from "react";

// import useParams
import { useParams } from "react-router-dom";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id
  const { id } = useParams();

  // get product context
  const { products } = useContext(ProductContext);

  // get cart context
  const { addToCart } = useContext(CartContext);

  // get the single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product isn't found
  if (!product) {
    return (
      <section className="h-screen flex items-center justify-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-40 pb-12 lg:py-32 min-h-screen flex items-center">
      <div className="container mx-auto h-full">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
            <img
              src={image}
              alt="product"
              className="max-w-[200px] lg:max-w-[300px]"
            />
          </div>

          {/* text */}
          <div className="flex-1 text-center lg:text-left text-black">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-accent font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8 max-w-[450px] mx-auto lg:mx-0">{description}</p>
            <button
              className="bg-primary py-4 px-8 text-white"
              onClick={() => addToCart(product, product.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
