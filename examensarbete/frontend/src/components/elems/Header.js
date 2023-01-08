import React, { useState, useRef } from "react";
import MoraCoin from "/src/image/mora.png";
import MenuIcon from "/src/svg/menu.svg";
import Logo from "/src/svg/logo.svg";
import { createPopper } from "@popperjs/core";
import { useWindowSize } from "react-use";

let navLinks = [];
navLinks = ["Shop", "Gallery", "Log out"];

function MobileNav() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className="text-white bg-indigo-500 font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <img className="h-5 fill-white" src={MenuIcon} />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              {navLinks.map((link) => (
                <a
                  href="#"
                  className="text-white bg-indigo-500 text-lg py-2 px-4 font-normal block w-full whitespace-nowrap hover:underline"
                  onClick={(e) => e.preventDefault()}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DesktopNav() {
  return navLinks.map((link) => (
    <li className="nav-item" key={link}>
      <a
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline"
        href="#"
      >
        <i className="lg:text-lg leading-lg text-white">
          <span className="ml-2 whitespace-nowrap">{link}</span>
        </i>
      </a>
    </li>
  ));
}

export default function Header() {
  const { width } = useWindowSize();
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-400 w-full">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto">
          <a
            className="text-xl font-bold leading-relaxed flex mr-4 whitespace-nowrap uppercase text-white items-center content-center"
            href="#"
          >
            <img className="h-12 mr-3" src={Logo} />
            Gachapon
          </a>
        </div>
        <div className="lg:flex flex-grow items-center min-w-fit">
          <ul className="flex flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white bg-indigo-600 bg-opacity-50 rounded-full min-w-fit"
                href="#"
              >
                <img className="h-6" src={MoraCoin} />
                <i className="text-lg leading-lg text-white hover:opacity-75">
                  <span className="ml-2">50</span>
                </i>
              </a>
            </li>
            {width >= 1024 ? <DesktopNav /> : <MobileNav />}
          </ul>
        </div>
      </div>
    </nav>
  );
}
