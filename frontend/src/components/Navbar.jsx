import {
  ShoppingCart,
  UserPlus,
  LogIn,
  LogOut,
  Lock,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react"; // Add useState for toggling menu
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";


const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
          >
            MajdoorBajar.com
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-wrap items-center gap-4">
            <Link
              to={"/"}
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            {user && (
              <Link
                to={"/cart"}
                className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
              >
                <ShoppingCart
                  className="inline-block mr-1 group-hover:text-emerald-400"
                  size={20}
                />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}
            {isAdmin && (
              <Link
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}
            {user ? (
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                onClick={logout}
                aria-label="Log Out"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                  aria-label="Log In"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-300 hover:text-emerald-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`fixed inset-y-0 right-0 bg-gray-800 text-white w-32 transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <nav className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              className="text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </nav>
		  <div className="flex flex-col bg-black">

		  <Link
            to="/"
            className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          {user && (
            <Link
              to="/cart"
              className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/secret-dashboard"
              className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          )}
          {user ? (
            <button
              className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
              onClick={() => {
                logout();
                setMobileMenuOpen(false);
              }}
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block text-gray-300 hover:text-emerald-400 px-4 py-2 transition duration-300 ease-in-out"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </>
		  )}


		  </div>
          
        
        </div>
      </div>
    </header>
  );
};

export default Navbar;
