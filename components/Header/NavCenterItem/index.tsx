import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PROFILE_INFO } from "../../../config";

function NavCenterItem() {
  const router = useRouter();
  return (
    <Link
      href="/"
      className={` normal-case text-xl ${
        router.asPath === "/" ? "btn btn-primary rounded" : "btn btn-ghost"
      }`}
    >
      {PROFILE_INFO.nickname}
    </Link>
  );
}

export default NavCenterItem;
