import { useState } from "react";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { BsArrowLeft } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prvCount) => prvCount - 1);
  };

  const handleIncrease = () => {
    setCount((prvCount) => prvCount + 1);
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold utlity-font text-center mb-10">
        Yout Cart
      </h2>
      <div className="cart-container">
        <div className="product-headline grid grid-cols-5 gap-10 border-b uppercase font-medium pb-3">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">Totel Price</div>
        </div>
        <div className="products flex flex-col ">
          {data.map((product) => (
            <div className="prodcut grid grid-cols-5 gap-10 mt-10 border-b pb-5">
              <div className="left flex col-span-2 gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-32 object-cover"
                />
                <div className="details flex flex-col gap-3 items-start">
                  <span className="w-96">{product.name}</span>
                  <button className="uppercase  text-gray-400 hover:text-rose-500 duration-300">
                    Remove
                  </button>
                </div>
              </div>
              <div className="unit-price">
                {currencyFormatter(product.price)}
              </div>
              <div className="counter flex">
                <button
                  onClick={handleDecrease}
                  className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                >
                  +
                </button>
                <span className="h-10 w-10 bg-gray-100 border border-gray-300 flex justify-center items-center">
                  {count}
                </span>
                <button
                  onClick={handleIncrease}
                  className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                >
                  -
                </button>
              </div>
              <div className="total-price ml-auto">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between pt-10 items-start">
        <button className="clear-btn uppercase py-3 px-8 border hover:bg-rose-200 durationhover:text-rose-600 hover:border-rose-200 font-medium duration-200">
          Clear Cart
        </button>
        <div className="flex flex-col items-start gap-3">
          <div className="top flex w-full justify-between text-2xl font-medium">
            <span className="text-sky-500">Subtotal</span>
            <span className="text-rose-500">$200</span>
          </div>
          <p className="text-gray-400">
            Taxes ans shopping costs are calculated at the checkout
          </p>
          <button className="checkout bg-sky-500 text-sky-50 w-full py-3 uppercase font-medium tracking-widest hover:bg-sky-600 duration-300">
            Checkout
          </button>
          <button className="continue text-sky-500 uppercase font-medium tracking-wide flex items-center gap-2">
            <span className="text-2xl">
              <BsArrowLeft />
            </span>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
