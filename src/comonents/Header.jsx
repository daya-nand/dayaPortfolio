import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const useIsMobile = (breakpoint = 639) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setIsMobile(e.matches);

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};

const Header = () => {
  const headerContent = ["Home", "About", "Skills", "Projects", "Contact"];
  const isMobile = useIsMobile(639); // 👈 yahan hum check kar rahe hain

  return (
    <section
      id="home"
      className="fixed w-full flex justify-between items-center text-center text-white
      text-[13px] p-4 overflow-x-hidden bg-transparent"
    >
      <div className="ml-4 font-bold text-lg">
        <h1 className="text-shadow-xl animate-bounce transition-all duration-5000">
          Daya <span className="text-[#a5e1f5]">Portfolio</span>
        </h1>
      </div>

      <div className="font-semibold">
        {isMobile ? (
          // 👇 ye sirf 639px ya usse niche show hoga
          <div className="text-2xl mr-4 cursor-pointer"> <IoMenu /></div>
        ) : (
          // 👇 ye sirf large screens me show hoga
          headerContent.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="mx-4 hover:text-[#a5e1f5] transition duration-300"
            >
              {item}
            </a>
          ))
        )}
      </div>
    </section>
  );
};

export default Header;
