"use client";
import Wrapper from "./components/Wrapper";
import Main from "./components/home/Main";
import Contact from "./components/home/Contact";
import Presentation from "./components/home/Presentation";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="px-5">
          <Presentation />
          <Main />
          <Contact />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
