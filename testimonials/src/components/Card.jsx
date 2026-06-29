import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ reviews }) => {

  return (

    <div className="flex flex-col items-center flex-grow">

      <div className="relative">

        <img
          src={reviews.image}
          alt={reviews.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-indigo-600 shadow-xl"
        />

        <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-indigo-600 flex justify-center items-center text-white">
          <FaQuoteLeft />
        </div>

      </div>

      <h2 className="text-3xl font-bold mt-6 text-gray-800 text-center">
        {reviews.name}
      </h2>

      <p className="uppercase text-indigo-500 font-semibold tracking-widest mt-2">
        {reviews.job}
      </p>

      <FaQuoteLeft className="text-indigo-500 text-3xl mt-6" />

      {/* Fixed height */}
      <p className="text-center text-gray-600 leading-8 mt-5 h-40 overflow-hidden px-4">
        {reviews.text}
      </p>

      <FaQuoteRight className="text-indigo-500 text-3xl mt-5" />

    </div>

  );
};

export default Card;