import Head from "next/head";
import { Inter } from "@next/font/google";
import axios from 'axios';
import Image from "next/legacy/image";
import { useState,useEffect } from "react";
export default function Home() {
  const [profileName,setProfileName]=useState("");
  const [profileCell,setProfileCell]=useState("");
  const [profileImage,setProfileImage]=useState("");
  const [profileEmail,setProfileEmail]=useState("");

  const profileData = async () =>{
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfileCell(res.data.results[0].cell)
      setProfileEmail(res.data.results[0].email)
      setProfileImage(res.data.results[0].picture.large);
      setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    profileData();
  },[])
  return (
    <div className="App">
      <div className='profileContainer shadow-2xl bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 p-5 m-20 justify-center text-center w-50 h-50 rounded container mx-auto'>
      <img className="max-w-full h-auto rounded-full mx-auto" layout='fill' src={profileImage}/>
      <h1 className="text-grey-800 p-5">{profileName}</h1>
      <p className="text-grey-800 "> {profileEmail}</p>
      <p className="text-grey-800 ">{profileCell}</p>
      <button  className="text-grey-800 mt-10 bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded " onClick={profileData}>Click for Random Profile</button>
      </div>
    </div>
  );
}
