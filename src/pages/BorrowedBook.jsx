import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Sidebar from "../components/sidebar";
import { FaStar } from "react-icons/fa";

const BorrowedBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [review, setReview] = useState({ rating: 0, comment: "" });

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("User is not authenticated.");
          return;
        }
        const response = await axios.get(
          "http://localhost:5017/api/v1/Borrowedbooks/borrowed",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBorrowedBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
        toast.error("Failed to fetch borrowed books.");
      }
    };

    fetchBorrowedBooks();
  }, []);

  const handleReturn = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User is not authenticated.");
        return;
      }
      await axios.post(
        `http://localhost:5017/api/v1/Borrowedbooks/return/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBorrowedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === id ? { ...book, status: "returned" } : book
        )
      );
      toast.success("Book returned successfully.");
    } catch (error) {
      console.error("Error returning book:", error);
      toast.error("Failed to return the book.");
    }
  };

  const handleAddReview = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setReview({ rating: 0, comment: "" });
  };

  const handleStarClick = (rating) => {
    setReview({ ...review, rating });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("User is not authenticated.");
        return;
      }

      await axios.post(
        `http://localhost:5017/api/v1/reviews/${selectedBook.book._id}`,
        review,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Review added successfully.");
      handleModalClose();
    } catch (error) {
      console.error("Error adding review:", error);
      toast.error("Failed to add review.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 md:ml-64 lg:ml-64">
        {/* Header */}
        <header className="bg-gray-800 p-4 shadow rounded-md mb-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:space-x-4">
            <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 sm:text-left text-center">
              Borrowed Books
            </h1>
          </div>
        </header>

        {/* Book Grid */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {borrowedBooks.map((book) => (
              <div
                key={book._id}
                className="bg-gray-800 p-4 rounded shadow-lg flex flex-col items-center"
              >
                <img
                  src={book.book.image || "https://via.placeholder.com/150"}
                  alt={book.book.title}
                  className="w-full max-w-[200px] h-auto object-cover rounded"
                />
                <h2 className="mt-2 text-lg font-bold text-center">
                  <span className="text-yellow-400">Title: </span>
                  {book.book.title}
                </h2>
                <p className="text-md text-center">
                  <span className="text-yellow-400">Author: </span>
                  {book.book.author}
                </p>
                <p className="text-md text-center">
                  <span className="text-yellow-400">Category: </span>
                  {book.book.category}
                </p>
                <p className="text-md text-center">
                  <span className="text-yellow-400">Borrowed Date: </span>
                  {new Date(book.borrowDate).toLocaleDateString()}
                </p>
                <p className="text-md text-center">
                  <span className="text-yellow-400">Return Date: </span>
                  {new Date(book.returnDate).toLocaleDateString()}
                </p>
                <p className="text-md text-center">
                  <span className="text-yellow-400">Status: </span>
                  {book.status === "borrowed" ? "Borrowed" : "Returned"}
                </p>
                <div className="mt-4 flex gap-2">
                  {book.status === "borrowed" && (
                    <>
                      <button
                        onClick={() => handleReturn(book._id)}
                        className="bg-yellow-400 px-4 py-2 rounded text-gray-900 hover:bg-yellow-500"
                      >
                        Return
                      </button>
                      <button
                        onClick={() => handleAddReview(book)}
                        className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
                      >
                        Add Review
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Adding Review */}
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={handleModalClose}
          className="bg-gray-800 p-6 rounded shadow-xl w-4/5 md:w-1/3 mx-auto mt-20 text-white"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-xl font-bold mb-4">
            Add Review for {selectedBook.book.title}
          </h2>
          <form onSubmit={handleReviewSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Rating:</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    onClick={() => handleStarClick(star)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Comment:</label>
              <textarea
                value={review.comment}
                onChange={(e) =>
                  setReview({ ...review, comment: e.target.value })
                }
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleModalClose}
                className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-yellow-400 px-4 py-2 rounded text-gray-900 hover:bg-yellow-500"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default BorrowedBook;
