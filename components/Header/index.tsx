import React from "react";
import NavList from "./NavList";
import ThemeChanger from "../ThemeChanger";
import NavCenterItem from "./NavCenterItem";

function Header() {
  return (
    <div className="navbar bg-base-200 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="hidden lg:flex-none lg:block">
          <NavList className="menu menu-horizontal p-0 " />
        </div>
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <NavList className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
      </div>
      <div className="navbar-center">
        <NavCenterItem />
      </div>
      <div className="navbar-end">
        <ThemeChanger />
      </div>
    </div>
  );
}

export default Header;
