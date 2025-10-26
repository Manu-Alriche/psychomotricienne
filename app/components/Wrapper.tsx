"use client";
import Assistant from "./Assistant";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Assistant />
      <Footer />
    </div>
  );
};

export default Wrapper;
