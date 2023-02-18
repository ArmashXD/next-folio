import React from "react";
import NavItem from "../NavItem";

const navItems = [
  {
    path: "/about",
    name: "About Me",
  },
  {
    path: "/work",
    name: "Projects/Repos",
  },
  {
    path: "/contact",
    name: "Contact Me",
  },
];

function NavList({ className }: { className: string }) {
  return (
    <ul tabIndex={0} className={className}>
      {navItems?.map((item, key) => (
        <NavItem key={key + 1} item={item} />
      ))}
    </ul>
  );
}

export default NavList;
