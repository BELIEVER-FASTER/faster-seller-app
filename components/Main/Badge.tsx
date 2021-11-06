import {BadgeBox, BadgeText} from "./styles";
import React from "react";

export default function Badge({state}: {state: number}): JSX.Element {
  if (state === 0) return <></>;
  return (
    <BadgeBox state={state}>
      {state === 1 && <BadgeText>등록요청중</BadgeText>}
      {state === 2 && <BadgeText>수정요청중</BadgeText>}
    </BadgeBox>
  );
}
