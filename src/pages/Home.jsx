/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton"; // Import Skeleton for loading state

// Sample Books and Categories Data
const categories = ["Fiction", "Non-Fiction", "Mystery", "Biography", "Sci-Fi", "Fantasy"];

const Home = () => {
    // Simulate loading state
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setBooks([
                { title: "The Great Gatsby", category: "Fiction", author: "F. Scott Fitzgerald", image: "https://via.placeholder.com/150" },
                { title: "1984", category: "Dystopian", author: "George Orwell", image: "https://via.placeholder.com/150" },
                { title: "Moby Dick", category: "Adventure", author: "Herman Melville", image: "https://via.placeholder.com/150" },
                // More books
            ]);
            setLoading(false);
        }, 2000); // Simulate a 2-second loading time
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
          

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto text-center">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-6">Browse Categories</h4>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {categories.map((category, index) => (
                            <Link key={index} to={`/category/${category}`} className="bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-primary-light transition duration-300">
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Books Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h3 className="text-4xl font-bold text-gray-800 mb-12">Available Books</h3>

                    {/* Books Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {loading ? (
                            // Skeleton loading when data is loading
                            Array(6).fill().map((_, index) => (
                                <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition duration-300">
                                    <Skeleton height={200} width="100%" className="mb-4" />
                                    <Skeleton height={30} width="60%" className="mb-2" />
                                    <Skeleton height={20} width="40%" />
                                </div>
                            ))
                        ) : (
                            // Book cards
                            books.map((book, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3d"
                                    whileHover={{ scale: 1.05, rotateY: 15 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{ perspective: '1000px' }}
                                >
                                    <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h4 className="text-xl font-bold text-gray-800">{book.title}</h4>
                                    <p className="text-gray-600">{book.author}</p>
                                    <p className="text-sm text-gray-500 mt-2">{book.category}</p>
                                    <Link
                                        to={`/book/${book.title}`}
                                        className="text-primary mt-4 inline-block font-semibold hover:underline transition duration-300"
                                    >
                                        View Details
                                    </Link>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default Home;
