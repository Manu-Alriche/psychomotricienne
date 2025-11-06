"use client";
import Wrapper from "../components/Wrapper";
import Contact from "../components/infosUtiles/Contact";
import Tarif from "../components/infosUtiles/Tarif";
import Aide from "../components/infosUtiles/Aide";
import Faq from "../components/infosUtiles/Faq";

export default function InfosUtiles() {
  return (
    <Wrapper>
      <div className="mt-20">
        <Aide />
        <Tarif />
        <Faq />
        <Contact />
      </div>
    </Wrapper>
  );
}
