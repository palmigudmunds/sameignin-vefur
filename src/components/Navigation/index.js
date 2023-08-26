import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

import bigLogo from "../../resources/logo/logo-white-big.png";
import smallLogo from "../../resources/logo/logo-white-small.png";


const Navigation = () => {
  // let activeClassName = "text-teal link max-md:hidden";
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   // console.log('scrolling')
  //   const currentScrollPos = window.scrollY;

  //   if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <nav
      className={`mx-auto relative inset-x-0 h-20 md:h-28 z-40 w-full -mb-32 transition-all duration-500 sticky `}
    >
      <section className="MOBILE-MENU flex md:hidden">
        <div className="absolute left-0 mt-4 ml-6 z-20">
          <Hamburger
            toggled={isNavOpen}
            toggle={setIsNavOpen}
            color="#ffffff"
            direction="left"
            size={30}
          />
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-left justify-start min-h-screen ml-5 mt-56">
            <li className="nav-li">
              <NavLink to={`/#thjonusta`}>
                <button
                  className="link text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  Þjónusta
                </button>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink to={`/#um-okkur`}>
                <button
                  className="link text-white"
                  onClick={() => setIsNavOpen(false)}
                >
                  Um okkur
                </button>
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink
                to={`/hafdu-samband`}
                className={({ isActive }) =>
                  isActive ? "text-teal link" : "text-white link"
                }
                onClick={() => setIsNavOpen(false)}
              >
                Fáðu ókeypis ráðgjöf
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div>
        <div className="logo-wrapper md:hidden">
          <div className="logo">
            <NavLink to={`/`}>
              <img src={smallLogo} alt="Logo" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-xl flex md:mx-auto justify-center md:py-8 lg:py-10 px-8">
        <NavLink to={`/`} className="w-52 lg:w-64 flex items-center justify-start">
          <img
            className="max-md:hidden w-full h-auto"
            src={bigLogo}
            alt="Logo"
          />
        </NavLink>
        <div className="flex space-x-4 lg:space-x-10 justify-between items-center ml-auto">
          <NavLink to={`/#thjonusta`} className="link text-white max-md:hidden">
            Þjónusta
          </NavLink>
          <NavLink to={`/#um-okkur`} className="link text-white max-md:hidden">
            Um okkur
          </NavLink>
          {/* <NavLink
            to={`/fyrri-verk`}
            className={({ isActive }) =>
              isActive ? activeClassName : "text-white link max-md:hidden"
            }
          >
            Umsagnir
          </NavLink> */}
        </div>
        <div className="flex space-x-4 items-center justify-end ml-auto w-64">
          <NavLink
            to={`/hafdu-samband`}
            className="nav-service-button max-md:hidden"
          >
            Fáðu ókeypis ráðgjöf
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
