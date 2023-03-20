import { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  return (
    <div className="mb-10">
      <nav className="bg-white px-2 sm:px-4 py-2 top-0 left-0 right-0 fixed  ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl px-4 font-bold whitespace-nowrap dark:text-black  ">
              Sentiments
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900  font-bold dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-fuchsia-900 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  " >
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   font-bold "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   font-bold "
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   font-bold "
                >
                  Profile
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   font-bold "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
