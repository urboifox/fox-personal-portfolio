import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollBar = () => {
  const scrollbar = useRef(null);
  const location = useLocation();
  function handleScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    scrollbar.current.style.height = `${
      (Math.ceil(window.scrollY) / height) * 100
    }%`;
  }
  useEffect(() => {
    scrollbar.current.style.height = `0`;
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div
      ref={scrollbar}
      id="scrollbar"
      className={`bg-light fixed w-1 h-0 top-0 right-0 z-[9999999999] max-md:hidden transition-colors duration-300`}
    ></div>
  );
};

export default ScrollBar;
