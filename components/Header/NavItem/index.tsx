import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  item?: {
    path: string;
    name: string;
  },
  handleClick: Function
}

function NavItem({ item, handleClick }: Props) {
  const router = useRouter();
  return (
    <li>
      <Link
        href={item!.path}
        className={`${item?.path === router.asPath ? "active rounded" : ""}`}
        onClick={() => handleClick()}
      >
        {item!.name}
      </Link>
    </li>
  );
}

export default NavItem;
