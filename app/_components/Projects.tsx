import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Spotify - Clone",
    stack: "HTML + CSS + JS",
    description: "A sleek, Spotify-inspired music player with smooth controls and a stunning UI. ",
    image: "/images/spotify-clone.png",
    link: "https://lijo-1.github.io/spotify_clone/",
  },
  {
    title: "Chatter Box",
    stack: "REACT.JS + TAILWINDCSS + FIREBASE",
    description:
      "A real-time group chat application with user authentication, message persistence, and responsive UI.",
    image: "/images/chatapp.png",
    link: "https://chat-app-one-xi-12.vercel.app/",
  },
  {
    title: "Tessele Foods",
    stack: "NEXT.JS + TAILWINDCSS",
    description: "A fully responsive e-commerce platform with real-time order notifications sent directly to the admin.",
    image: "/images/tesselefoods.png",
    link: "https://tessele-foods-kerala.vercel.app/",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Link href={project.link} target="_blank" key={project.title} className=" tag-bounce">
      <div className="lg:w-[500px]">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={250}
          className="h-[222px] md:h-[250px] w-full object-cover"
        />
        <div className="px-3 py-4 text-white flex flex-col gap-y-1 bg-[#8460e6]/15">
          <h3 className="font-medium text-sm">{project.title}</h3>
          <h3 className="font-bold text-xs text-[#8460e6]">{project.stack}</h3>
          <p className="text-sm font-light">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="tag res-grid text-white scroll-mt-24 lg:pt-8" id="projects">
      <h3 className="font-bold text-[20px] text-gray-300">PROJECTS</h3>
      <div className="mt-8 col-span-full grid gap-y-12 md:row-start-2 md:justify-items-center lg:justify-items-start md:mx-[60px] lg:mt-6 lg:mx-0">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
