import Image from "next/image";
import Header from "./ui/header";
import Intro from "./ui/intro";
import Projects from "./ui/projects";
import Education from "./ui/education";
import  Contact from "./ui/contact";

export default function Home() {
  return (
    <>
    <Header/>
    <Intro/>
    <Education/>
    <Projects/>
    <Contact/>
      </>
  );
}
