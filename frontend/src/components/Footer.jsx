import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-white">About Us</h3>
          <p className="mt-4 text-sm sm:text-base">
            MajdoorBajar connects skilled workers with those who need their services.
            Find reliable professionals in your area.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-white">Learn More</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-white">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
          <p className="mt-4 text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:support@example.com" className="hover:text-white">
              support@example.com
            </a>
          </p>
          <p className="mt-2 text-sm sm:text-base">
            Phone:{" "}
            <a href="tel:+123456789" className="hover:text-white">
              +1 234 567 89
            </a>
          </p>
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Facebook className="text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="text-gray-400 hover:text-white cursor-pointer" />
            <Youtube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-8 border-t border-gray-800 max-w-4xl mx-auto text-center">
        <p className="text-xs text-gray-400">
          &copy; 2024 MajdoorBajar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};


export default Footer;



// By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. 
// All trademarks are properties of their respective owners. 2008-{currentYear} © MajdoorBajar™ Ltd. All rights reserved.
