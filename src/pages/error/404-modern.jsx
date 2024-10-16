import ErrorImage from "../../images/gfx/error-404.svg";
import { Link } from "react-router-dom";

const Error404Modern = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="  w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="text-center">
          <img
            className="  mx-auto object-contain"
            src={ErrorImage}
            alt="error"
          />
          <h3 className="text-4xl font-bold mt-6 mb-4 text-gray-800 dark:text-gray-200">
            Oops! Why are you here?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We are very sorry for the inconvenience. It looks like you’re trying
            to access a page that either has been deleted or never existed.
          </p>
          <Link to={`/`}>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition duration-200">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Modern;
