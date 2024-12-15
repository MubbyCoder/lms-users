/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ title, author, image }) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3d w-full sm:w-56 md:w-64 lg:w-72">
      {/* Book Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-3" />

      {/* Book Title */}
      <h4 className="text-lg font-semibold text-gray-800 truncate">{title}</h4>

      {/* Author Name */}
      <p className="text-gray-600 text-xs">{author}</p>

      {/* Action Buttons */}
      <div className="mt-3 flex flex-col items-center">
        <Link
          to={`/book/${title}`}
          className="text-primary mb-2 inline-block font-semibold hover:underline transition duration-300"
        >
          View Details
        </Link>

        {/* Borrow Button */}
        <button
          className="bg-primary text-white py-1 px-3 rounded-lg hover:bg-primary-light transition duration-300 w-full"
        >
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookCard;
