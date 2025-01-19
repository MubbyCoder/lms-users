import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; //

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5017/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-yellow-400 my-8">
          Contact Us
        </h1>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-gray-800 rounded-lg shadow-lg space-y-6"
          >
            <h2 className="text-2xl font-semibold text-yellow-400">
              Request for books
            </h2>
            <p className="text-gray-400">
              Fill out the form below, or message us on WhatsApp!
            </p>
            <div>
              <label className="block text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Our Location
            </h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.37217445022!2d-118.6919204!3d34.0201613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb2aa123f123%3A0xabd3a40edb5c24!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1617654498240!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="rounded-lg"
              ></iframe>
            </div>
            <a
              href="https://wa.me/9010496843"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
              />
              Message Us on WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-800">
          <Footer />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactUs;
