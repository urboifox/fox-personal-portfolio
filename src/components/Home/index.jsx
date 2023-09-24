import {
  ChevronButton,
  Heading,
  HomeText,
  SelectedWork,
  Skills,
  TextSection,
} from "../";

const Home = () => {
  return (
    <>
      <div className="cont mx-auto relative home h-screen w-full flex items-center justify-center">
        <Heading />
        <HomeText />
        <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
          <ChevronButton />
        </div>
      </div>

      <div className="mt-20 md:mt-32 lg:mt-96">
        <TextSection>
          <span>I bring people</span>
          <span>Ideas to life</span>
        </TextSection>
      </div>
      <SelectedWork />

      <div className="mt-20 md:mt-32 mb-32">
        <TextSection>
          <span>I&apos;m constantly</span>
          <span>Expanding my</span>
          <span>Knowledge</span>
        </TextSection>
      </div>
      <Skills />
      {/* making more space for the skills slider horizontal scroll */}
      <div className="h-[50vh]"></div>
    </>
  );
};

export default Home;
