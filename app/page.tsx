"use client";
import Wrapper from "./components/Wrapper";
import Main from "./components/home/Main";
import Contact from "./components/home/Contact";
import Presentation from "./components/home/Presentation";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="mt-20">
          <Presentation />
          <Main />
          <Contact />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
