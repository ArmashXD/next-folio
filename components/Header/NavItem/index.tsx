import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  item?: {
    path: string;
    name: string;
  };
}

function NavItem({ item }: Props) {
  const router = useRouter();
  return (
    <li>
      <Link
        href={item!.path}
        className={`${item?.path === router.asPath ? "active rounded" : ""}`}
      >
        {item!.name}
      </Link>
    </li>
  );
}

export default NavItem;
