import {
  CONTACT,
  EDUCATION,
  EXPERIENCE,
  PROJECT,
  SKILLS,
} from "../assets/constants/globals";
import { Aside } from "../components/aside";
import { Text } from "../components/commons/text";
import { Menu } from "../components/menu";
import Image from "next/image";
import quote from "../assets/images/quote.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import clock from "../assets/images/clock.png";
import Link from "next/link";
import { HiLightBulb, HiClock } from "react-icons/hi"
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

export default function Home() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <div className="flex">
          <Aside />
          <div className="hidden lg:flex absolute mt-10 right-0">
            <HiLightBulb className="mt-10 lg:mt-0 mr-[2rem] lg:mr-[6rem] link cursor-pointer" onClick={toggleTheme} size={30} />
          </div>
          <div className="px-[6rem] lg:px-[17rem] py-[6rem]">
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
                <a className="cursor-pointer" href="https://drive.google.com/file/d/1SIXrMhjiX02HKr_ZKA2jdGAarRmUABGW/view">
                  <p className="pt-[2.5rem] font-[300] text-[1.8rem] leading-[140%] text-gray-700 tracking-[0.01rem]"><span className="mr-2">&#x22B3;</span>Resume</p>
                </a>
              </div>
              <div className="pt-[9.3rem] xl:w-[34.77rem]" id="skills">
                <div>
                  <div className="flex flex-row ml-[-6rem]">
                    <Image
                      src={quote}
                      alt="image"
                      className="w-[3rem] h-[4.3rem]"
                    />
                    <Image
                      src={quote}
                      alt="image"
                      className="w-[3rem] h-[4.3rem] pl-[.4rem]"
                    />
                  </div>
                </div>
                <div>
                  <Text
                    type="citation"
                    text="A problem without a solution is a poorly stated problem."
                  />
                  <Text
                    type="author"
                    text="Albert Einstein"
                    myStyle="pt-[2.2rem]"
                  />
                </div>
              </div>
            </div>
            <div className="pt-[10.5rem]">
              <Menu text="SKILLS" />
              <div>
                <ul>
                  {SKILLS.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center">
                        <span className="mr-4">&mdash;</span>
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
                  {EXPERIENCE.map((item, index) => {
                    return (
                      <li
                        className="flex flex-col xl:flex-row xl:justify-between xl:items-center"
                        key={index}
                      >
                        <div>
                          <div className="flex items-center">
                            <div className="flex items-center"><Text type="diplome" text={item.structure} />
                              <span className="text-2xl text-gray-500 mx-4">&mdash;</span>
                              <Text type="diplome" text={item.title} />
                            </div>
                          </div>
                          <div className="md:pb-6">
                            <Text text={item.periode} type="menuitalic" />
                            <div className="pt-1">
                              <ul>
                                {
                                  item.role!.map((item, index) => {
                                    return (
                                      <li key={index}>
                                        <p className="font-normal text-xl lg:text-base leading-[160%] tracking-[0.01rem]" style={{ fontFamily: "NunitoSans" }}><span className="mr-2">&#x2981;</span>{item}</p>

                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="pb-4 md:pb-0">
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
                  {EDUCATION.map((item, index) => {
                    return (
                      <li
                        className="flex flex-col xl:flex-row xl:justify-between xl:items-center"
                        key={index}
                      >
                        <div>
                          <div className="flex items-center">
                            <span className="mr-4">&mdash;</span>
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
                  {PROJECT.map((item, index) => {
                    return (
                      <li key={index}>
                        <a href={item.link} className="pb-2 flex items-center cursor-pointer text-[2rem] lg:text-[1.7rem] hover:underline">
                          {item.name}
                        </a>
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
                  {CONTACT.map((item, index) => {
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
  );
}
