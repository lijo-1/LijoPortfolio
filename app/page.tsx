'use client'
import { useEffect, useState } from "react";
import DesktopLayout from "@/_layouts/DesktopLayout";
import MobileLayout from "@/_layouts/MobileLayout";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen">
      {isDesktop ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
}
