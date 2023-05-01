import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import { useState } from "react";
import Contact from "@/components/Contact";

export default function App({ Component, pageProps }) {
  const [darkMode,setdarkMode]=useState(true);
  return (
  <div className={darkMode?"dark":""}>
  <div className="dark:bg-gray-900 dark:text-white lg:px-36 md:px-20">
    <Navbar darkMode={darkMode} setdarkMode={setdarkMode}/>
    <HeroSection />
    <Services />
    <Portfolio />
    <Contact />
  </div>
  </div>);
}
