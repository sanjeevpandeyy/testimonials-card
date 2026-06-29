import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";

const Testimonial = ({ reviews }) => {

  const [index, setIndex] = useState(0);

  function negativeHandler() {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  }

  function positiveHandler() {
    setIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  }

  function randomHandler() {
    let random = Math.floor(Math.random() * reviews.length);

    while (random === index) {
      random = Math.floor(Math.random() * reviews.length);
    }

    setIndex(random);
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-[650px] flex flex-col">

      <Card reviews={reviews[index]} />

      <div className="mt-auto">

        <div className="flex justify-center gap-6">

          <button
            onClick={negativeHandler}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FiChevronLeft size={28} />
          </button>

          <button
            onClick={positiveHandler}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <FiChevronRight size={28} />
          </button>

        </div>

        <div className="flex justify-center mt-6">

          <button
            onClick={randomHandler}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Surprise Me
          </button>

        </div>

      </div>

    </div>
  );
};

export default Testimonial;