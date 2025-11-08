import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const MenuOverlay = ({ onClose }) => {
  const menuItems = ["Skills", "Projects", "Contact"];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    if (mediaQuery.matches) {
      onClose(false);
    }

    const handleChange = (e) => {
      if (e.matches) {
        onClose(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] w-full bg-gradient-to-t from-[#475664] to-[#1e293b]
      text-white flex flex-col items-center justify-center space-y-4 shadow-lg rounded-b-2xl py-6"
    >
      {/* Close Button */}
      <button
        onClick={() => onClose(false)}
        className="absolute top-3 right-4 w-10 h-10 flex items-center justify-center text-3xl hover:text-pink-400 transition-colors duration-300"
        aria-label="Close menu"
      >
        <IoClose />
      </button>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          onClick={() => onClose(false)}
          className="cursor-pointer text-lg font-medium text-white hover:text-[#a5e1f5] transition-all duration-200"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default MenuOverlay;
