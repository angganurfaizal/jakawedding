import Link from "next/link";
import Image from "next/image";
import React from "react";
import s from "./Sidebar.module.css";
import { Roboto } from "next/font/google";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Sidebar() {
  return (
    <nav
      className={`fixed top-0 shadow-sm left-0 h-100 text-left w-[230px] z-999 overflow-auto bg-white pl-[0.5rem] touch-pinch-zoom block ${roboto.className}`}
    >
      <div
        className={
          "relative overflow-hidden h-100 max-w-full outline-none max-h-none"
        }
      >
        <div
          className={"relative top-0 left-0 mr-0 overflow-hidden w-auto h-auto"}
        >
          <span className={"leading-[60px] block text-center"}>
            <Link href={"/"}>
              <div className={"flex"}>
                <Image
                  className={"rounded-[100%] mr-2 p-2"}
                  src={"/logo.png"}
                  width={"50"}
                  height={"40"}
                  alt={"Jaka Wedding"}
                />
                <h4>Jaka Wedding Apps</h4>
              </div>
            </Link>
          </span>
          <ul className={`${s.sideNav} list-none pl-0`}>
            <li>
              <Link href="./">
                <HomeIcon className={s.i} />
                <span className="inline-block">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="./pricelist">
                <ClipboardDocumentListIcon className={s.i} />
                <span className="inline-block">Pricelist</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
