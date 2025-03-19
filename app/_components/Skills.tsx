import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { SiTypescript, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div
      className="mt-24 res-grid text-white scroll-mt-24 tag"
      id="skills"
    >
      <h3 className="font-bold text-[20px] text-gray-300 md:text-[20px]">
        SKILLS
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-6 md:gap-y-8 mt-3 col-start-1 col-end-5 md:col-end-8 lg:col-end-6">
        <div className="skill-grid group">
          <FaHtml5 className="text-[28px] md:text-[36px] group-hover:text-[#EF662B]" />
          <p className="skill-grid-text">HTML</p>
        </div>
        <div className="skill-grid group">
          <FaCss3Alt className="text-[28px] md:text-[36px] group-hover:text-[#34A9DE]" />
          <p className="skill-grid-text">CSS</p>
        </div>
        <div className="skill-grid group">
          <FaJs className="text-[28px] md:text-[36px] group-hover:text-[#FFD708]" />
          <p className="skill-grid-text">JavaScript</p>
        </div>
        <div className="skill-grid group">
          <FaReact className="text-[28px] md:text-[36px] group-hover:text-[#66DBFB]" />
          <p className="skill-grid-text">React.js</p>
        </div>
        <div className="skill-grid group">
          <RiNextjsFill className="text-[30px] md:text-[38px] group-hover:text-[]" />
          <p className="skill-grid-text">Next.js</p>
        </div>
        <div className="skill-grid group">
          <SiTypescript className="text-[28px] md:text-[34px] group-hover:text-[#377CC8]" />
          <p className="skill-grid-text">TypeScript</p>
        </div>
        <div className="skill-grid group">
          <RiTailwindCssFill className="text-[28px] md:text-[36px] group-hover:text-[#58BCB7]" />
          <p className="skill-grid-text">Tailwind</p>
        </div>
        <div className="skill-grid group">
          <FaFigma className="text-[28px] md:text-[36px] group-hover:text-[#A55EFF]" />
          <p className="skill-grid-text">Figma</p>
        </div>
        <div className="skill-grid group">
          <SiMongodb className="text-[28px] md:text-[36px] group-hover:text-[#08EE69]" />
          <p className="skill-grid-text">MongoDB</p>
        </div>
        <div className="skill-grid group">
          <RiFirebaseFill className="text-[28px] md:text-[36px] group-hover:text-[#FFAA1A]" />
          <p className="skill-grid-text">Firebase</p>
        </div>
        <div className="skill-grid group">
          <FaGitAlt className="text-[28px] md:text-[36px] group-hover:text-[#F05539]" />
          <p className="skill-grid-text">Git</p>
        </div>
        <div className="skill-grid group">
          <FaGithub className="text-[28px] md:text-[36px] group-hover:text-[]" />
          <p className="skill-grid-text">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
