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
const inter = Inter({ subsets: ["latin"] });
import fe from "../public/dev-fe-wave.png";
import desing from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
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
      <main className="bg-white px-10 md:px-20 lg:px-40 ">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyfe</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://www.showwcase.com/fulyaertay"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Fulya Ertay
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Junior Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Providing services for user-friendly web applications. Join me
              down below and collaborate on awesome projects!{" "}
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/Fulinin_">
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </a>
            <a href="https://www.linkedin.com/in/fulya-ertay-40a593156/">
              <AiFillLinkedin></AiFillLinkedin>
            </a>
            <a href="https://github.com/fulyaertay">
              <AiFillGithub></AiFillGithub>
            </a>
          </div>
          <div className="w-60 h-60 mt-20 mx-auto">
            <Image className="max-w-full h-auto rounded-full" src={fe}></Image>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 md:text-left mt-5 text-center">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              My journey into the world of programming began in 2015 where I was
              not too fond of it at first but after finding myself the right
              resources I fell in love with it, and since then, I've developed
              an impressive set of skills that span the fields of web
              development.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              Armed with a associate's degree in computer programming and a
              bachelor's degree in computer engineering, I developed many
              projects in Java and C#. After I graduated computer engineering
              department, I enrolled Scrimba - Frontend Developer Career Path.
              It contains over 70 hours of top-notch tutorials, hundreds of
              coding challenges and dozens of real-world projects. Thanks to
              Scrimba, I've got a solid foundation in HTML, CSS, Tailwind CSS,
              JavaScript and React.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I'm constantly learning new technologies to stay ahead of the
              curve. I am passionated about creating user-friendly websites and
              designing mobile apps that are easy to use. I'm also well-versed
              in Git and GitHub and currently learning Node.js.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              Before dwelling on the world of programming, I loved writing
              poetry. And now, combining my love for writing with my knowledge
              of programming I became a technical writer. Whether I'm writing
              documentation or designing user experiences, my goal is always to
              create content that's engaging and informative. My skills include:
              HTML, CSS, Tailwind CSS, UI Design, JavaScript, React, Git,
              GitHub.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">
              I'm excited to connect with like-minded individuals and companies
              who share my passion for code and creativity and I am always
              looking to collaborate on exciting projects. So, If you are
              looking for a technical writer or a front-end developer, please
              reach out to me.
            </p>
          </div>
          <div className="lg:flex text-center justify-center">
            <div className="text-center  shadow-lg p-20 rounded-xl my-10 flex-1">
              <div>
                <Image src={desing} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">
                  Front-End
                </h4>
                <p className="text-gray-800 py-1">HTML/CSS</p>
                <p className="text-gray-800 py-1">Tailwind CSS</p>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-20  rounded-xl my-10 flex-1">
              <div>
                <Image src={code} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">
                  Back-End
                </h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Django</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-20 rounded-xl my-10 flex-1">
              <div>
                <Image src={consulting} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">
                  Databases
                </h4>
                <p className="text-gray-800 py-1">MongoDB</p>
                <p className="text-gray-800 py-1">MSSQL</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 ">
          <div>
            <h3 className="text-3xl py-1 "> My Portfolio</h3>
          </div>
          <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap border-t mt-5 border-gray-600  ">
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/scrimba-tailwind-projects ">
                <Image src={web1} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7">Spotify Clone</p>
            </div>
            <div className=" flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/mini-blog-app">
                <Image src={web2} className="w-50 h-50"></Image>
              </a>
              <p className="font-md p-5">Mini Blog App</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/react-search-filter">
                <Image src={web3} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5">Search Filter</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a href="https://github.com/fulyaertay/react-image-gallery">
                <Image src={web4} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5">Image Gallery</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="p-5 m-5 bg-gray-200  md:flex md:justify-center md:max-w-full md:p-6 dark:bg-gray-800 shadow-lg">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.showwcase.com/fulyaertay"
            className="hover:underline font-bold"
          >
            By FE
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}
