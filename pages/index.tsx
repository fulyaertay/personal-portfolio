import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
  AiOutlineMedium,
  AiOutlineMenu, // Hamburger ikonu için
  AiOutlineClose, // Kapatma ikonu için
  AiOutlineArrowRight,
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
import Link from 'next/link';
import { useRouter } from 'next/router';

// Shadcn UI components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Home() {
  const router = useRouter();
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

  // Sayfa içi linklere tıklandığında yumuşak kaydırma
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        
      });
    }
  };

  // Menü linklerine tıklandığında
  const handleMenuClick = (sectionId: string) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  // URL hash değişikliğini dinle
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        scrollToSection(id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Contact form using Shadcn UI Form
  const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
      },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      const { data, error } = await supabase
        .from('contact_form')
        .insert([values]);

      if (error) {
        alert("There is an error " + error.message);
      } else {
        alert("Your message is sent!");
        form.reset();
      }
    };

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit <AiOutlineArrowRight className="ml-2" />
          </Button>
        </form>
      </Form>
    );
  };

  // Project Card Component
  const ProjectCard = ({ title, description, githubUrl, liveUrl, image }: {
    title: string;
    description: string;
    githubUrl: string;
    liveUrl?: string;
    image?: string;
  }) => {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {image && (
          <CardContent>
            <Image
              src={image}
              alt={title}
              width={400}
              height={200}
              objectFit="cover"
              className="rounded-md"
            />
          </CardContent>
        )}
        <CardFooter className="flex gap-4">
          <Button variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <AiFillGithub className="mr-2" /> GitHub
            </a>
          </Button>
          {liveUrl && (
            <Button asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  // Skill Card Component
  const SkillCard = ({ title, skills, icon }: {
    title: string;
    skills: string[];
    icon: any;
  }) => {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Image src={icon} alt={title} width={100} height={100} />
          </div>
          <CardTitle className="text-center text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <div className="min-h-screen">
        <Head>
          <title>Fulya Ertay Portfolio</title> 
          <meta name="description" content="Fulya Ertay - Software Engineer Portfolio showcasing projects and skills." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="RM-c9-j8_Ko3MXtk3-P59ua07QJkC-F7aRnTxPPKBP4" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className="bg-white max-w-full">
          <div className="bg-background border-b fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-xl font-burtons text-foreground hover:scale-105 transition-transform">
                developedbyfe
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <AiOutlineMenu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4">
                    <button 
                      onClick={() => handleMenuClick('about')}
                      className="w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                    >
                      About
                    </button>
                    <button 
                      onClick={() => handleMenuClick('projects')}
                      className="w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                    >
                      Projects
                    </button>
                    <button 
                      onClick={() => handleMenuClick('contact')}
                      className="w-full text-left px-4 py-2 hover:bg-accent rounded-md"
                    >
                      Contact
                    </button>
                  </nav>
                </SheetContent>
              </Sheet>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center md:space-x-6">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
          
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20 text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl text-foreground mb-6">
                Fulya Ertay
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I am a Software Engineer and I love to develop and test products for user-friendly web and mobile applications.
              </p>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get in Touch <AiOutlineArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </section>
          <hr className="border-gray-600"></hr>
          <section className="px-10 md:px-20" id="projects">
            <div>
              <motion.h2
                className="scroll-m-20 text-3xl font-normal tracking-tight lg:text-4xl text-foreground mb-12 text-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My Projects
              </motion.h2>
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
                <motion.div
                  key={1}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://portfolio-creator-web-app.vercel.app", "_blank")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* İçerik */}
                  <div className="p-4">
                    <p className="font-bold text-lg mb-1 text-gray-900">Portfolio Builder Web App</p>
                    <p className="text-gray-700 text-sm mb-2">
                    A modern web application that allows users to create and customize their personal portfolio websites without writing any code.
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.a
                        id="github-user-manual"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/fulyaertay/portfolio-creator"
                        className="text-gray-900 text-3xl hover:text-slate-400"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                      >
                        <AiFillGithub />
                      </motion.a>
                      <motion.a
                        className="tracking-widest text-gray-900 text-left inline-block text-sm"
                        href="https://portfolio-creator-web-app.vercel.app/"
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
          <section id="about" className="container mx-auto px-4 py-20 bg-white">
            <motion.h2
              className="scroll-m-20 text-3xl font-normal tracking-tight lg:text-4xl text-foreground mb-12 text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12">
                I have been actively involved in the software development industry for 10 years, gaining experience across various sectors including QA Testing, Project Management, Web Development, Data Science, and Generative AI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image src={desing} alt="Front-End" width={100} height={100} />
                    </div>
                    <CardTitle className="text-center text-foreground">Front-End</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React JS</Badge>
                      <Badge variant="secondary">React Native</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image src={code} alt="Back-End" width={100} height={100} />
                    </div>
                    <CardTitle className="text-center text-foreground">Back-End</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Django</Badge>
                      <Badge variant="secondary">Node JS</Badge>
                      <Badge variant="secondary">Express JS</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image src={consulting} alt="Databases" width={100} height={100} />
                    </div>
                    <CardTitle className="text-center text-foreground">Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary">MongoDB</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Firebase</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow w-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <Image src={test} alt="Test Frameworks" width={100} height={100} />
                    </div>
                    <CardTitle className="text-center text-foreground">Test Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary">Cypress JS</Badge>
                      <Badge variant="secondary">Codecept JS</Badge>
                      <Badge variant="secondary">Selenium IDE</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <hr className="border-gray-100"></hr>

          <section className="px-10 md:px-20 pb-12" id="contact">
            <div>
              <motion.h2
                className="scroll-m-20 text-3xl font-normal tracking-tight lg:text-4xl text-foreground mb-12 text-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Get in Touch
              </motion.h2>
              <ContactForm />
            </div>
          </section>
        </main>

        <hr className="border-gray-600"></hr>
        <footer className="bg-background border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://www.linkedin.com/in/fulyaertay/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/fulyaertay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
              >
                <AiFillGithub />
              </motion.a>
              <motion.a
                href="https://medium.com/@fulyaertay"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
              >
                <AiOutlineMedium />
              </motion.a>
            </div>
            <div className="mt-8 text-center text-muted-foreground">
              © 2025 Fulya Ertay. All rights reserved.
            </div>
          </div>
        </footer>
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