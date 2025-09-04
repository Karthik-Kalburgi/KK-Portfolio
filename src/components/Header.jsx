import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "My Work", path: "/mywork" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-indigo-100 ${isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"}`;

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          MyPortfolio
        </NavLink>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink to={path} className={linkClass}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-indigo-600 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {/* Mobile Drawer */}
    

{open && (
  <motion.div
    initial={{ opacity: 0, x: "-100%" }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-40"
    onClick={() => setOpen(false)}
  >
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white w-64 h-full p-6 shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="space-y-4">
        {navItems.map(({ name, path }) => (
          <li key={name} onClick={() => setOpen(false)}>
            <NavLink to={path} className={linkClass}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  </motion.div>
)}

    </header>
  );
};

export default Header;
