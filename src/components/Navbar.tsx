import { useState } from "react";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex flex-row items-center text-gray-600 px-4 py-3 max-w-7xl mx-auto">
        <PiFlowerLotusDuotone className="w-12 h-12 sm:w-14 sm:h-14" />
        <h1 className="ml-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Irox Portfolio
        </h1>

        {/* Burger button visible only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex ml-auto flex gap-6 text-base items-center">
          <Link to="/" className="hover:text-gray-950 transition">
            Accueil
          </Link>
          <Link to="/skills" className="hover:text-gray-950 transition">
            Compétences
          </Link>
          <Link to="/price" className="hover:text-gray-950 transition">
            Prix
          </Link>
          <Link to="/contact" className="hover:text-gray-950 transition">
            Contact
          </Link>
          <Link
            to="https://github.com/Irox28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-950 transition"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </Link>
        </div>
      </div>

      {/* Menu mobile, affiché quand isOpen */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-gray-950 transition"
          >
            Accueil
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-gray-950 transition"
          >
            Compétences
          </Link>
          <Link
            to="/price"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-gray-950 transition"
          >
            Prix
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 hover:text-gray-950 transition"
          >
            Contact
          </Link>
          <a
            href="https://github.com/Irox28"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 hover:text-gray-950 transition flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaGithub className="w-6 h-6" />
            Github
          </a>
        </div>
      )}

      <hr className="border-gray-200" />
    </nav>
  );
}
