/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton"; // Import Skeleton for loading state
import BookCard from "../components/BookCard"; // Import the BookCard component
import bookcover from '../assets/images/bookcover.jpg'; // Import the book cover image
import InfiniteScroll from "react-infinite-scroll-component"; // Import InfiniteScroll

// Sample Categories Data
const categories = ["Fiction", "Non-Fiction", "Mystery", "Biography", "Sci-Fi", "Fantasy"];

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          const newBooks = [
            { title: "The Great Gatsby", category: "Fiction", author: "F. Scott Fitzgerald", image: bookcover },
            { title: "1984", category: "Dystopian", author: "George Orwell", image: bookcover },
            { title: "Moby Dick", category: "Adventure", author: "Herman Melville", image: bookcover },
          ];
          setBooks((prevBooks) => [...prevBooks, ...newBooks]);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError("Failed to load books. Please try again.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newBooks = [
        { title: "The Great Gatsby", category: "Fiction", author: "F. Scott Fitzgerald", image: bookcover },
        { title: "1984", category: "Dystopian", author: "George Orwell", image: bookcover },
        { title: "Moby Dick", category: "Adventure", author: "Herman Melville", image: bookcover },
      ];
      if (newBooks.length === 0) {
        setHasMore(false);
      }
      setBooks((prevBooks) => [...prevBooks, ...newBooks]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Space */}
      {/* <div className="hidden md:block w-64" /> */}

      {/* Main Content */}
      <div className="flex-1 ml-4 ">
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Browse Categories</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/category/${category}`}
                  className="bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-primary-light transition duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-12">Available Books</h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <InfiniteScroll
              dataLength={books.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<Skeleton count={6} />}
              endMessage={<p className="text-center text-gray-500">No more books to display</p>}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                {loading
                  ? Array(6)
                      .fill()
                      .map((_, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                          <Skeleton height={200} width="100%" />
                          <Skeleton height={30} width="60%" />
                          <Skeleton height={20} width="40%" />
                        </div>
                      ))
                  : books.map((book, index) => (
                      <BookCard
                        key={index}
                        title={book.title}
                        author={book.author}
                        image={book.image}
                      />
                    ))}
              </div>
            </InfiniteScroll>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
