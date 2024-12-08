import { useState } from "react";
import bjpLogo from "../../../public/images/AnshYogaSansthan/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="custom-container flex justify-between items-center p-4 py-2 text-base md:text-2xl bg-baseColor text-white">
      <div className="text-xl font-bold flex items-center">
        <a href="/" className="flex  items-center gap-4 text-base md:text-xl">
          <img
            src={bjpLogo}
            alt="bjp logo"
            title="bjp logo"
            className="h-20 w-20 scale-[2]"
          />
          अंश योग संस्थान
        </a>
      </div>

      <div className="md:hidden z-20" onClick={toggleMenu}>
        <button className="focus:outline-none">{isOpen ? "✖" : "☰"}</button>
      </div>

      <div
        className={`flex-col z-10 md:flex-row space-y-4 md:space-y-0 md:space-x-6 fixed md:static justify-center items-center text-2xl lg:text-xl inset-0 bg-baseColor md:bg-transparent transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0  flex ${isOpen ? "block" : "hidden md:flex"}`}
      >
        <a href="/" className="hover:underline cursor-pointer font-semibold">
          होम
        </a>
        <a
          href="/introduction"
          className="hover:underline cursor-pointer font-semibold"
        >
          परिचय
        </a>

        <a
          href="/donate"
          className="hover:underline cursor-pointer font-semibold"
        >
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
