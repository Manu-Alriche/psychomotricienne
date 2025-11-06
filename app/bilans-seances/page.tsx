"use client";
import Wrapper from "../components/Wrapper";
import Bilan from "../components/bilansSeances/Bilan";

export default function BilansSeances() {
  return (
    <Wrapper>
      <div className="mt-20">
        <Bilan />
      </div>
    </Wrapper>
  );
}
