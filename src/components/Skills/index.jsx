import { useSelector } from "react-redux";
import { SkillCard, PrimaryButton, SectionHeading } from "../";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const skills = useSelector((state) => state.websiteData.data.skills);
  const screenWidth = useSelector((state) => state.screen.width);
  const scope = useRef(null);
  const slider = useRef(null);
  const cardWidth = 288;
  const gap = 20;

  useLayoutEffect(() => {
    const numberOfCards = skills?.length;
    const totalWidth = (cardWidth + gap) * numberOfCards;
    const sliderWidth = slider.current?.clientWidth;
    const xPosition = totalWidth - sliderWidth;
    const ctx = gsap.context(() => {
      gsap.to(slider.current, {
        x: screenWidth > 767 ? `-${xPosition}px` : 0,
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "140% bottom",
          end: "140%  top",
          scrub: 1,
          pin: screenWidth > 767,
        },
      });
    }, scope);
    return () => {
      ctx.revert();
    };
  }, [screenWidth, skills?.length]);

  return (
    <div className="mt-20 lg:mt-40" ref={scope}>
      <SectionHeading className={`mb-14`} text={"Tech Stack"} />
      <div className="cont md:px-48 mx-auto max-md:px-4">
        <div className="md:overflow-hidden p-5">
          <div
            className="flex flex-col md:flex-row gap-5 max-md:translate-x-0"
            ref={slider}
          >
            {skills?.map((skill) => {
              return <SkillCard skill={skill} key={skill.id} />;
            })}
          </div>
        </div>
        <div className="mt-20 mx-auto w-max">
          <a href={`/Mohamed Ashraf - Frontend Developer.pdf`} download>
            <PrimaryButton text={`Download CV`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
