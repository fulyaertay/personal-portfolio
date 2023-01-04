import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from "next/legacy/image"
const inter = Inter({ subsets: ["latin"] });
import fe from '../public/dev-fe-wave.png';
import desing from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import { useState } from "react";
export default function Home() {
  const[darkMode,setDarkMode]=useState(false);
  return (
    < div className={darkMode ? 'dark':""}>
      <Head>
        <title>Fulya Ertay Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyfe</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
              </li>
              <li>
                <a  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 roundedn-md ml-8"href="https://www.showwcase.com/fulyaertay">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Fulya Ertay</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Junior Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Providing services for user-friendly web applications. Join me down below and collaborate on awesome projects! </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/Fulinin_"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            <a href="https://www.linkedin.com/in/fulya-ertay-40a593156/"><AiFillLinkedin></AiFillLinkedin></a>
            <a href="https://github.com/fulyaertay"><AiFillGithub></AiFillGithub></a>
          
          
          </div>
          <div className="relative rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96" >
            <Image layout="fill" objectFit="contain" src={fe}></Image>
          </div>
        </section>
        <section>
          <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
          Since the beginning of my journey as a front-end
              developer, I've done remote work for
          <span className="text-teal-800"> startups </span>
              and collaborated with development team to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8">
              I offer from a wide range of services, including designing and
              programming.
            </p>
            </div>
            <div  className="lg:flex gap-11 text-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div>
                <Image src={desing} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">Front-End</h4>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">CSS</p>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div>
                <Image src={code} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">Back-End</h4>
                <p className="text-gray-800 py-1">Python</p>
                <p className="text-gray-800 py-1">Django</p>
             
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div>
                <Image src={consulting} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">Databases</h4>
                <p className="text-gray-800 py-1">MongoDB</p>
                <p className="text-gray-800 py-1">MSSQL</p>
               
              </div>
            </div>
            </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1"> Portfolio

            </h3>
          </div>
          <div className="flex flex-col gap-5 py-5 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <a href="https://github.com/fulyaertay/react-book-list"><Image src={web1} className="rounded-lg object-contain" width={'100%'} height={'100%'} layout="responsive"></Image></a>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://github.com/fulyaertay/mini-blog-app"><Image src={web2} className="rounded-lg object-contain" width={'100%'} height={'100%'} layout="responsive"></Image></a>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://github.com/fulyaertay/react-search-filter"><Image src={web3} className="rounded-lg object-contain" width={'100%'} height={'100%'} layout="responsive"></Image></a>
          </div>
          <div className="basis-1/3 flex-1">
            <a href="https://github.com/fulyaertay/react-image-gallery"><Image src={web4} className="rounded-lg object-contain" width={'100%'} height={'100%'} layout="responsive"></Image></a>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}
