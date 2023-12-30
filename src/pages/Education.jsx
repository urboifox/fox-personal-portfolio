import { useSelector } from "react-redux";
import { TimeLineItem } from "../components";
import { motion } from "framer-motion";

export default function Education() {
  const info = useSelector((state) => state.websiteData.info);
  const timeLines = info.filter((e) => e.type === "education");

  return (
    <motion.div className="aboutContainer cont">
      <div className="relative aboutHeading">
        <div
          className={`sectionHeading fadeIn text-[var(--main-color-dimmed)] block md:self-start max-w-[80rem] tracking-wide w-full font-main font-thin  px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
        >
          <h2 className="w-max">Education</h2>
        </div>
      </div>

      <article className="w-full min-h-screen my-20 flex items-start justify-center py-10">
        <div className="timeLineHolder">
          {timeLines?.map((timeline) => {
            return <TimeLineItem key={timeline.title} tl={timeline} />;
          })}
        </div>
      </article>
    </motion.div>
  );
}
