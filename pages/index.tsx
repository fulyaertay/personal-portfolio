import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineMedium,
  AiOutlineMenu, // Hamburger ikonu için
  AiOutlineClose, // Kapatma ikonu için
} from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
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
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from "framer-motion"; // Framer Motion'ı import ediyoruz

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Scroll değerlerini almak için
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Yaylı animasyon için
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const springY = useSpring(y, springConfig);
  
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

  // Sayfa içi linklere tıklandığında yumuşak kaydırma
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > 
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
        
          <motion.input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    );
  };

  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Fulya Ertays Portfolio</title> 
          <meta name="description" content="Fulya Ertay - Software Engineer Portfolio showcasing projects and skills." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="RM-c9-j8_Ko3MXtk3-P59ua07QJkC-F7aRnTxPPKBP4" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className="bg-white max-w-full">
          <motion.div 
            className="bg-gray-900 md:px-20 sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          > {/* Navbar'ı üste sabitlemek için sticky ve top-0, diğer içeriklerin üzerinde kalması için z-50 */}
            <nav className="py-6 px-6 md:px-16 lg:px-0 flex items-center justify-between container mx-auto"> {/* px-20 yerine px-6 ve container mx-auto */}
              <motion.h1 
                className="text-xl font-burtons text-white"
                whileHover={{ scale: 1.05 }}
              >
                developedbyfe
              </motion.h1>

              {/* Hamburger Menu Button (Mobile) */}
              <div className="md:hidden">
                <motion.button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="text-white text-3xl"
                  whileTap={{ scale: 0.9 }}
                >
                  {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </motion.button>
              </div>

              {/* Navigation Links (Desktop & Mobile Menu) */}
              <AnimatePresence>
                {isMenuOpen ? (
                  <motion.ul 
                    className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:flex md:items-center md:gap-10 md:static md:bg-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a id="about-link" href="#about" onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection('about');
                      }}> {/* Menü linkine tıklayınca kapat */}
                        About
                      </a>
                    </motion.li>
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a href="#projects" id="projects-link" onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection('projects');
                      }}> {/* Menü linkine tıklayınca kapat */}
                        Projects
                      </a>
                    </motion.li>
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a id="contact-link" href="#contact" onClick={() => {
                        setIsMenuOpen(false);
                        scrollToSection('contact');
                      }}> {/* Menü linkine tıklayınca kapat */}
                        Contact
                      </a>
                    </motion.li>
                  </motion.ul>
                ) : (
                  <motion.ul 
                    className="hidden md:flex md:items-center md:gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a id="about-link" href="#about" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        scrollToSection('about');
                      }}>
                        About
                      </a>
                    </motion.li>
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a href="#projects" id="projects-link" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        scrollToSection('projects');
                      }}>
                        Projects
                      </a>
                    </motion.li>
                    <motion.li 
                      className="text-lg text-white hover:text-gray-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <a id="contact-link" href="#contact" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}>
                        Contact
                      </a>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
          </motion.div>
          
          {/* Parallax Hero Section */}
          <section className="md:px-20 text-center relative overflow-hidden">
            {/* Parallax arka plan */}
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ y: springY, opacity }}
            >
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white"></div>
            </motion.div>
    
            <div className="flex flex-col px-10 md:px-0 text-center md:text-left gap-2 mb-12 relative z-10">
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
                <motion.button
                  style={{ display: isVisible ? "block" : "none" }}
                  onClick={goTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaArrowCircleUp />
                </motion.button>
              </div>
             
              <motion.h3 
                className="text-3xl mt-6 py-2 md:text-6xl tracking-widest text-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Fulya Ertay
              </motion.h3>

              <motion.p 
                className="sm:text-md md:text-lg py-5 leading-8 tracking-widest text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I am a Software Engineer and I love to develop and test products for user-friendly web and mobile
                applications.
              </motion.p>
              <div className="text-center md:text-left">
                <motion.a
                  className="tracking-widest border-2 border-blue-500 hover:bg-blue-500 hover:border-none text-gray-900 hover:text-white pt-4 pb-4 text-center inline-block w-[200px] md:h-14 mb-12"
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </section>
          <hr className="border-gray-600"></hr>
          <section className="px-10 md:px-20" id="projects">
            <div>
              <motion.h3 
                className="text-2xl text-blue-500 text-center md:text-left font-medium py-1 mt-5 mb-10 md:text-4xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                My Projects
              </motion.h3>
            </div>
            <div className="flex flex-col">
              {/* Proje Kartları Grid'i */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                {/* Proje Kartı 1: User Manual AI Agent */}
                <motion.div
                  key={1}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://user-manual-asistant.netlify.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">User Manual AI Agent with Gemini API</p>
                    <p className="text-gray-700 text-sm mb-2">
                      An AI Agent answering questions according to PDF.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-user-manual"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/user-manual-asistant"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://user-manual-asistant.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 2: Document Validator */}
                <motion.div
                  key={2}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://document-validator-ai.vercel.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Document Validator App with Mistral AI</p>
                    <p className="text-gray-700 text-sm mb-2">
                      A React app which allows users to directly input a Google Docs URL for document analysis, extracting its content and analyzing it.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-doc-validator"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/document_validator"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://document-validator-ai.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 3: FalcoWMS */}
                <motion.div
                  key={3}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://github.com/fulyaertay/FalcoWMS-Is-Yonetim-Sistemi", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">FalcoWMS Web Project</p>
                    <p className="text-gray-700 text-sm mb-2">
                      I developed FalcoWMS for the <a className="underline text-blue-800" href="https://networksystem.com.tr" target="_blank" rel="noopener noreferrer">Network System </a>Company. It provides to track employee tasks based on their locations.Using technologies like; React JS, Node JS, Tailwind CSS, MUI Component Library, Google Maps API and The JavaScript Geolocation API.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-falcowms"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/FalcoWMS-Is-Yonetim-Sistemi"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 4: Spotify Clone */}
                <motion.div
                  key={4}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://scrimba-spotify-clone.netlify.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Spotify Clone</p>
                    <p className="text-gray-700 text-sm mb-2">
                      The clone project is developed using Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-spotify"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/scrimba-tailwind-projects/tree/master/3-solo-project-spotify-clone"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://scrimba-spotify-clone.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 5: Jonquils Book Shop */}
                <motion.div
                  key={5}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://github.com/fulyaertay/react-mysql-book-application/tree/main", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Jonquils Book Shop</p>
                    <p className="text-gray-700 text-sm mb-2">
                      The application developed using React JS, Express JS, Cypress JS and MySql database.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-bookshop"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/react-mysql-book-application/tree/main"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 6: Mini Blog App */}
                <motion.div
                  key={6}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://mini-blog-website.netlify.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Mini Blog App</p>
                    <p className="text-gray-700 text-sm mb-2">
                      Developed the blog application that it can be used to add/list blogs and designed using Javascript, HTML, Materialize CSS and Firebase.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-miniblog"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/mini-blog-app"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://mini-blog-website.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 7: Quiz App */}
                <motion.div
                  key={7}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://scrimba-quiz-app.netlify.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Quiz App</p>
                    <p className="text-gray-700 text-sm mb-2">
                      Created interactive quiz app using React. The Trivia API is used to list questions.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-quizapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/react-basics/tree/master/8-quiz-app"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://scrimba-quiz-app.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 8: VanLife App */}
                <motion.div
                  key={8}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://fe-vans-app.netlify.app/", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">VanLife App</p>
                    <p className="text-gray-700 text-sm mb-2">
                      Build rental van travel app using React Router 6 and Firebase.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-vanlife"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/react-router-v6"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://fe-vans-app.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
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
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 9: DJAVAC */}
                <motion.div
                  key={9}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://github.com/fulyaertay/DJAVAC-App", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">DJAVAC Project-Bachelors Thesis</p>
                    <p className="text-gray-700 text-sm mb-2">
                      My Bachelors Thesis project aims to enable the Java programmer to write higher quality codes by spending less time and It works as an automated loaded engine for java methods compilation over the network using technologies like Java and RMI Server.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-djavac"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/DJAVAC-App"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

                {/* Proje Kartı 10: Device Tracking App */}
                <motion.div
                  key={10}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://github.com/fulyaertay/device-tracking-app", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Device Tracking App(Internship Project)</p>
                    <p className="text-gray-700 text-sm mb-2">
                      My internship project aims to device tracking system for 9 Eylül University employees. I used technologies like .NET, C# and MSSQL languages
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-device-tracking"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/device-tracking-app"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

              </div> {/* Grid sonu */}
            </div> {/* flex-col sonu */}
          </section>
          <hr className="border-gray-600"></hr>
          <section className="px-10 md:px-20 mb-12" id="about">
            <div>
              <motion.h3 
                className="text-2xl text-blue-500 font-medium py-1 md:text-4xl md:text-left lg:text-left mt-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Me
                <div className="border-red-500 border-10 border-b absolute"></div>
              </motion.h3>
              <div className="sm:flex lg:justify-between gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm md:text-md py-5 leading-loose tracking-widest text-gray-80 md:text-left md:max-w-8xl text-gray-900">
                    
                  I have been actively involved in the software development industry for 10 years, gaining experience across various sectors. These are;

  QA Testing,
  Project Management,
  Web Development,
  Data Science and
  Generative AI.
  My ultimate goal is to use these skills to develop innovative solutions for complex problems. I am committed to continuous learning and self-improvement. 
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="md:px-20 mb-5">
            <div className="lg:flex text-center justify-center">
              <motion.div 
                className="text-center shadow-lg rounded-xl my-10 flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
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
                  <p className="text-gray-900 py-5 md:text-md">HTML/CSS</p>
                  <p className="text-gray-900 py-5 md:text-md">Tailwind CSS</p>
                  <p className="text-gray-900 py-5 md:text-md">JavaScript</p>
                  <p className="text-gray-900 py-5 md:text-md">React JS</p>
                  <p className="text-gray-900 py-5 md:text-md">React Native</p>
                </div>
              </motion.div>
              <motion.div 
                className="text-center shadow-lg rounded-xl my-10 flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <Image
                    alt="back-end-title"
                    src={code}
                    width={100}
                    height={100}
                  ></Image>
                  <h4 className="text-lg py-4 text-blue-500 font-medium md:text-2xl  pt-8 pb-2">
                    Back-End
                  </h4>
                  <p className="text-gray-900 py-5 md:text-md">Python</p>
                  <p className="text-gray-900 py-5 md:text-md">Django</p>
                  <p className="text-gray-900 py-5 md:text-md">Node JS</p>
                  <p className="text-gray-900 py-5 md:text-md">Express JS</p>
                </div>
              </motion.div>
              <motion.div 
                className="text-center shadow-lg rounded-xl my-10 flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
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
                  <p className="text-gray-900 py-5 md:text-md">MongoDB</p>
                  <p className="text-gray-900 py-5 md:text-md">MYSQL</p>
                  <p className="text-gray-900 py-5 md:text-md">Firebase</p>
                </div>
              </motion.div>
              <motion.div 
                className="text-center shadow-lg rounded-xl my-10 flex-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
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
                  <p className="text-gray-900 py-5 md:text-md">Cypress JS</p>
                  <p className="text-gray-900 py-5 md:text-md">Codecept JS</p>
                  <p className="text-gray-900 py-5 md:text-md">Selenium IDE</p>
                </div>
              </motion.div>
            </div>
          </section>
          <hr className="border-gray-100"></hr>

          <section className="px-10 md:px-20 pb-12" id="contact">
            <div>
              <motion.h3 
                className="text-2xl text-blue-500 font-medium text-center py-1 md:text-4xl mt-12 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h3>
              <ContactForm />
            </div>
          </section>
        </main>

        <hr className="border-gray-600"></hr>
        <motion.footer 
          className="p-5 bg-gray-900 flex justify-center max-w-full dark:bg-gray-800 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl flex justify-center gap-16 py-3">
           
            <motion.a
              id="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/fulyaertay/"
              className="text-gray-200 hover:text-gray-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillLinkedin></AiFillLinkedin>
            </motion.a>
            <motion.a
              id="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fulyaertay"
              className="text-gray-200 hover:text-gray-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiFillGithub></AiFillGithub>
            </motion.a>
            <motion.a
              id="medium"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@fulyaertay"
              className="text-gray-200 hover:text-gray-400"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <AiOutlineMedium></AiOutlineMedium>
            </motion.a>
          </div>
        </motion.footer>
      </div>
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background: linear-gradient(to bottom, #f0f9ff, #e0f2fe);
        }
        .custom-cursor {
          display: none;
        }
      `}</style>
    </>
  );
}