import { useState } from "react";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar Section */}
      <div className="w-64 bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-grow flex flex-col px-4 md:px-8 max-w-screen mx-auto">
        {/* Blog Header */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 my-8">
          Welcome to Our Blog
        </h1>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-5xl">
          {/* Blog Post 1 */}
          <article className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[250px]">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
              5 Tips for Better Reading Habits
            </h2>
            <p className="text-gray-700 mb-4">
              Discover how you can enhance your reading habits to gain more knowledge, retain more information, and enjoy the experience even more.
            </p>
            <button
              onClick={() => togglePost(1)}
              className="text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              {expandedPost === 1 ? "Show Less" : "Read More →"}
            </button>
            <div
              className={`mt-4 text-gray-600 transition-all duration-300 ${
                expandedPost === 1 ? "max-h-96 overflow-y-auto" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                Reading regularly can improve your focus and memory. Try setting aside time each day to read, start with shorter books, and work your way up. Explore different genres and authors to broaden your horizons. Here are a few additional tips that can help you get started...
              </p>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[250px]">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
              The Evolution of Libraries in the Digital Age
            </h2>
            <p className="text-gray-700 mb-4">
              Libraries have undergone a massive transformation in the digital age. Explore the modern role of libraries and how they continue to thrive.
            </p>
            <button
              onClick={() => togglePost(2)}
              className="text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              {expandedPost === 2 ? "Show Less" : "Read More →"}
            </button>
            <div
              className={`mt-4 text-gray-600 transition-all duration-300 ${
                expandedPost === 2 ? "max-h-96 overflow-y-auto" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                Digital libraries have become an essential resource for students, researchers, and book lovers alike. The ability to access thousands of books, journals, and research papers from anywhere in the world has revolutionized how we access information. Libraries now offer digital memberships, ebooks, and even virtual events to connect readers...
              </p>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[250px]">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-500">
              Must-Read Books of the Year
            </h2>
            <p className="text-gray-700 mb-4">
              Check out our curated list of must-read books that will inspire, educate, and entertain you this year.
            </p>
            <button
              onClick={() => togglePost(3)}
              className="text-yellow-500 hover:text-yellow-400 transition duration-300"
            >
              {expandedPost === 3 ? "Show Less" : "Read More →"}
            </button>
            <div
              className={`mt-4 text-gray-600 transition-all duration-300 ${
                expandedPost === 3 ? "max-h-96 overflow-y-auto" : "max-h-0 overflow-hidden"
              }`}
            >
              <p>
                Every year, we see a flood of new books being released. However, some books stand out due to their engaging stories, thought-provoking messages, and overall impact. Here are a few books that are sure to captivate your attention this year, ranging from fiction to non-fiction. Don&apos;t miss out on these must-reads!
              </p>
            </div>
          </article>
        </div>

        {/* Footer */}
        <div className="mt-48 border-t border-gray-800">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
