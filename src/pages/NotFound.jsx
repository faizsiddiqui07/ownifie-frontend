import { Link } from "react-router-dom";
import NotFoundImg from "../assets/images/404.webp";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 mt-12 mb-16">
      <div className="max-w-md sm:max-w-lg lg:max-w-xl">
        <img src={NotFoundImg} loading="lazy" className="w-full h-auto rounded-lg shadow-lg" alt="404 Not Found" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold mt-6 text-gray-800">Oops! Page Not Found</h1>
      <p className="text-gray-600 mt-2 text-lg">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 px-3 sm:px-6 py-2 sm:py-3 bg-[#d08e02] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#e1a703] transform hover:scale-105 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
