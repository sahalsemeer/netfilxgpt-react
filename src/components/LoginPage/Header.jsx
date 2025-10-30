import React from "react";
import { NETFLIX_LOGO } from "../../constants";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30 px-6 sm:px-10 py-4 bg-linear-to-b from-black/80 to-transparent">
      <img
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
        className="w-32 sm:w-40 md:w-48 object-contain"
      />
    </header>
  );
};

export default Header;
