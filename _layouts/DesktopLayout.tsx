import Contact from "@/app/_components/Contact";
import Hero from "@/app/_components/Hero";
import Navbar from "@/app/_components/Navbar";
import Projects from "@/app/_components/Projects";
import Skills from "@/app/_components/Skills";
import Spotify from "@/app/_components/Spotify";

export default function DesktopLayout() {
  return (
    <div className="lg:flex h-screen ">
      {/* Left Column: Fixed Navbar + Hero */}
      <div className="lg:w-1/2 h-screen lg:ml-[48px] flex flex-col">
        <Navbar /> {/* Navbar stays at the top */}
        <div className="flex-grow flex items-center">
          <Hero /> {/* Hero is vertically centered */}
        </div>
      </div>

      {/* Right Column: Scrollable Content */}
      <div className="lg:w-1/2 lg:overflow-y-auto scrollbar-hide h-screen lg:mr-[48px] !scroll-smooth">
        <Projects />
        <Skills />
        <Contact />
        <Spotify />
      </div>
    </div>
  );
}
