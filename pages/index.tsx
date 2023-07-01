import { Aside } from "../components/aside";
import { Text } from "../components/commons/text";
import { Menu } from "../components/menu";
import Link from "next/link";
import { HiLightBulb, HiClock } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  AiFillCloseCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { asideItems } from "../data/aside";
import { AsideType, EducationType, ExperienceType } from "../types";
import { skillsItems } from "../data/skills";
import { experienceItems } from "../data/experience";
import { educationItems } from "../data/education";
import { projectItems } from "../data/project";
import { contactItems } from "../data/contact";
import Layout from "../layouts/default";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const [navbar, setNavBar] = useState(false);
  return (
    <Layout>
      <div className="h-screen">
        <div className="container mx-auto">
          <div className="flex">
            <Aside />
            <div className="hidden xl:flex absolute mt-10 right-0">
              <HiLightBulb
                className="mt-10 xl:mt-0 mr-[2rem] xl:mr-[6rem] link cursor-pointer"
                onClick={toggleTheme}
                size={30}
              />
            </div>
            <div className="px-[6rem] lg:px-[17rem] py-[6rem]">
              <div
                className="flex lg:hidden justify-end"
                onClick={() => {
                  setNavBar(!navbar);
                }}
              >
                {navbar === false ? (
                  <AiOutlineMenu size={80} />
                ) : (
                  <AiFillCloseCircle size={80} />
                )}
              </div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="flex flex-col items-end justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-gray-600">
                  {asideItems.map((item: AsideType, index) => {
                    return (
                      <li
                        key={index}
                        className="text-4xl font-semibold"
                        style={{ fontFamily: "SkylarSans" }}
                      >
                        <Link href={item.pathname}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <Text type="subTitle" text="Passionate" />
                <Text type="title" text="Software" />
                <Text type="title" text="engineer" />
              </div>
              <div className="pt-[10.5rem]" id="about">
                <Menu text="ABOUT" />
                <div className="xl:w-[39.83rem]">
                  <Text text="Hi, I'm Abba Sali. A Software developer & UI/UX designer focused on developing software for people." />
                  <Text
                    text="I love architecting software and developing elegant solutions to complex problems"
                    myStyle="pt-[2.2rem]"
                  />
                  <Link
                    className="cursor-pointer"
                    href="https://drive.google.com/file/d/1SIXrMhjiX02HKr_ZKA2jdGAarRmUABGW/view"
                  >
                    <p className="pt-[2.5rem] font-[300] text-[1.8rem] leading-[140%] text-gray-700 tracking-[0.01rem]">
                      <span className="mr-2">&#x22B3;</span>Resume
                    </p>
                  </Link>
                </div>
              </div>
              <div className="pt-[10.5rem]">
                <Menu text="SKILLS" />
                <div>
                  <ul>
                    {skillsItems.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center">
                          <span className="mr-4 link">&mdash;</span>
                          <Text type="list" text={item} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="pt-[10.5rem]" id="experience">
                <Menu text="EXPERIENCE" />
                <div>
                  <ul>
                    {experienceItems.map((item: ExperienceType, index) => {
                      return (
                        <li
                          className="flex flex-col xl:flex-row xl:justify-between xl:items-center"
                          key={index}
                        >
                          <div>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <Text type="diplome" text={item.structure} />
                                <span className="text-2xl text-gray-500 mx-4">
                                  &mdash;
                                </span>
                                <Text type="diplome" text={item.title} />
                              </div>
                            </div>
                            <div className="md:pb-6 ml-4">
                              <Text text={item.periode} type="menuitalic" />
                              <div className="pt-1">
                                <ul>
                                  {item.role!.map((item, index) => {
                                    return (
                                      <li key={index}>
                                        <p
                                          className="font-normal text-xl lg:text-base leading-[160%] tracking-[0.01rem]"
                                          style={{ fontFamily: "NunitoSans" }}
                                        >
                                          <span className="mr-2">&#x2981;</span>
                                          {item}
                                        </p>
                                      </li>
                                    );
                                  })}
                                  <div className="mt-4 mb-8">
                                    {item.techs!.map((item, index) => {
                                      return (
                                        <span
                                          key={index}
                                          className="border px-4 py-2 rounded-full text-xs mr-2"
                                        >
                                          {item}
                                        </span>
                                      );
                                    })}
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="pb-6 pt-0  md:pt-8 md:pb-0">
                            <Text text={item.city} type="menulinkbold" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="pt-[10.5rem]" id="education">
                <Menu text="EDUCATION" />
                <div>
                  <ul>
                    {educationItems.map((item: EducationType, index) => {
                      return (
                        <li
                          className="flex flex-col xl:flex-row xl:justify-between xl:items-center"
                          key={index}
                        >
                          <div>
                            <div className="flex items-center">
                              <Text type="diplome" text={item.title} />
                            </div>
                            <div className="pt-2 md:pb-6">
                              <Text text={item.school} type="menulinkbold" />
                            </div>
                          </div>
                          <div className="pb-4 md:pb-0">
                            <Text text={item.date} type="menulinkbold" />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="pt-[10.5rem]" id="project">
                <Menu text="SELECTED PROJECTS" />
                <div>
                  <ul>
                    {projectItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={item.pathname}
                            className="pb-2 flex items-center cursor-pointer text-[2rem] lg:text-[1.7rem] hover:underline"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="pt-[10.5rem]" id="contact">
                <Menu text="CONTACT" />
                <div>
                  <ul>
                    {contactItems.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center">
                          <Text type="list" text={item} />
                        </li>
                      );
                    })}
                    <div className="flex flex-row mt-3">
                      <li className="mr-4">
                        <Link href="http://github.com/Asam237">
                          <AiFillGithub className="w-10 h-10 link" />
                        </Link>
                      </li>
                      <li className="mr-4">
                        <Link href="https://www.linkedin.com/in/abba-sali-aboubakar-mamate/">
                          <AiFillLinkedin className="w-10 h-10 link" />
                        </Link>
                      </li>
                      <li className="mr-4">
                        <Link href="https://wakatime.com/@asam">
                          <HiClock className="w-10 h-10 link" />
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text type="name" text="ABBA SALI" />
      </div>
    </Layout>
  );
}
