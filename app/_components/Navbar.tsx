import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed lg:static top-0 left-0 z-10 w-full lg:ml-[40px] lg:w-1/2 bg-black">
      <div className="flex justify-center gap-8 py-6 md:py-8 font-medium text-gray-300 text-[16px] leading-[18px] md:text-[18px] lg:text-[18px] lg:justify-start !scroll-smooth overscroll-y-contain">
        <Link href="#about" className=" hover:underline">
          About
        </Link>
        <Link href="#projects" className=" hover:underline">
          Projects
        </Link>
        <Link href="#skills" className=" hover:underline">
          Skills
        </Link>
        <Link href="#contact" className=" hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
