// import React from "react";
import Sidebar from "../components/SideBar.jsx";
import Footer from "../components/Footer";
import bookImage from "../assets/images/gettyimage.jpg";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className=" w-[full] h-[20%] border-2 border-gray-800 "></div>
      {/* Sidebar Section */}
      <div className="bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-col ml-20 md:ml-64">
        {/* First Section: Introductory Content */}
        <section className="py-12 px-6 md:py-16 md:px-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Book Image */}
            <div className="flex-shrink-0">
              <img
                src={bookImage}
                alt="Book"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Info About BookWorm Library */}
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome to{" "}
                <span className="italic text-yellow-400">BookWorm Library</span>
              </h1>
              <p className="text-lg leading-relaxed mb-6">
                BookWorm Library is your gateway to an extensive collection of
                books across all genres. Discover a world of knowledge,
                adventure, and inspiration with us. Whether you&apos;re a
                student, a casual reader, or a researcher, there&apos;s
                something for everyone here.
              </p>
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow hover:bg-yellow-300 transition-all duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </section>

        {/* Second Section: Why Choose Us */}
        <section className="border-t-2 border-dotted py-12 px-6 md:py-16 md:px-12">
          <div className="container mx-auto text-center pt-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose{" "}
              <span className="italic text-yellow-400">BookWorm Library</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="p-6 border border-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4">Vast Collection</h3>
                <p className="text-base leading-relaxed">
                  Access a diverse range of books, journals, and articles
                  curated for every type of reader.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-6 border border-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4">
                  Seamless Experience
                </h3>
                <p className="text-base leading-relaxed">
                  Enjoy a smooth, user-friendly platform designed to enhance
                  your reading experience.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-6 border border-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-base leading-relaxed">
                  Join a community of readers who share your passion for books
                  and knowledge.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="p-6 border border-gray-700 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4">
                  Accessible Everywhere
                </h3>
                <p className="text-base leading-relaxed">
                  Access your favorite books anytime, anywhere with our digital
                  resources.
                </p>
              </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow hover:bg-yellow-300 transition-all duration-300">
              Get Started
            </button>
          </div>
        </section>

        {/* Third Section: Testimonials + Call to Action */}
        <section className="border-t-2 border-dotted py-12 px-6 md:py-16 md:px-12 bg-gray-900 text-white">
  <div className="container mx-auto max-w-screen-lg">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        What Our <span className="italic text-yellow-400">Readers Say</span>
      </h2>
      <p className="text-lg mt-4">
        Discover why thousands of book lovers trust BookWorm Library for their reading needs.
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-base italic leading-relaxed mb-4">
          &#34;BookWorm Library has the best collection of books. It has become my go-to resource for research.&#34;
        </p>
        <h3 className="text-lg font-semibold">- Sophia Thompson</h3>
      </div>

      {/* Testimonial 2 */}
      <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-base italic leading-relaxed mb-4">
          &#34;I love the ease of navigation and the variety of genres available. It&apos;s perfect for my busy lifestyle.&#34;
        </p>
        <h3 className="text-lg font-semibold">- Liam Carter</h3>
      </div>

      {/* Testimonial 3 */}
      <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
        <p className="text-base italic leading-relaxed mb-4">
          &#34;Joining the community of BookWorm Library readers has been the best decision for my learning journey!&#34;
        </p>
        <h3 className="text-lg font-semibold">- Mia Evans</h3>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center mt-12">
      <h3 className="text-2xl font-bold mb-4">
        Ready to Discover Your Next Favorite Book?
      </h3>
      <button className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg shadow hover:bg-yellow-300 transition-all duration-300">
        Join the BookWorm Family
      </button>
    </div>
  </div>
        </section>
      <div className="border-t-2 border-dotted ">
        <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
