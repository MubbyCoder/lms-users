// import React from "react";
import { FaGithub, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About BookWorm Library</h3>
            <p className="text-sm leading-relaxed">
              BookWorm Library offers a wide selection of books for readers of all interests.
              Join our community and explore your passion for reading and learning!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-yellow-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/catalog" className="hover:text-yellow-400 transition">
                  Catalog
                </a>
              </li>
              <li>
                <a href="/membership" className="hover:text-yellow-400 transition">
                  Membership
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              Stay connected through our social media platforms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MubbyCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=kazeem-mubaraq-204b9a2b7 "
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/mubby.bme?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/mubbymusic_?t=KhQZzHRqS2nW4Y68ZciLPg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-700 pt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} BookWorm Library. All Rights Reserved.</p>
          <p>
            Designed with <span className="text-yellow-400">❤️</span> by Mubby.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
