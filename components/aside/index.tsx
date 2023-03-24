import Link from "next/link";
import React from "react";
import { Text } from "../commons/text";

const navs = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const Aside = () => {
  return (
    <aside className="hidden xl:flex xl:fixed top-[3.3rem] left-[2.4rem] right-0">
      <div className="flex flex-col h-[100vh]">
        <Link href="/">
          <Text type="menulink2" text="Abba Sali" />
        </Link>
        <nav className="pt-[6.6rem]">
          <ul>
            {navs.map((item: any, index) => {
              return (
                <li key={index}>
                  <Text type="menulink" link={item.link} text={item.name} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
