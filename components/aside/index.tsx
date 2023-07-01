import Link from "next/link";
import React from "react";
import { asideItems } from "../../data/aside";
import { AsideType } from "../../types";
import { Text } from "../commons/text";

export const Aside = () => {
  return (
    <aside className="hidden xl:flex xl:fixed top-[3.3rem] left-[2.4rem] right-0">
      <div className="flex flex-col h-[100vh]">
        <Link href="/">
          <Text type="menulink2" text="Abba Sali" />
        </Link>
        <nav className="pt-[6.6rem]">
          <ul>
            {asideItems.map((item: AsideType, index) => {
              return (
                <li key={index}>
                  <Text type="menulink" link={item.pathname} text={item.name} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
