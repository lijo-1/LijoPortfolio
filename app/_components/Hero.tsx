import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
    <div className="res-grid mt-2" id="about">
      <div className="text-white col-start-1 col-end-5 md:col-end-8 lg:col-end-6">
        <div>
          <h3 className="font-semibold text-[24px] md:text-[24px]">
            Hi there👋🏻
          </h3>
          <h1 className="font-bold text-[48px] mt-[-10.88px] tracking-tighter md:text-[64px] md:mt-[-30px]">
            I am <span className="text-[#8460e6]">Lijo S.</span>
          </h1>
        </div>
        <p className="mt-[12px] text-[16px] md:text-[18px] text-justify hyphens-auto lg:text-[18px] lg:mt-0">
          I am a <span className="text-[#8460e6]">Web Developer</span>{" "}
          passionate about crafting high-performance, visually compelling, and
          user-centric digital experiences. By leveraging the latest
          technologies and best practices, I develop efficient, scalable
          solutions that seamlessly integrate functionality and design, ensuring
          optimal performance and usability.
        </p>

        {/* Button */}
        <Link href="#contact">
          <button className="cursor-pointer mt-[20px] text-[16px] font-normal bg-[#8460e6]/20 py-[12px] px-[88px] md:mt-[24px] md:text-[20px] md:px-[136px]">
            Let’s talk
          </button>
        </Link>

        <div className="flex gap-4 mt-6">
          <Link
            href="https://www.linkedin.com/in/lijo-s-3b9314226/"
            target="_blank"
            className="text-[#9a78fa] text-[30px] transition-all hover:text-[#0A66C2]"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://github.com/lijo-1"
            target="_blank"
            className="text-[#9a78fa] text-[30px] transition-all hover:text-black"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
