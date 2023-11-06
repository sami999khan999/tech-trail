import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const addToCartHandeler = (id) => {
    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl">
      <div className="img ">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="catagory-tap uppercase text-xs font-semibold tracking-widest text-orange-600">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-600 h-[6rem]">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl text-rose-500 font-medium">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandeler(product.id)}
            className="uppercase text-violet-50 bg-violet-500 font-medium py-3 px-8 rounded-md hover:bg-orange-500 hover:text-orange-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-lg hover:shadow-orange-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
