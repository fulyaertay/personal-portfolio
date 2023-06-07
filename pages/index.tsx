import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineMedium,
} from "react-icons/ai";
import header from "../public/header.svg";
import Image from "next/legacy/image";
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
export default function Home() {
  return (
    <div>
      <Head>
        <title>Fulya Ertays Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black max-w-full ">
        <section className=" md:px-20  text-center     ">
          <nav className="py-10 px-16 lg:px-0 mb-12 flex text-center md:justify-between ">
            <h1 className="text-xl font-burtons text-white hidden lg:flex ">
              developedbyfe
            </h1>

            <ul className="flex items-center gap-10">
              <li className="text-xl  text-white ">
                <a href="#projects">Projects </a>
              </li>
              <li className="text-xl  text-white ">
                <a href="#about">About </a>
              </li>
              <li className="text-xl text-white ">
                <a href="#contact">Contact </a>
              </li>
              <li className="hidden lg:flex md:flex">
                <a
                  className="bg-gradient-to-r from-cyan-500  hover:to-teal-400  to-teal-800 text-white px-4 py-2 rounded-md ml-8"
                  href="https://www.showwcase.com/fulyaertay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-5 mb-12 ">
            <div>
              <Image src={header} alt="header"></Image>
            </div>

            <h3 className="sm:text-md py-2 md:text-3xl tracking-widest  text-white ">
              Front-End Developer
            </h3>
            <p className="sm:text-sm md:text-lg py-5 leading-8 tracking-widest  text-white   ">
              Providing services for user-friendly web applications. Join me
              down below and collaborate on awesome projects!
            </p>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20  mb-12" id="about">
          <div>
            <h3 className="text-lg text-teal-600 font-medium py-1  md:text-4xl md:text-left lg:text-left mt-12  ">
              About Me
              <div className="border-red-500 border-10 border-b absolute  "></div>
            </h3>
            <div className="sm:flex lg:justify-between  gap-10 ">
              <div>
                <p className="text-sm md:text-md py-2 leading-loose tracking-widest text-gray-80  md:text-left  md:max-w-8xl text-white  ">
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
                <div className="text-left">
                  <a
                    id="get-in-touch"
                    className="bg-gradient-to-r from-cyan-500 tracking-widest hover:to-teal-400  to-teal-800 font-bold text-white p-7 text-center  hover:bg-black  inline-block w-[200px]  md:h-20  mt-10 mb-12"
                    href="https://www.showwcase.com/fulyaertay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className=" md:px-20  mb-5">
          <h3 className="text-lg text-teal-600 font-medium py-1 text-center  my-12 md:text-4xl ">
            My Skills
          </h3>
          <div className="lg:flex text-center justify-center">
            <div className="text-center  shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image alt="front-end-title" src={desing} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-600 text-lg font-medium md:text-2xl pt-8 pb-2">
                  Front-End
                </h4>
                <p className="text-white py-5 md:text-xl">HTML/CSS</p>
                <p className="text-white py-5 md:text-xl">Tailwind CSS</p>
                <p className="text-white py-5 md:text-xl">JavaScript</p>
                <p className="text-white py-5 md:text-xl">React</p>
              </div>
            </div>
            <div className="text-center shadow-lg  rounded-xl my-10 flex-1">
              <div>
                <Image alt="back-end-title" src={code} width={100} height={100}></Image>
                <h4 className="text-lg py-4 text-teal-600  font-medium md:text-2xl  pt-8 pb-2">
                  Back-End
                </h4>
                <p className="text-white py-5 md:text-xl">Python</p>
                <p className="text-white py-5 md:text-xl">Django</p>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image alt="database-title" src={consulting} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-600 text-lg font-medium md:text-2xl  pt-8 pb-2">
                  Databases
                </h4>
                <p className="text-white py-5 md:text-xl">MongoDB</p>
                <p className="text-white py-5 md:text-xl">MSSQL</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 " id="projects">
          <div>
            <h3 className="text-lg text-teal-600 font-medium py-1  text-center mt-5 mb-10 md:text-4xl">
              My Portfolio
            </h3>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:py-8  ">
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fulyaertay/scrimba-tailwind-projects/tree/master/3-solo-project-spotify-clone "
              >
                <Image alt="spotify" src={web1} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Spotify Clone
              </p>
            </div>
            <div className=" flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fulyaertay/mini-blog-app"
              >
                <Image  alt="blog-app" src={web2} className="w-50 h-50"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Mini Blog App</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fulyaertay/react-search-filter"
              >
                <Image alt="search-filter-app" src={web3} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Search Filter</p>
            </div>
            <div className=" flex flex-col items-center  flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fulyaertay/react-image-gallery"
              >
                <Image alt="image-gallery-app" src={web4} className="max-w-full h-auto"></Image>
              </a>
              <p className="font-md p-5 text-white md:text-xl">Image Gallery</p>
            </div>
          </div>
          <div className="flex flex-col gap-5  lg:flex-row lg:flex-wrap lg:py-8  ">
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://scrimba-quiz-app.netlify.app/ "
              >
                <Image alt="quiz-app" src={web5} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                React Quiz App
              </p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fe-photo-store.netlify.app/ "
              >
                <Image alt="photo-store-app" src={web6} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Photo Store App
              </p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fe-vans-app.netlify.app/ "
              >
                <Image alt="vans-app" src={web7} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">Vans App</p>
            </div>
            <div className="flex flex-col items-center flex-1 transition ease-in-out delay-150 hover:-translate-5 hover:scale-110 duration-300 shadow-xl">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fe-tenzies-app.netlify.app/ "
              >
                <Image alt="tenzies-app" src={web8} className="w-50 h-50 "></Image>
              </a>
              <p className="font-md p-5 mt-7 text-white md:text-xl">
                Tenzies Game
              </p>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20  " id="contact">
          <div>
            <h3 className="text-lg text-teal-600 font-medium md:text-left py-1  md:text-4xl mt-12 ">
              Get in Touch
            </h3>
            <p className="text-sm md:text-md py-5 leading-8 tracking-widest  text-white md:text-left  md:max-w-8xl mb-5 ">
              Are you looking for a fast-performing and user-friendly website to
              represent your product or business? or looking for any kind of
              consultation? or want to ask questions? or have some advice for me
              or just want to say <b>Hi 👋</b> in any case feel free to Let me
              know. I will do my best to respond back. 😊 The quickest way to
              reach out to me is via an email.
            </p>
            <div className="text-left">
              <a
                id="get-in-touch"
                className="tracking-widest bg-gradient-to-r from-cyan-500  hover:to-teal-400  to-teal-800 font-bold text-white p-7 text-center  hover:bg-black  inline-block w-[200px] md:h-20  mb-12"
                href="mailto: fulya.ertay@gmail.com"
              >
                Send Mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <hr className="border-gray-600"></hr>
      <footer className="p-5 bg-black  flex justify-center max-w-full  dark:bg-gray-800 shadow-lg">
        <div className="text-4xl flex justify-center gap-16 py-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/fulyaertay"
            className="text-gray-200"
          >
            <AiOutlineDribbble></AiOutlineDribbble>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fulyaertay/"
            className="text-gray-200"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fulyaertay"
            className="text-gray-200"
          >
            <AiFillGithub></AiFillGithub>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@fulyaertay"
            className="text-gray-200"
          >
            <AiOutlineMedium></AiOutlineMedium>
          </a>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.showwcase.com/fulyaertay"
          className="hover:underline font-bold text-gray-200"
        ></a>
      </footer>
    </div>
  );
}
