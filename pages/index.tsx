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
              <li className="text-lg  text-white ">
                <a href="#projects" id="projects-link">
                  Projects{" "}
                </a>
              </li>
              <li className="text-lg  text-white ">
                <a id="about-link" href="#about">
                  About{" "}
                </a>
              </li>
              <li className="text-lg text-white ">
                <a id="contact-link" href="#contact">
                  Contact{" "}
                </a>
              </li>
              <li className="hidden lg:flex md:flex">
                <a
                  id="resume-link"
                  className="bg-gradient-to-r text-lg from-cyan-500  hover:to-teal-400  to-teal-800 text-white px-4 py-2  ml-8"
                  href="https://www.showwcase.com/fulyaertay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col px-10 md:px-0 text-center md:text-left gap-2 mb-12  ">
            <h3 className="text-3xl py-2 md:text-6xl tracking-widest  text-white ">
              Fulya Ertay
            </h3>

            <p className="sm:text-md md:text-lg py-5 leading-8 tracking-widest  text-white   ">
              A Front-End developer who provides services for user-friendly web
              applications.
            </p>
            <div className="text-center md:text-left">
              <a
                className="tracking-widest border-2 border-cyan-500 hover:bg-gradient-to-r hover:border-none hover:from-cyan-500  hover:to-teal-800  text-white pt-4 pb-4 text-center  hover:bg-black  inline-block w-[200px] md:h-14  mb-12"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20 " id="projects">
          <div>
            <h3 className="text-2xl text-teal-600 text-center md:text-left font-medium py-1  mt-5 mb-10 md:text-4xl">
              My Portfolio
            </h3>
          </div>
          <div className="flex flex-col  ">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 ">
              <div>
                {" "}
                <Image
                  alt="spotify"
                  src={web1}
                  width={550}
                  height={250}
                ></Image>
              </div>
              <div>
                <p className="font-md mt-7 text-white text-2xl">
                  Spotify Clone
                </p>
                <p className="font-md mt-7 text-gray-300">
                  The clone project is developed using Tailwind CSS.
                </p>
                <div className="text-left flex items-center gap-8">
                  <a
                    className="tracking-widest    text-white pt-4 pb-7 text-left   inline-block  md:h-14  "
                    href="https://scrimba-spotify-clone.netlify.app/"
                  >
                    <span className="inline-block underline">
                      Visit Site{" "}
                      <svg
                        className="inline-block"
                        width="30"
                        height="10"
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                        />
                        <path
                          fill="#ffffff"
                          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>{" "}
                    </span>
                  </a>

                  <a
                    id="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/fulyaertay/scrimba-tailwind-projects/tree/master/3-solo-project-spotify-clone"
                    className="text-gray-200 text-5xl pt-4 pb-7 hover:text-slate-400"
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                </div>
              </div>

              <div className="mt-10">
                {" "}
                <Image
                  alt="mini-blog-app"
                  src={web2}
                  width={550}
                  height={300}
                ></Image>
              </div>
              <div>
                <p className="font-md  text-white text-2xl mt-10">
                  Mini Blog App
                </p>
                <p className="font-md mt-7 text-gray-300">
                  Developed the blog application that it can be used to add/list
                  blogs and designed using Javascript, HTML, Materialize CSS and
                  Firebase.
                </p>
                <div className="text-left flex items-center gap-8">
                  <a
                    className="tracking-widest    text-white pt-4 pb-7 text-left   inline-block  md:h-14  "
                    href="https://mini-blog-website.netlify.app/"
                  >
                    <span className="inline-block underline">
                      Visit Site{" "}
                      <svg
                        className="inline-block"
                        width="30"
                        height="10"
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                        />
                        <path
                          fill="#ffffff"
                          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>{" "}
                    </span>
                  </a>

                  <a
                    id="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/fulyaertay/mini-blog-app"
                    className="text-gray-200 text-5xl pt-4 pb-7 hover:text-slate-400"
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                </div>
              </div>
              <div className="mt-10">
                {" "}
                <Image
                  alt="quiz-app"
                  src={web5}
                  width={550}
                  height={300}
                ></Image>
              </div>
              <div>
                <p className="font-md  text-white text-2xl mt-10">Quiz App</p>
                <p className="font-md mt-7 text-gray-300">
                  Created interactive quiz app using React. The Trivia API is
                  used to list questions.
                </p>
                <div className="text-left flex items-center gap-8">
                  <a
                    className="tracking-widest    text-white pt-4 pb-7 text-left   inline-block  md:h-14  "
                    href="https://scrimba-quiz-app.netlify.app/"
                  >
                    <span className="inline-block underline">
                      Visit Site{" "}
                      <svg
                        className="inline-block"
                        width="30"
                        height="10"
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                        />
                        <path
                          fill="#ffffff"
                          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>{" "}
                    </span>
                  </a>

                  <a
                    id="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/fulyaertay/react-basics/tree/master/8-quiz-app"
                    className="text-gray-200 text-5xl pt-4 pb-7 hover:text-slate-400"
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                </div>
              </div>

              <div className="mt-10">
                {" "}
                <Image
                  alt="vans-app"
                  src={web7}
                  width={550}
                  height={300}
                ></Image>
              </div>
              <div>
                <p className="font-md  text-white text-2xl mt-10">
                  VanLife App
                </p>
                <p className="font-md mt-7 text-gray-300">
                  Build rental van travel app using React Router 6 and Firebase.
                </p>
                <div className="text-left flex items-center gap-8">
                  <a
                    className="tracking-widest    text-white pt-4 pb-7 text-left   inline-block  md:h-14  "
                    href="https://fe-vans-app.netlify.app/"
                  >
                    <span className="inline-block underline">
                      Visit Site{" "}
                      <svg
                        className="inline-block"
                        width="30"
                        height="10"
                        viewBox="0 0 16 9"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#ffffff"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                        />
                        <path
                          fill="#ffffff"
                          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>{" "}
                    </span>
                  </a>

                  <a
                    id="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/fulyaertay/react-router-v6"
                    className="text-gray-200 text-5xl pt-4 pb-7 hover:text-slate-400"
                  >
                    <AiFillGithub></AiFillGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20  mb-12" id="about">
          <div>
            <h3 className="text-2xl text-teal-600 font-medium py-1  md:text-4xl md:text-left lg:text-left mt-12  ">
              About Me
              <div className="border-red-500 border-10 border-b absolute  "></div>
            </h3>
            <div className="sm:flex lg:justify-between  gap-10 ">
              <div>
                <p className="text-sm md:text-md py-5 leading-loose tracking-widest text-gray-80  md:text-left  md:max-w-8xl text-white  ">
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
                    id="see-resume"
                    className="tracking-widest border-2 border-cyan-500 hover:bg-gradient-to-r hover:border-none hover:from-cyan-500  hover:to-teal-800  text-white pt-4 pb-4 text-center  hover:bg-black  inline-block w-[200px] md:h-14  mb-12"
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
          <h3 className="text-2xl text-teal-600 font-medium py-1 text-center  my-12 md:text-4xl ">
            My Skills
          </h3>
          <div className="lg:flex text-center justify-center">
            <div className="text-center  shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image
                  alt="front-end-title"
                  src={desing}
                  width={100}
                  height={100}
                ></Image>
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
                <Image
                  alt="back-end-title"
                  src={code}
                  width={100}
                  height={100}
                ></Image>
                <h4 className="text-lg py-4 text-teal-600  font-medium md:text-2xl  pt-8 pb-2">
                  Back-End
                </h4>
                <p className="text-white py-5 md:text-xl">Python</p>
                <p className="text-white py-5 md:text-xl">Django</p>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image
                  alt="database-title"
                  src={consulting}
                  width={100}
                  height={100}
                ></Image>
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

        <section className="px-10 md:px-20  " id="contact">
          <div>
            <h3 className="text-2xl text-teal-600 font-medium md:text-left py-1  md:text-4xl mt-12 ">
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
                id="send-mail"
                className="tracking-widest border-2 border-cyan-500 hover:bg-gradient-to-r hover:border-none hover:from-cyan-500  hover:to-teal-800  text-white pt-4 pb-4 text-center  hover:bg-black  inline-block w-[200px] md:h-14  mb-12"
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
            id="dribble"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/fulyaertay"
            className="text-gray-200"
          >
            <AiOutlineDribbble></AiOutlineDribbble>
          </a>

          <a
            id="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fulyaertay/"
            className="text-gray-200"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a
            id="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fulyaertay"
            className="text-gray-200"
          >
            <AiFillGithub></AiFillGithub>
          </a>
          <a
            id="medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@fulyaertay"
            className="text-gray-200"
          >
            <AiOutlineMedium></AiOutlineMedium>
          </a>
        </div>
      </footer>
    </div>
  );
}
