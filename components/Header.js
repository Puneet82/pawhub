// components/Header.js
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setuserInfo] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user?.data?.result) {
      setuserInfo(user?.data?.result);
      setIsLogged(true);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-[#388697] text-white flex justify-between items-center py-4 px-6">
      {/* Left side of the navbar */}
      <div className="navbar-start">
        {/* Logo */}
        <Link href="/" className="text-xl lg:text-xl font-bold cursor-pointer flex items-center">
          {/* <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current text-white"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg> */}
          <h1 className="m-1">Pawsitivity Hub</h1>
        </Link>
      </div>

      {/* Center of the navbar, hidden on small screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center justify-center">
          <li>
            <Link href="/" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
              Home
            </Link>
          </li>
          <li ref={dropdownRef} className="relative inline-block">
            <div onClick={toggleDropdown} className="text-lg hover:bg-[#F79D5C] px-4 py-2 flex">
              Services{" "}
              <BsChevronDown fontSize={18} className={`transition-all duration-300 ${isOpen && "rotate-180"}`} />
            </div>
            {isOpen && (
              <ul className="p-2 absolute bg-gray-800 rounded-lg z-[9999] m-1">
                <li>
                  <Link
                    href="/daycare"
                    className="w-[200px] px-4 py-1 text-lg hover:bg-[#F79D5C] dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dog Daycare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dogwalking"
                    className="w-[200px] px-4 py-1 text-lg hover:bg-[#F79D5C] dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dog Walking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dogspa"
                    className="w-[200px] px-4 py-1 text-lg hover:bg-[#F79D5C] dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dog Spa
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/adoption" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
              Adoption
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
              About Us
            </Link>
          </li>

          {/* Link to Dashboard */}
          <li>
            {userInfo && userInfo?.isAdmin && (
              <Link href="/admin/dashboard" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
                Dashboard
              </Link>
            )}
            {userInfo && !userInfo?.isAdmin && (
              <Link href="/user_dashboard" className="text-lg hover:bg-[#F79D5C] px-4 py-2">
                Dashboard
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Right side of the navbar */}
      <div className="navbar-end">
        {/* Button to book services */}

        {isLogged && (
          <Link href="/bookuspage">
            <button className="btn bg-[#388697] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#F79D5C] hover:text-[#388697]">
              Book Me
            </button>
          </Link>
        )}

        {isLogged && (
          <Link href="/">
            <button
              onClick={handleLogout}
              className="btn bg-[#388697] ml-5 text-white text-lg px-4 py-2 rounded-lg hover:bg-[#F79D5C] hover:text-[#388697]"
            >
              Logout
            </button>
          </Link>
        )}

        {!isLogged && (
          <Link href="/signuppage">
            {/* <button className="btn bg-[#388697] ml-5 text-white text-lg px-4 py-2 rounded-lg hover:bg-[#F79D5C] hover:text-[#388697]"> */}
            <button className="btn bg-[#F79D5C] ml-5 text-white text-lg px-4 py-2 rounded-lg hover:bg-[#ffaf5f] ">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
