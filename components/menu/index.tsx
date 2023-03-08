import React from "react";
import { Text } from "../commons/text";

interface MenuProps extends React.AllHTMLAttributes<HTMLElement> {
  text: string;
}

export const Menu = ({ text, ...props }: MenuProps) => {
  return (
    <div>
      <Text type="section" text={text} />
      <hr className="h-[2px] bg-[#8a8e8d] mt-[1.3rem] mb-[2.2rem]" />
    </div>
  );
};
