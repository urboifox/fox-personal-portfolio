import { ChevronButton, Heading, HomeText, Navbar } from "../";

const Home = () => {
  return (
    <div className="relative home h-screen w-full flex items-center justify-center">
      <Navbar />
      <div className="wrapper">
        <div className="animateUp">
          <Heading />
        </div>
      </div>
      <HomeText />
      <div className="left-5 bottom-5 lg:-left-12 lg:-bottom-48 absolute">
        <ChevronButton />
      </div>
    </div>
  );
};

export default Home;
