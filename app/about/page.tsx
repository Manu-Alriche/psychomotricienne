"use client";
import Wrapper from "../components/Wrapper";
import Hero from "../components/about/Hero";
import Parcour from "../components/about/Parcour";
import Formation from "../components/about/Formation";

export default function About() {
  return (
    <Wrapper>
      <Hero />
      <Parcour />
      <Formation />
    </Wrapper>
  );
}
