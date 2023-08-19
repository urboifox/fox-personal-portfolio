import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const SectionHeading = ({ text }) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div
      className={`${
        darkTheme ? "text-light" : "text-dark"
      } block md:self-start max-w-[80rem] tracking-wide w-full mx-auto mb-32 font-main font-thin link px-5 text-2xl md:text-5xl lg:text-5xl capitalize`}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default SectionHeading;
