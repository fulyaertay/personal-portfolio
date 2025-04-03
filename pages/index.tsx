import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineMedium,
  AiOutlineMenu, // Hamburger ikonu için
  AiOutlineClose, // Kapatma ikonu için
} from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import header from "../public/header.svg";
import Image from "next/legacy/image";
import testrelic from "../public/testrelic.png";
import desing from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import test from "../public/test.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web5 from "../public/web7.png";
import web7 from "../public/web9.png";
import falcowms from "../public/falcowms.png";
import doc_validator from "../public/doc_validator.png";
import bookApplication from "../public/book-homepage.png"
import eylul from "../public/9eylul.png"
import djavac from "../public/djavac.png"
import user_manual_agent from "../public/web11.png"
import { supabase } from '../supabaseClient'; // Supabase istemcisini içe aktarın

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Navbar menü durumu için state
  interface ScrollToTopProps {
    bottom: string,
    fontSize:  string,
    zIndex: number,
    cursor:  string,
    color:  string,
    right:  string,
    background:  string,
    borderRadius:  string,
    padding:  string,
    border:  string,
    opacity: number,
  }
  const buttonProps: ScrollToTopProps = {
   
    bottom: "40px",
    fontSize: "3rem",
    zIndex: 1,
    cursor: "pointer",
    color: "white",
    right: "2%",
    background: "none",
    borderRadius: "50px",
    padding: "0px",
    border: "none",
    opacity: 0.7,
  }
  const ScrollToTop = () => {
    return (
      <button
        style={buttonProps}
      >
        <FaArrowCircleUp />
      </button>
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const { data, error } = await supabase
        .from('contact_form')
        .insert([{ name, email, message }]);

      if (error) {
        alert("There is an error " + error.message);
      } else {
        alert("Your message is sent!");
        setName("");
        setEmail("");
        setMessage("");
      }
    };

    return (
      /* Formu saran div'e mx-auto tekrar eklendi */
      <div className="max-w-md mx-auto"> 
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
        
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Fulya Ertay's Portfolio</title> {/* Küçük bir düzeltme */}
        <meta name="description" content="Fulya Ertay - Software Engineer Portfolio showcasing projects and skills." /> {/* Daha açıklayıcı description */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="RM-c9-j8_Ko3MXtk3-P59ua07QJkC-F7aRnTxPPKBP4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white max-w-full">
        <div className="bg-gray-900 md:px-20 sticky top-0 z-50"> {/* Navbar'ı üste sabitlemek için sticky ve top-0, diğer içeriklerin üzerinde kalması için z-50 */}
          <nav className="py-6 px-6 md:px-16 lg:px-0 flex items-center justify-between container mx-auto"> {/* px-20 yerine px-6 ve container mx-auto */}
            <h1 className="text-xl font-burtons text-white">
              developedbyfe
            </h1>

            {/* Hamburger Menu Button (Mobile) */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
                {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>

            {/* Navigation Links (Desktop & Mobile Menu) */}
            <ul className={`
              md:flex md:items-center md:gap-10
              ${isMenuOpen ? 'absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6' : 'hidden'}
            `}>
              <li className="text-lg text-white hover:text-gray-300">
                <a id="about-link" href="#about" onClick={() => setIsMenuOpen(false)}> {/* Menü linkine tıklayınca kapat */}
                  About
                </a>
              </li>
              <li className="text-lg text-white hover:text-gray-300">
                <a href="#projects" id="projects-link" onClick={() => setIsMenuOpen(false)}> {/* Menü linkine tıklayınca kapat */}
                  Projects
                </a>
              </li>
              <li className="text-lg text-white hover:text-gray-300">
                <a id="contact-link" href="#contact" onClick={() => setIsMenuOpen(false)}> {/* Menü linkine tıklayınca kapat */}
                  Contact
                </a>
              </li>
              
            </ul>
          </nav>
</div>
        <section className=" md:px-20  text-center     ">
    
          <div className="flex flex-col px-10 md:px-0 text-center md:text-left gap-2 mb-12  ">
            <div
              style={{
                position: "fixed",
                bottom: "40px",
                fontSize: "3rem",
                zIndex: 1,
                cursor: "pointer",
                color: "gray",
                right: "2%",
                background: "none",
                borderRadius: "50px",
                padding: "0px",
                border: "none",
                opacity: 0.7,
              }}
            >
              <button
                style={{ display: isVisible ? "block" : "none" }}
                onClick={goTop}
              >
                <FaArrowCircleUp />
              </button>
            </div>
           
            <h3 className="text-3xl py-2 md:text-6xl tracking-widest  text-blue-500 ">
              Fulya Ertay
            </h3>

            <p className="sm:text-md md:text-lg py-5 leading-8 tracking-widest  text-gray-900   ">
              I am Software Engineer and I love to develop and test products for user-friendly web and mobile
              applications.
            </p>
            <div className="text-center md:text-left">
              <a
                className="tracking-widest border-2 border-blue-500 hover:bg-blue-500  hover:border-none  text-gray-900 hover:text-white pt-4 pb-4 text-center   inline-block w-[200px] md:h-14  mb-12"
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
            <h3 className="text-2xl text-blue-500 text-center md:text-left font-medium py-1  mt-5 mb-10 md:text-4xl">
              My Projects
            </h3>
          </div>
          <div className="flex flex-col">
            {/* Proje Kartları Grid'i */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"> {/* Gap artırıldı */}

              {/* Proje Kartı 1: User Manual AI Agent (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="User Manual AI Agent Thumbnail"
                    src={user_manual_agent}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded" 
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1"> {/* Kalan alanı doldur */}
                  <p className="font-bold text-lg mb-1 text-gray-900">User Manual AI Agent with Gemini API </p> {/* Boyut ayarlandı */}
                  <p className="text-gray-700 text-sm mb-2"> {/* Boyut ayarlandı */}
                    An AI Agent answering questions according to PDF.
                  </p>
                  <div className="flex items-center gap-3"> {/* Linkler, gap ayarlandı */}
                    <a
                      id="github-user-manual"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/user-manual-asistant"
                      className="text-gray-900 text-3xl hover:text-slate-400" /* Boyut ayarlandı */
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm" /* Boyut ayarlandı */
                      href="https://user-manual-asistant.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16" /* Boyut ayarlandı */
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" // Rengi inherit et
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Proje Kartı 2: Document Validator (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Document Validator Thumbnail"
                    src={doc_validator}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">Document Validator App with Mistral AI </p>
                  <p className="text-gray-700 text-sm mb-2">
                    A React app which allows users to directly input a Google Docs URL for document analysis, extracting its content and analyzing it.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-doc-validator"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/document_validator"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm"
                      href="https://document-validator-ai.vercel.app/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Proje Kartı 3: FalcoWMS (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="FalcoWMS Thumbnail"
                    src={falcowms}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">FalcoWMS Web Project</p>
                  <p className="text-gray-700 text-sm mb-2">
                    I developed FalcoWMS for the <a className="underline text-blue-800" href="https://networksystem.com.tr" target="_blank" rel="noopener noreferrer">Network System </a>Company. It provides to track employee tasks based on their locations.Using technologies like; React JS, Node JS, Tailwind CSS, MUI Component Library, Google Maps API and The JavaScript Geolocation API.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-falcowms"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/FalcoWMS-Is-Yonetim-Sistemi"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    {/* Visit Site link yok */}
                  </div>
                </div>
              </div>

              {/* Proje Kartı 4: Spotify Clone (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Spotify Clone Thumbnail"
                    src={web1}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">Spotify Clone</p>
                  <p className="text-gray-700 text-sm mb-2">
                    The clone project is developed using Tailwind CSS.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/scrimba-tailwind-projects/tree/master/3-solo-project-spotify-clone"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm"
                      href="https://scrimba-spotify-clone.netlify.app/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Proje Kartı 5: Jonquils Book Shop (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Jonquils Book Shop Thumbnail"
                    src={bookApplication}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">Jonquils Book Shop</p>
                  <p className="text-gray-700 text-sm mb-2">
                    The application developed using React JS, Express JS, Cypress JS and MySql database.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-bookshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/react-mysql-book-application/tree/main"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                     {/* Visit Site link yok */}
                  </div>
                </div>
              </div>

              {/* Proje Kartı 6: Mini Blog App (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Mini Blog App Thumbnail"
                    src={web2}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">
                    Mini Blog App
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    Developed the blog application that it can be used to add/list
                    blogs and designed using Javascript, HTML, Materialize CSS and
                    Firebase.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-miniblog"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/mini-blog-app"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm"
                      href="https://mini-blog-website.netlify.app/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

               {/* Proje Kartı 7: Quiz App (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Quiz App Thumbnail"
                    src={web5}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">Quiz App</p>
                  <p className="text-gray-700 text-sm mb-2">
                    Created interactive quiz app using React. The Trivia API is
                    used to list questions.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-quizapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/react-basics/tree/master/8-quiz-app"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm"
                      href="https://scrimba-quiz-app.netlify.app/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

               {/* Proje Kartı 8: VanLife App (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="VanLife App Thumbnail"
                    src={web7}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">
                    VanLife App
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    Build rental van travel app using React Router 6 and Firebase.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-vanlife"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/react-router-v6"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="tracking-widest text-gray-900 text-left inline-block text-sm"
                      href="https://fe-vans-app.netlify.app/"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <span className="inline-block underline hover:text-gray-600">
                        Visit Site{" "}
                        <svg
                          className="inline-block"
                          width="16"
                          height="9"
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" />
                          <path d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                        </svg>{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Proje Kartı 9: DJAVAC (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="DJAVAC Thumbnail"
                    src={djavac}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">
                    DJAVAC Project-Bachelors Thesis
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    My Bachelors Thesis project aims to enable the Java programmer to write higher quality codes by spending less time
                    and It works as an automated loaded engine for java methods compilation over the network using technologies like Java and RMI Server.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-djavac"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/DJAVAC-App"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                     {/* Visit Site link yok */}
                  </div>
                </div>
              </div>

               {/* Proje Kartı 10: Device Tracking App (Thumbnail Sol Layout) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex gap-4 p-4 items-start">
                {/* Thumbnail */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded"> {/* Arka plan eklendi, rounded buraya taşındı */}
                  <Image
                    alt="Device Tracking App Thumbnail"
                    src={eylul}
                    layout="fill"
                    objectFit="contain" /* contain olarak değiştirildi */
                    className="rounded"
                  />
                </div>
                {/* İçerik */}
                <div className="flex-1">
                  <p className="font-bold text-lg mb-1 text-gray-900">
                    Device Tracking App(Internship Project)
                  </p>
                  <p className="text-gray-700 text-sm mb-2">
                    My internship project aims to device tracking system for 9 Eylül University employees. I used technologies like .NET, C# and MSSQL languages
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      id="github-device-tracking"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/fulyaertay/device-tracking-app"
                      className="text-gray-900 text-3xl hover:text-slate-400"
                    >
                      <AiFillGithub />
                    </a>
                     {/* Visit Site link yok */}
                  </div>
                </div>
              </div>

            </div> {/* Grid sonu */}
          </div> {/* flex-col sonu */}
        </section>
        <hr className="border-gray-600"></hr>
        <section className="px-10 md:px-20  mb-12" id="about">
          <div>
            <h3 className="text-2xl text-blue-500 font-medium py-1  md:text-4xl md:text-left lg:text-left mt-12  ">
              About Me
              <div className="border-red-500 border-10 border-b absolute  "></div>
            </h3>
            <div className="sm:flex lg:justify-between  gap-10 ">
              <div>
                <p className="text-sm md:text-md py-5 leading-loose tracking-widest text-gray-80  md:text-left  md:max-w-8xl text-gray-900  ">
                  I am a web developer and test engineer based out of İzmir, Turkey.
                  Armed with a associate degree in computer programming and a
                  bachelor degree in computer engineering, I love building and testing apps
                  that solve real-world problems.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        <section className=" md:px-20  mb-5">
          <div className="lg:flex text-center justify-center">
            <div className="text-center  shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image
                  alt="front-end-title"
                  src={desing}
                  width={100}
                  height={100}
                ></Image>
                <h4 className="py-4 text-blue-500 text-lg font-medium md:text-2xl pt-8 pb-2">
                  Front-End
                </h4>
                <p className="text-gray-900  py-5 md:text-md">HTML/CSS</p>
                <p className="text-gray-900  py-5 md:text-md">Tailwind CSS</p>
                <p className="text-gray-900  py-5 md:text-md">JavaScript</p>
                <p className="text-gray-900  py-5 md:text-md">React JS</p>
                <p className="text-gray-900  py-5 md:text-md">React Native</p>
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
                <h4 className="text-lg py-4 text-blue-500  font-medium md:text-2xl  pt-8 pb-2">
                  Back-End
                </h4>
                <p className="text-gray-900  py-5 md:text-md">Python</p>
                <p className="text-gray-900  py-5 md:text-md">Django</p>
                <p className="text-gray-900  py-5 md:text-md">Node JS</p>
                <p className="text-gray-900  py-5 md:text-md">Express JS</p>
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
                <h4 className="py-4 text-blue-500 text-lg font-medium md:text-2xl  pt-8 pb-2">
                  Databases
                </h4>
                <p className="text-gray-900  py-5 md:text-md">MongoDB</p>
                <p className="text-gray-900  py-5 md:text-md">MYSQL</p>
                <p className="text-gray-900  py-5 md:text-md">Firebase</p>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl my-10 flex-1">
              <div>
                <Image
                  alt="database-title"
                  src={test}
                  width={100}
                  height={100}
                ></Image>
                <h4 className="py-4 text-blue-500 text-lg font-medium md:text-2xl  pt-8 pb-2">
                  Test Frameworks
                </h4>
                <p className="text-gray-900  py-5 md:text-md">Cypress JS</p>
                <p className="text-gray-900  py-5 md:text-md">Codecept JS</p>
                <p className="text-gray-900  py-5 md:text-md">Selenium IDE</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-gray-100"></hr>

        <section className="px-10 md:px-20 pb-12" id="contact">
          <div>
            <h3 className="text-2xl text-blue-500 font-medium text-center py-1 md:text-4xl mt-12 mb-8"> {/* md:text-left kaldırıldı, text-center korundu */}
              Get in Touch
            </h3>
            <ContactForm />
          </div>
        </section>
      </main>

      <hr className="border-gray-600"></hr>
      <footer className="p-5 bg-gray-900  flex justify-center max-w-full  dark:bg-gray-800 shadow-lg">
        <div className="text-4xl flex justify-center gap-16 py-3">
         

          <a
            id="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fulyaertay/"
            className="text-gray-200 hover:text-gray-400"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
          <a
            id="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fulyaertay"
            className="text-gray-200 hover:text-gray-400"
          >
            <AiFillGithub></AiFillGithub>
          </a>
          <a
            id="medium"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@fulyaertay"
            className="text-gray-200 hover:text-gray-400"
          >
            <AiOutlineMedium></AiOutlineMedium>
          </a>
        </div>
      </footer>
    </div>
  );
}
