"use client";
import Wrapper from "../components/Wrapper";
import Contact from "../components/infosUtiles/Contact";
import Tarif from "../components/infosUtiles/Tarif";
import Aide from "../components/infosUtiles/Aide";

export default function InfosUtiles() {
  return (
    <Wrapper>
      <Aide />
      <Tarif />
      <Contact />
    </Wrapper>
  );
}
