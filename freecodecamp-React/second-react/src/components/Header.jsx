import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header>
      <div className="w-3/4 mx-auto my-12 flex gap-5 justify-between items-center">
        <img src={reactLogo} alt="react-logo" className="w-[80px]" />
      <nav>
        <ul className="flex gap-2">
          <li className="text-xl font-medium text-white cursor-pointer">Pricing</li>
          <li className="text-xl font-medium text-white cursor-pointer">About</li>
          <li className="text-xl font-medium text-white cursor-pointer">Contact</li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
