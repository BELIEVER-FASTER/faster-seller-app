import React from "react";
import {
  PISummary,
  SKDate,
  SkelletonBox,
  SKImage,
  SKPrice,
  SKSwitch,
  SKTitle,
} from "./styles";

export default function Skelleton(): JSX.Element {
  return (
    <>
      {Array.from({length: 5}).map((_, i) => (
        <SkelletonBox key={i}>
          <SKImage />
          <PISummary>
            <SKTitle />
            <SKDate />
            <SKPrice />
          </PISummary>
          <SKSwitch />
        </SkelletonBox>
      ))}
    </>
  );
}
