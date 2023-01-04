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

export default function Home() {
  return (
    <>
      <Head>
        <title>Fulya Ertay Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyfe</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"></BsFillMoonStarsFill>
              </li>
              <li>
                <a  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 roundedn-md ml-8"href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Fulya Ertay</h2>
            <h3 className="text-2xl py-2">Junior Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">Providing services for user-friendly web applications. Join me down below and collaborate on awesome projects! </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/Fulinin_"><AiFillTwitterCircle></AiFillTwitterCircle></a>
            <a href="https://www.linkedin.com/in/fulya-ertay-40a593156/"><AiFillLinkedin></AiFillLinkedin></a>
            <a href="https://github.com/fulyaertay"><AiFillGithub></AiFillGithub></a>
          
          
          </div>
          <div className="relative rounded-full w-80 h-80 mt-20 mx-auto" >
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
            <div>
              <div>
                <Image src={desing} width={100} height={100}></Image>
                <h4 className="py-4 text-teal-800 text-lg font-medium pt-8 pb-2">Front-End</h4>
                <p className="text-gray-800 py-1">HTML</p>
                <p className="text-gray-800 py-1">CSS</p>
                <p className="text-gray-800 py-1">JavaScript</p>
                <p className="text-gray-800 py-1">React</p>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
