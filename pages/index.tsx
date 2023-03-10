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
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] h-screen">
      <div className="container mx-auto">
        <div className="flex">
          <Aside />
          <div className="px-[17.22rem] py-[6.1rem]">
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
                      <li key={index} className="flex items-center">
                        <span className="mr-4">&mdash;</span>
                        <Text type="list" text={item} />
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
                      <>
                        <Link key={index} href={item.link} className="pb-2 flex items-center">
                          <Text type="list" text={item.name} myStyle="cursor-pointer hover:underline" />
                        </Link>
                      </>
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
