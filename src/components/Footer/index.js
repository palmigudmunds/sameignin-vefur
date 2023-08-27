import React from "react";
import logo from "../../resources/logo/logo-gray-big.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between p-7 md:px-20 space-y-5">
        <div className="w-44">
          <NavLink to={`/`}>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <p class="text-sm text-gray-500 font-normal">
          &copy; 2023 Allur réttur áskilinn
        </p>
        <p class="text-gray-500 text-sm font-normal">
          <a href="tel:+3546926355" className="hover:text-teal">
            692-6355
          </a>
        </p>
        <p class="text-gray-500 text-sm font-normal">
          <a
            href="mailto:stigagangurinn@stigagangurinn.com"
            className="hover:text-teal"
          >
            stigagangurinn@stigagangurinn.is
          </a>
        </p>
        <a
            href="https://www.facebook.com/profile.php?id=100095275575314"
            rel="noreferrer"
            target="_blank"
            class="text-gray-700 transition hover:text-teal"
          >
            <span class="sr-only">Facebook</span>

            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
