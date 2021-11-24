/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {useState, useCallback, useEffect} from "react";
import _debounce from "lodash/debounce";
import {useInput} from "./useInput";
import {useAuth} from "../modules/auth";

export type SignupForm = ReturnType<typeof useSignupForm>;

export const useSignupForm = () => {
  const {emailCheck, emailCheckDispatch} = useAuth();
  //NOTE:이메일
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const debounce = useCallback(
    _debounce((emailV: string) => {
      emailCheckDispatch(emailV);
    }, 400),
    []
  );
  const onChangeEmail = useCallback(
    (e: string) => {
      setEmail(e);
      const result = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e);
      debounce(e);
      if (result) setEmailError("");
      else setEmailError("이메일 형식을 확인해주세요");
    },
    [email]
  );
  useEffect(() => {
    if (emailCheck === "exist") return setEmailError("이미 사용중인 이메일입니다.");
    return () => {
      emailCheckDispatch("");
    };
  }, [emailCheck]);

  //NOTE:비밀번호
  const [pwd, onChangePwd, setPwd, pwdError] = useInput("", {
    regExp: /(?=.*\d)(?=.*[a-z]).{8,}/,
    message: "영어소문자, 숫자 포함 8자 이상 입력해주세요",
  });

  //NOTE:비밀번호 확인
  const [pwdCheck, setPwdCheck] = useState("");
  const [pwdCheckError, setPwdCheckError] = useState("");
  const onChangePwdCheck = (e: string) => {
    setPwdCheck(e);
    if (e === pwd) return setPwdCheckError("");
    else setPwdCheckError("비밀번호를 한번더 입력해주세요");
  };

  //NOTE:브랜드
  const [brand, onChangeBrand, setBrand] = useInput("");

  //NOTE:상가
  const [store, setStore] = useState(0);
  const onChangeStore = (data: string) => {
    setStore(+data);
  };

  //NOTE:위치
  const [location, onChangeLocation, setLocation] = useInput("");

  //NOTE:이름
  const [name, onChangeName, setName, nameError] = useInput("", {
    regExp: /^[가-힣\s]+$/,
    message: "한글로 입력해주세요",
  });

  //NOTE:전화번호
  const [tel, onChangeTelWithout, setTel, telError] = useInput("", {
    regExp: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
    message: "올바른 휴대폰번호를 입력해주세요",
  });
  const onChangeTel = (e: string) => {
    const value = e;
    setTel(e);
    if (value === "010" || value === "02") {
      setTel(e + "-");
    }
    if (value.split("-")[1] && value.split("-")[1].length === 4) {
      if (value.split("-").length === 3) return;
      setTel(e + "-");
    }
  };

  //NOTE:은행명
  const [bank, onChangeBank, setBank] = useInput("");

  //NOTE:계좌번호
  const [accNum, onChangeAccNum, setAccNum] = useInput("");

  //NOTE:예금주
  const [accName, onChangeAccName, setAccName] = useInput("");

  //NOTE:추천인
  const [recommender, onChangeRecommender, setRecommender] = useInput("");

  const resetForm = () => {
    setEmail("");
    setPwdCheck("");
    setEmailError("");
    setPwd("");
    setPwdCheckError("");
    setBrand("");
    setStore(0);
    setLocation("");
    setName("");
    setTel("");
    setBank("");
    setAccName(""), setAccNum("");
    setRecommender("");
  };
  return {
    email: {email, onChangeEmail, emailError},
    pwd: {pwd, onChangePwd, pwdError},
    pwdCheck: {pwdCheck, onChangePwdCheck, pwdCheckError},
    brand: {brand, onChangeBrand},
    store: {store, onChangeStore},
    location: {location, onChangeLocation},
    name: {name, onChangeName, nameError},
    tel: {tel, onChangeTel, telError, onChangeTelWithout},
    bank: {bank, onChangeBank},
    accNum: {accNum, onChangeAccNum},
    accName: {accName, onChangeAccName},
    recommender: {recommender, onChangeRecommender},
    resetForm,
  };
};
