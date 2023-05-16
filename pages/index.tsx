import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/legacy/image";
import fe from "../public/avatar.png";
import desing from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web7.png";
import web6 from "../public/web8.png";
import web7 from "../public/web9.png";
import web8 from "../public/web10.png";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fulya Ertay Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black ">
        <section className="px-10 md:px-20 lg:px-40 text-center">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons text-white  "></h1>
            <ul className="flex items-center gap-10">
              <li className="text-xl  text-white ">
                <a href="#projects">Projects </a>
              </li>
              <li className="text-xl  text-white ">
                <a href="#about">About </a>{" "}
              </li>
              <li className="text-xl text-white ">
                <a href="#contact">Contact </a>{" "}
              </li>
              <li className="hidden lg:flex md:flex">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://www.showwcase.com/fulyaertay"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-5 mb-12 ">
            <h2 className="text-5xl py-2 text-teal-600 tracking-widest  font-medium md:text-6xl">
              Hi, I am <b>Fulya Ertay</b>
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl tracking-widest  text-white ">
              Front-End Developer
            </h3>
            <p className="text-md py-5 leading-8 tracking-widest  text-white  md:text-xl  ">
              Providing services for user-friendly web applications. Join me
              down below and collaborate on awesome projects!{" "}
            </p>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 lg:px-40 mb-12" id="about">
          <div>
            <h3 className="text-3xl text-teal-600 font-medium py-1 md:text-center xl:text-left md:text-5xl mt-12 mb-10 ">
              About Me
            </h3>
            <div className="sm:flex lg:justify-between  gap-10 ">
              <div className="md:hidden lg:flex">
                <Image
                  className=" w-full h-auto  "
                  alt="fulya"
                  width={2000}
                  height={1800}
                  src={fe}
                ></Image>
              </div>

              <div className="md:mx-10 ">
                <p className="text-md py-2 leading-loose tracking-widest text-gray-80 md:text-xl md:max-w-[200] text-white  ">
                  I am a web developer and designer based out of İzmir, Turkey.
                  Armed with a associate degree in computer programming and a
                  bachelor degree in computer engineering, I love building apps
                  that solve real-world problems, and that are delightful to
                  use. Before dwelling on the world of programming, I loved
                  writing poetry. And now, combining my love for writing with my
                  knowledge of programming I became a technical writer. Whether
                  I am writing documentation or designing user experiences, my
                  goal is always to create content that is engaging and
                  informative. My skills include: HTML, CSS, Tailwind CSS, UI
                  Design, JavaScript, React, Git, GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 lg:px-40 mb-5">
          <h3 className="text-3xl text-teal-600 font-medium py-1 md:text-center mt-12 md:text-5xl ">
            My Skills
          </h3>
          <div className="lg:flex text-center justify-center">
            <div className="text-center  shadow-lg p-20 rounded-xl my-10 flex-1">
              <div>
                <Image src={desing} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-600 text-lg font-medium md:text-4xl pt-8 pb-2">
                  Front-End
                </h4>
                <p className="text-white py-5 md:text-xl">HTML/CSS</p>
                <p className="text-white py-5 md:text-xl">Tailwind CSS</p>
                <p className="text-white py-5 md:text-xl">JavaScript</p>
                <p className="text-white py-5 md:text-xl">React</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-20  rounded-xl my-10 flex-1">
              <div>
                <Image src={code} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-600 text-lg font-medium md:text-4xl  pt-8 pb-2">
                  Back-End
                </h4>
                <p className="text-white py-5 md:text-xl">Python</p>
                <p className="text-white py-5 md:text-xl">Django</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-20 rounded-xl my-10 flex-1">
              <div>
                <Image src={consulting} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-600 text-lg font-medium md:text-4xl  pt-8 pb-2">
                  Databases
                </h4>
                <p className="text-white py-5 md:text-xl">MongoDB</p>
                <p className="text-white py-5 md:text-xl">MSSQL</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 lg:px-40" id="projects">
          <div>
            <h3 className="text-3xl text-teal-600 font-medium py-1 md:text-center mt-5 mb-10 md:text-5xl">
              My Portfolio
            </h3>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:py-8  ">
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/scrimba-tailwind-projects ">
                <Image src={web1} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Spotify Clone
              </p>
            </div>
            <div className=" flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/mini-blog-app">
                <Image src={web2} className="w-50 h-50"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Mini Blog App</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/react-search-filter">
                <Image src={web3} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Search Filter</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/react-image-gallery">
                <Image src={web4} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Image Gallery</p>
            </div>
          </div>
          <div className="flex flex-col gap-5  lg:flex-row lg:flex-wrap lg:py-8  ">
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://scrimba-quiz-app.netlify.app/ ">
                <Image src={web5} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                React Quiz App
              </p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://fe-photo-store.netlify.app/ ">
                <Image src={web6} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Photo Store App
              </p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://react-site-meme-generator.netlify.app/ ">
                <Image src={web7} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Meme Generator
              </p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://fe-tenzies-app.netlify.app/ ">
                <Image src={web8} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Tenzies Game
              </p>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 lg:px-40 " id="contact">
          <div>
            <h3 className="text-3xl text-teal-600 font-medium py-1 md:text-left md:text-5xl mt-12 mb-10 ">
              Get in Touch
            </h3>
            <p className="text-md py-5 leading-8 tracking-widest  text-white  md:text-xl md:max-w-4xl mb-5 ">
              Are you looking for a fast-performing and user-friendly website to
              represent your product or business? or looking for any kind of
              consultation? or want to ask questions? or have some advice for me
              or just want to say <b>Hi 👋</b> in any case feel free to Let me
              know. I will do my best to respond back. 😊 The quickest way to
              reach out to me is via an email.
            </p>
            <a
              id="get-in-touch"
              className="bg-gradient-to-r from-cyan-500 tracking-widest  to-teal-500 font-bold text-white p-7 md:text-center md:text-xl hover:bg-black  inline-block sm:w-[310px] md:h-20  mb-12"
              href="mailto: fulya.ertay@gmail.com"
            >
              Send Mail
            </a>
          </div>
        </section>
      </main>

      <hr className="border-gray-600"></hr>
      <footer className="p-5 bg-black  md:flex md:justify-center md:max-w-full md:p-6 dark:bg-gray-800 shadow-lg">
        <span className="text-sm sm:text-center ">
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/Fulinin_" className="text-gray-200">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </a>
            <a
              href="https://www.linkedin.com/in/fulyaertay/"
              className="text-gray-200"
            >
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="https://github.com/fulyaertay" className="text-gray-200">
              <AiFillGithub></AiFillGithub>
            </a>
          </div>
          <a
            href="https://www.showwcase.com/fulyaertay"
            className="hover:underline font-bold text-gray-200"
          ></a>
        </span>
      </footer>
    </div>
  );
}
