import { currencyFormatter } from "../utilities/currencyFormatter";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../features/products/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems: data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handelRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const clearCartHandeler = () => {
    dispatch(clearCart());
  };

  const decreaseCartHandeler = (product) => {
    dispatch(decreaseCart(product));
  };

  const increaseCarthandeler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold utlity-font text-center mb-10">
        {data.length > 0 ? "Your Cart" : "Cart is empty"}
      </h2>

      {data.length === 0 && (
        <div className="uppercase text-violet-500 font-medium text-center flex gap-2 items-center justify-center">
          <Link to="/products" className="text-xl">
            Start Shopping Now
          </Link>
          <span className="text-2xl">
            <BsArrowRight />
          </span>
        </div>
      )}

      {data.length > 0 && (
        <>
          <div className="cart-container">
            <div className="product-headline grid grid-cols-5 gap-10 border-b uppercase font-medium pb-3">
              <div className="col-product col-span-2">Product</div>
              <div className="col-unit-price">Unit Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Totel Price</div>
            </div>
            <div className="products flex flex-col ">
              {data?.map((product) => (
                <div className="prodcut grid grid-cols-5 gap-10 mt-10 border-b pb-5">
                  <div className="left flex col-span-2 gap-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w-32 object-cover"
                    />
                    <div className="details flex flex-col gap-3 items-start">
                      <span className="w-96">{product.name}</span>
                      <button
                        onClick={() => handelRemove(product)}
                        className="uppercase  text-gray-400 hover:text-rose-500 duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter flex">
                    <button
                      onClick={() => increaseCarthandeler(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                    <span className="h-10 w-10 bg-gray-100 border border-gray-300 flex justify-center items-center">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => decreaseCartHandeler(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                  </div>
                  <div className="total-price ml-auto">
                    {currencyFormatter(product.price * product.cartQuantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between pt-10 items-start">
            <button
              onClick={clearCartHandeler}
              className="clear-btn uppercase py-3 px-8 border hover:bg-rose-200 durationhover:text-rose-600 hover:border-rose-200 font-medium duration-200"
            >
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
              <Link
                to="/"
                className="checkout bg-sky-500 text-sky-50 w-full py-3 uppercase font-medium tracking-widest hover:bg-sky-600 duration-300 text-center"
              >
                Checkout
              </Link>
              <Link
                to="/products"
                className="continue  text-sky-500 uppercase font-medium tracking-wide flex items-center gap-2"
              >
                <span className="text-2xl">
                  <BsArrowLeft />
                </span>
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
