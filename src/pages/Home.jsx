import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import { FaStar, FaRegStar } from "react-icons/fa"; // Star icons

const Home = () => {
  const [isSidebarOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5017/api/v1/books");
        setBooks(response.data?.data?.books || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error("Failed to fetch books.");
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5017/api/v1/reviews/all");
        const reviewsByBook = {};

        response.data?.data.forEach((review) => {
          if (!reviewsByBook[review.book._id]) {
            reviewsByBook[review.book._id] = [];
          }
          reviewsByBook[review.book._id].push(review);
        });

        setReviews(reviewsByBook);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Failed to fetch reviews.");
      }
    };

    fetchReviews();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a title to search.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5017/api/v1/books/search?title=${searchTerm}`
      );

      if (response.data.data.books.length === 0) {
        toast.info("No books found with the specified title.");
      }

      setBooks(response.data.data.books);
      toast.success("Search completed successfully.");
    } catch (error) {
      console.error("Error occurred while searching for books:", error);
      toast.error("Error occurred while searching for books.");
    }
  };

  const handleBorrowBook = async (id) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("User is not authenticated.");
        return;
      }

      const response = await axios.post(
        `http://localhost:5017/api/v1/Borrowedbooks/borrow/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const borrowedBook = response.data?.data?.borrowedBook;
      if (!borrowedBook) {
        console.error("API response does not include a valid borrowedBook object:", response.data);
        toast.error("Failed to update book status.");
        return;
      }

      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === id ? { ...book, isAvailable: false } : book
        )
      );

      toast.success("Book borrowed successfully!");
    } catch (error) {
      console.error("Error borrowing book:", error);
      toast.error(error.response?.data?.message || "Failed to borrow the book.");
    }
  };

  // Function to render the rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col ${isSidebarOpen ? "ml-64" : "ml-16"} transition-all duration-300 overflow-hidden md:ml-64 lg:ml-64`}
      >
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 shadow rounded-md space-y-4 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 text-center sm:text-left">
            Books Management
          </h1>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded text-gray-900 w-full sm:w-64"
            />
            <button
              onClick={handleSearch}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </header>

        {/* Book Grid */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={book.image || "https://via.placeholder.com/150"}
                  alt={book.title}
                  className="w-full h-48 sm:w-40 sm:h-48 object-cover rounded"
                />
                <h2 className="mt-2 text-xl font-semibold text-center text-yellow-400">
                  {book.title}
                </h2>
                <p className="text-sm text-center text-gray-300">
                  <span className="text-yellow-400">Author:</span> {book.author}
                </p>
                <p className="text-sm text-center text-gray-300">
                  <span className="text-yellow-400">Category:</span> {book.category}
                </p>
                <p className="text-sm text-center text-gray-300">
                  <span className="text-yellow-400">Pages:</span> {book.NumberOfPages}
                </p>
                <p className="text-sm text-center text-gray-300">
                  {book.isAvailable ? "Available" : "Unavailable"}
                </p>
                <div className="mt-4 flex gap-2">
                  {book.isAvailable && (
                    <button
                      onClick={() => handleBorrowBook(book._id)}
                      className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-400"
                    >
                      Borrow
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dotted Border */}
          <hr className="my-8 border-dotted border-gray-600" />

          {/* Reviews Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
              Reviews for Books
            </h2>
            {books.map((book) => (
              <div key={book._id} className="mb-12">
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  Reviews for {book.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {reviews[book._id]?.map((review) => (
                    <div
                      key={review._id}
                      className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col hover:bg-gray-600 transition-all duration-300"
                    >
                      <p className="text-lg font-semibold text-yellow-400 mb-2">
                        {review.user.firstname} {review.user.lastname}
                      </p>
                      <div className="flex gap-1 mb-2">
                        {renderStars(review.rating)} {/* Render star icons */}
                      </div>
                      <p className="text-sm text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
