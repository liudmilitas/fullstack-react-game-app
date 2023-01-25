import React, { useState, useRef, useEffect } from "react";
import MoraCoin from "/src/image/mora.png";
import MenuIcon from "/src/svg/menu.svg";
import Logo from "/src/svg/logo.svg";
import { createPopper } from "@popperjs/core";
import { useWindowSize } from "react-use";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { listMyTransactions } from "../../actions/transactionActions";

let navLinks = [];
navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Gallery", href: "/gallery" },
  { name: "History", href: "/transactions" },
];

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
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
              }
              style={{ minWidth: "12rem" }}
            >
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  className="text-white bg-indigo-500 hover:bg-indigo-700 text-lg py-2 px-4 font-normal block w-full whitespace-nowrap hover:underline italic"
                  key={link.name}
                  title={link.name}
                >
                  {link.name}
                </Link>
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
    <li className="nav-item" key={link.name}>
      <Link
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white underline hover:opacity-75"
        to={link.href}
        title={link.name}
      >
        <span className="lg:text-lg leading-lg text-white ml-2 whitespace-nowrap italic">
          {link.name}
        </span>
      </Link>
    </li>
  ));
}

export default function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(listMyTransactions());
  }, [navigate, userInfo, dispatch]);

  const { width } = useWindowSize();

  const transactionListMy = useSelector((state) => state.transactionListMy);
  const { error, loading, transactions } = transactionListMy;
  const balance = transactions
    ?.map((t) => t.coins_amount)
    .reduce((sum, a) => sum + a, 0);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-400 w-full">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto">
          <Link
            className="text-xl font-bold leading-relaxed flex mr-4 whitespace-nowrap uppercase text-white items-center content-center"
            to={"/"}
            title="Home"
          >
            <img className="h-12 mr-3" src={Logo} />
            <span className="hidden md:inline lg:inline underline hover:opacity-75">
              Gachapon
            </span>
          </Link>
        </div>
        <div className="lg:flex flex-grow items-center min-w-fit">
          <ul className="flex flex-row list-none lg:ml-auto">
            <li className="nav-item  px-3">
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white bg-indigo-600 bg-opacity-50 rounded-full min-w-fit"
                to={"/transactions"}
              >
                <img className="h-6" src={MoraCoin} />
                <span className="ml-2 text-lg leading-lg text-white hover:opacity-75">
                  {balance ? balance : 50}
                </span>
              </Link>
            </li>
            {userInfo && width >= 1024 && (
              <span className="whitespace-nowrap italic lg:text-lg px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white">
                Hey, {userInfo.name}!
              </span>
            )}
            {width >= 1024 ? <DesktopNav /> : <MobileNav />}
            {userInfo && (
              <Link
                onClick={logoutHandler}
                className="whitespace-nowrap italic text-lg px-3 py-2 flex items-center uppercase font-bold leading-snug text-white underline hover:opacity-75"
              >
                Log Out
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
