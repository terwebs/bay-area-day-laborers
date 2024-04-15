import { links } from "../data";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition duration-300 ease-in-out ${
        scrollY > 0 ? "bg-slate-700" : "bg-transparent"
      }`}
    >
      <div className="align-element py-4 sm:py-4 flex justify-center gap-8">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              onClick={(e) => scrollToSection(text, e)}
              className="capitalize text-lg text-white tracking-wide hover:text-sky-400 duration-300 md:text-2xl"
            >
              {text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
