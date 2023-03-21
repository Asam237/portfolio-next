import React from "react";

interface TextProps extends React.AllHTMLAttributes<HTMLElement> {
  type?: string;
  text: string;
  link?: string;
  myStyle?: string;
}

export const Text = ({ type, text, link, myStyle, ...props }: TextProps) => {
  if (type === "title") {
    return (
      <h4
        className="font-[700] text-[16.6rem] leading-[80%] text-[#181F1C]"
        style={{ fontFamily: "SkylarSans" }}
      >
        {text}
      </h4>
    );
  }
  if (type === "subTitle") {
    return (
      <h4
        className="font-[400] text-[10rem] leading-[140%] text-[#181F1C] tracking-[0.02rem]"
        style={{ fontFamily: "SkylarSans" }}
      >
        {text}
      </h4>
    );
  }
  if (type === "section") {
    return (
      <h4
        className="font-extrabold text-[2rem] lg:text-[.8rem] leading-[1.2rem] text-[#181F1C] tracking-[0.01rem]"
        style={{ fontFamily: "NunitoSansBold" }}
      >
        {text}
      </h4>
    );
  }
  if (type === "name") {
    return (
      <h4
        className="font-[950] text-[45rem] text-[#696d6b] text-center hidden lg:flex items-center justify-center"
        style={{ fontFamily: "DruckCond" }}
      >
        {text}
      </h4>
    );
  }
  if (type === "author") {
    return (
      <p
        className={`font-[300] text-[2rem] lg:text-[.8rem] leading-[150%] text-[#181F1C] tracking-[0.01rem] ${myStyle}`}
        style={{ fontFamily: "NunitoSans" }}
      >
        {text}
      </p>
    );
  }
  if (type === "list") {
    return (
      <p
        className={`font-[350] text-[2rem] lg:text-[1.7rem] leading-[150%] text-[#181F1C] ${myStyle}`}
        style={{ fontFamily: "NunitoSans" }}
      >
        {text}
      </p>
    );
  }
  if (type === "menulink") {
    return (
      <a
        href={link}
        className="font-normal text-sm leading-[120%] text-[#181F1C] tracking-[0.01rem]"
        style={{ fontFamily: "NunitoSans" }}
      >
        {text}
      </a>
    );
  }
  if (type === "menulinkbold") {
    return (
      <a
        href={link}
        className="font-semibold text-sm leading-[120%] text-[#181F1C] tracking-[0.01rem]"
        style={{ fontFamily: "NunitoSans" }}
      >
        {text}
      </a>
    );
  }
  if (type === "citation") {
    return (
      <h4
        className="font-[700] text-[3.5rem] leading-[110%] text-[#181F1C]"
        style={{ fontFamily: "SkylarSans" }}
      >
        {text}
      </h4>
    );
  }
  if (type === "diplome") {
    return (
      <p
        className={`font-[300] text-[2rem] lg:text-[1.4rem] leading-[140%] text-[#181F1C] tracking-[0.01rem] ${myStyle}`}
        style={{ fontFamily: "NunitoSans" }}
      >
        {text}
      </p>
    );
  }
  return (
    <p
      className={`font-[300] text-[2rem] lg:text-[1.7rem] leading-[140%] text-[#181F1C] tracking-[0.01rem] ${myStyle}`}
      style={{ fontFamily: "NunitoSans" }}
    >
      {text}
    </p>
  );
};
