import React, {useState, useCallback} from "react";

type UseInput = (
  initialState?: string,
  validation?: {
    regExp: RegExp;
    message: string;
  }
) => [string, (e: string) => void, React.Dispatch<React.SetStateAction<string>>, string];

export const useInput: UseInput = (initialState = "", validation) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState("");

  const onChangeText = useCallback(
    (e: string) => {
      if (validation) {
        const result = validation.regExp.test(e);
        if (result) setError("");
        else setError(validation.message);
      }
      setValue(e);
    },
    [value]
  );

  return [value, onChangeText, setValue, error];
};

export default useInput;
