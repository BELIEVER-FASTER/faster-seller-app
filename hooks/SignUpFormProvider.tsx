import React, {useContext} from "react";
import {SignupForm, useSignupForm} from "./useSignupForm";

const SignupFormContext = React.createContext<SignupForm | null>(null);
export default function SignUpFormProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const form = useSignupForm();

  return <SignupFormContext.Provider value={form}>{children}</SignupFormContext.Provider>;
}

export const useSF = () => {
  const context = useContext(SignupFormContext);
  if (!context) throw new Error("CONTEXT를 찾을 수 없어요");
  return context;
};
