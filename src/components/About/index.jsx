import { useSelector } from "react-redux";
import "./style.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { Circ, gsap } from "gsap";
import { SkillsPage, ExperiencePage, EducationPage, ConnectPage } from "../";
const items = ["Skills", "Education", "Experience", "Connect"];

const About = () => {
  const [selected, setSelected] = useState(null);
  const [wasNull, setWasNull] = useState(false);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const h2 = useRef(null);
  const scope = useRef(null);
  const handleClick = (val) => {
    if (selected === null && typeof val === "number") {
      setSelected(val);
      setWasNull(true);
    } else if (val === null) {
      setSelected(val);
      setWasNull(false);
    } else {
      setSelected(val);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // const tl = gsap.timeline();
      if (!wasNull) {
        gsap.from(h2.current, {
          opacity: 0,
          y: 30,
          duration: 1,
        });
        gsap.fromTo(
          ".aboutBox",
          { x: 300, y: 200, opacity: 0 },
          {
            x: 0,
            y: 0,
            ease: Circ.easeOut,
            opacity: 1,
            stagger: 0.2,
            delay: 0.5,
          }
        );
        gsap.to(".aboutBoxB", {
          y: 200,
          opacity: 0,
        });
      }
      if (wasNull) {
        gsap.to(".aboutBox", {
          opacity: 0,
          duration: 0.3,
        });
        gsap.to(h2.current, {
          opacity: 0,
          y: 30,
          duration: 1,
        });
        gsap.fromTo(
          ".aboutBoxB",
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.5,
            duration: 0.5,
            stagger: 0.1,
          }
        );
      }
    }, scope);
    return () => ctx.revert();
  }, [wasNull]);

  return (
    <div
      className={`${
        darkTheme ? "text-white" : "text-dark"
      } cont mx-auto relative overflow-x-hidden`}
      ref={scope}
    >
      <div className="aboutGrid fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {items.map((item, i) => {
          return (
            <Fragment key={i}>
              <motion.div
                onClick={() => handleClick(i)}
                className={`aboutBox link text-xs md:text-base aspect-square border border-[var(--main-color-dimmed)] md:hover:border-[var(--main-color)] tracking-wide uppercase text-[var(--main-color-dimmed)] md:hover:text-[var(--main-color)] flex transition-colors duration-500 items-center justify-center`}
              >
                {item}
              </motion.div>
            </Fragment>
          );
        })}
      </div>

      <div className="fixed w-full flex justify-end cont left-1/2 bottom-10 z-30 pr-10 -translate-x-1/2">
        <div className="flex gap-4 opacity-50 transition-opacity duration-500 hover:opacity-100">
          {items.map((item, i) => {
            return (
              <Fragment key={i}>
                <motion.div
                  onClick={() => handleClick(i)}
                  className={`${
                    selected === i
                      ? "bg-[var(--sec-color)] text-[var(--bg-color)]"
                      : "bg-[var(--bg-color)] text-[var(--sec-color)]"
                  } aboutBoxB link text-[10px] aspect-square w-20 border border-[var(--main-color-dimmed)] tracking-wide uppercase flex transition-colors duration-500 items-center justify-center`}
                >
                  {item}
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </div>
      {items.map((_, i) => {
        return (
          <Fragment key={i}>
            <AnimatePresence>
              {selected === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.7,
                      duration: 0.3,
                    },
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[var(--bg-color)] relative z-20 max-w-full w-screen cont mx-auto"
                >
                  {selected === 0 ? (
                    <SkillsPage />
                  ) : selected === 1 ? (
                    <EducationPage />
                  ) : selected === 2 ? (
                    <ExperiencePage />
                  ) : selected === 3 ? (
                    <ConnectPage />
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </Fragment>
        );
      })}
      <h2
        ref={h2}
        className={`${
          darkTheme ? "text-dimmed" : "text-darkDimmed"
        } fixed -z-10 bottom-10 transition-colors duration-300 uppercase text-xl lg:text-2xl w-max font-light left-1/2 -translate-x-1/2`}
      >
        Get To Know Me
      </h2>
    </div>
  );
};

export default About;
