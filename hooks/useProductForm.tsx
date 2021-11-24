/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {useState} from "react";
import useInput from "./useInput";

export type ProductForm = ReturnType<typeof useProductForm>;

export default function useProductForm() {
  //NOTE: 이미지 목록
  const [images, setImages] = useState<{filename: string; src: string}[]>([]);

  //NOTE: 상품명
  const [name, onChangeName, setName] = useInput("");

  //NOTE: 가격
  const [price, onChangePrice, setPrice] = useInput("");
  const [dprice, onChangeDPrice, setDPrice] = useInput("");
  // const onChangePrice = ()=>{
  //   setPrice(p)
  // }

  //NOTE: 카테고리
  const [cate, setCate] = useState<{
    main: {id: number; name: string};
    middle: {id: number; name: string};
  } | null>(null);

  //NOTE: 색상
  const [colors, setColors] = useState<{id: number; name: string}[]>([]);

  //NOTE: 사이즈
  const [sizes, setSizes] = useState<
    {id: number; value: string; detail?: {name: string; value: string}[]}[]
  >([]);

  //NOTE: 소재 혼용률
  const [mixture, onChangeMixture, setMixture] = useInput("");

  //NOTE: 제조국
  const countryList = [
    {id: 0, name: "제조국을 선택해주세요."},
    {id: 1, name: "대한민국"},
    {id: 2, name: "중국"},
    {id: 3, name: "그 외 국가"},
  ];
  const [country, setCountry] = useState("");
  const onChangeCountry = (countryId: string) => {
    setCountry(countryId);
  };
  const [etcCountry, onChangeEtcCountry, setEtcCountry] = useInput("");

  const [leaf, setLeaf] = useState(1);
  const onChangeLeaf = (value: number) => setLeaf(value);

  //NOTE: 상세설명
  const [detailInfo, onChangeDetailInfo, setDetailInfo] = useInput("");

  return {
    images: {images, setImages},
    name: {name, onChangeName, setName},
    price: {price, onChangePrice, setPrice},
    cate: {cate, setCate},
    colors: {colors, setColors},
    sizes: {sizes, setSizes},
    mixture: {mixture, onChangeMixture, setMixture},
    country: {country, countryList, onChangeCountry},
    leaf: {leaf, onChangeLeaf},
    detailInfo: {detailInfo, onChangeDetailInfo, setDetailInfo},
    etcCountry: {etcCountry, onChangeEtcCountry, setEtcCountry},
  };
}
