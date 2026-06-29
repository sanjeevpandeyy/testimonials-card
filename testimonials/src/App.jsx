import Testimonial from "./components/Testimonial";
import reviews from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-slate-100 to-gray-200 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">
            Our Testimonials
          </h1>

          <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>

          <p className="mt-5 text-gray-600 text-lg">
            Hear what our students and professionals have to say about us.
          </p>
        </div>

        {/* Testimonial Card */}
        <Testimonial reviews={reviews} />

      </div>
    </div>
  );
}

export default App;

