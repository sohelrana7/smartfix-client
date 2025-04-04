import { Link } from "react-router-dom";

const Slide = ({ image, heading, subHeading }) => {
  return (
    <div className="hero min-h-screen bg-black bg-opacity-60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Right Side Image */}
        <div className="relative">
          <img
            src={image}
            className="max-w-lg h-80 rounded-lg shadow-2xl"
            alt="Electrician"
          />
          {/* Lightning Bolt Shape */}
        </div>

        {/* Left Side Text */}
        <div className="text-left max-w-lg">
          <p className="text-[#f5580b] font-semibold text-sm uppercase">
            ⚡ Welcome to Smartfix ⚡
          </p>
          <h1 className="text-5xl font-bold leading-tight text-white">
            {heading}
          </h1>
          <p className="py-6 text-gray-300">{subHeading}</p>
          <button className="btn bg-[#f5580b] border-none text-white flex items-center">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
