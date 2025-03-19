import Contact from "@/app/_components/Contact";
import Hero from "@/app/_components/Hero";
import Navbar from "@/app/_components/Navbar";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import Spotify from "@/app/_components/Spotify";

const MobileLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-y-auto !scroll-smooth">
      <Navbar />
      <div className="flex flex-col justify-center min-h-[calc(100vh-50px)]">
        {/* Adjust 60px to match the height of your Navbar */}
        <Hero />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Spotify />
    </div>
  );
};

export default MobileLayout;

