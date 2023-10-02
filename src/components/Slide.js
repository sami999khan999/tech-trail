import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slideTexts container mx-auto flex flex-col items-start justify-center h-full gap-5">
        <h1 className="text-7xl text-violet-50 font-semibold uppercase utlity-font w-3/4">
          {image.headline}
        </h1>
        <p className=" text-violet-50 w-3/5">{image.body}</p>
        <Link className="uppercase font-semibold border-2 text-orange-50 py-3 px-8 mt-5 hover:bg-violet-900 hover:text-violet-50 hover:border-violet-50 duration-300">
          {image.cta}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
