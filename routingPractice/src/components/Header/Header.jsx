import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex px-12 py-5 justify-between items-center">
        <Link to="/" className="text-4xl font-bold">
          slash
        </Link>
        <ul className="flex gap-3 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? "text-orange-700" : 'text-black'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? "text-orange-700" : 'text-black'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? "text-orange-700" : 'text-black'
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
