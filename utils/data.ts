export type Store = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
  CategoryMiddles: {
    id: number;
    name: string;
  }[];
};
export type ColorName =
  | "블랙"
  | "화이트"
  | "그레이"
  | "다크그레이"
  | "아이보리"
  | "크림"
  | "베이지"
  | "오트밀"
  | "레드"
  | "오렌지"
  | "옐로우"
  | "머스타드"
  | "그린"
  | "소라"
  | "블루"
  | "네이비"
  | "민트"
  | "카키"
  | "브라운"
  | "핑크"
  | "보라"
  | "연청"
  | "중청"
  | "진청"
  | "회청"
  | "흑청";

export type Color = {id: number; name: ColorName};

export const getColor = (
  color: ColorName
): {
  background: string;
  color: string;
  backgroundPosition?: string;
  backgroundSize?: string;
} => {
  switch (color as ColorName) {
    case "블랙":
      return {background: "#000", color: "#fff"};
    case "화이트":
      return {background: "#fff", color: "#000"};
    case "그레이":
      return {background: "#bcbdbf", color: "#fff"};
    case "다크그레이":
      return {background: "#777872", color: "#fff"};
    case "아이보리":
      return {background: "#faf3e9", color: "#000"};
    case "크림":
      return {background: "#fff9e1", color: "#000"};
    case "베이지":
      return {background: "#f1e9d5", color: "#000"};
    case "오트밀":
      return {background: "#e3d5c5", color: "#000"};
    case "레드":
      return {background: "#fd0a1e", color: "#fff"};
    case "오렌지":
      return {background: "#ff5f1f", color: "#fff"};
    case "옐로우":
      return {background: "#ffd600", color: "#000"};
    case "머스타드":
      return {background: "#ffdb58", color: "#fff"};
    case "그린":
      return {background: "#5bc236", color: "#fff"};
    case "소라":
      return {background: "#02cbfe", color: "#fff"};
    case "블루":
      return {background: "#007fff", color: "#fff"};
    case "네이비":
      return {background: "#142954", color: "#fff"};
    case "민트":
      return {background: "#cbfffa", color: "#000"};
    case "카키":
      return {background: "#9c8876", color: "#fff"};
    case "브라운":
      return {background: "#a57449", color: "#fff"};
    case "핑크":
      return {background: "#ffbad2", color: "#fff"};
    case "보라":
      return {background: "#685292", color: "#fff"};
    case "연청":
      return {background: "url(https://i.ibb.co/K291GGK/lj.png)", color: "#fff"};
    case "중청":
      return {
        background: "url(https://i.ibb.co/8NpnSmx/j.png)",
        color: "#fff",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    case "진청":
      return {background: "url(https://i.ibb.co/gdvDCXv/dj.png)", color: "#fff"};
    case "회청":
      return {
        background: "url(https://i.ibb.co/3v4yRWY/gj.png)",
        color: "#fff",
        backgroundPosition: "center",
      };
    case "흑청":
      return {
        background: "url(https://i.ibb.co/fXNsYdm/bj.png)",
        color: "#fff",
        backgroundSize: "cover",
      };
    default:
      return {background: "#fff", color: "#000"};
  }
};

export const shoesSizes = [
  {id: 9, value: "200"},
  {id: 10, value: "205"},
  {id: 11, value: "210"},
  {id: 12, value: "215"},
  {id: 13, value: "220"},
  {id: 14, value: "225"},
  {id: 15, value: "230"},
  {id: 16, value: "235"},
  {id: 17, value: "240"},
  {id: 18, value: "245"},
  {id: 19, value: "250"},
  {id: 20, value: "255"},
  {id: 21, value: "260"},
  {id: 22, value: "265"},
  {id: 23, value: "270"},
  {id: 24, value: "275"},
  {id: 25, value: "280"},
  {id: 26, value: "285"},
  {id: 27, value: "290"},
  {id: 28, value: "295"},
  {id: 29, value: "300"},
];

export const clothSizes = [
  {id: 2, value: "XS"},
  {id: 3, value: "S"},
  {id: 4, value: "M"},
  {id: 5, value: "L"},
  {id: 6, value: "XL"},
  {id: 7, value: "XXL"},
  {id: 8, value: "FREE"},
];

export const topDetailSizes = [
  {id: 1, value: "chest", name: "가슴단면"},
  {id: 2, value: "shoulder", name: "어깨선"},
  {id: 3, value: "arm", name: "소매"},
  {id: 4, value: "total", name: "총장"},
];

export const bottomDetailSizes = [
  {id: 1, value: "total", name: "총장"},
  {id: 2, value: "waist", name: "허리단면"},
  {id: 3, value: "rise", name: "밑위"},
  {id: 4, value: "thigh", name: "허벅지단면"},
  {id: 5, value: "hem", name: "밑단"},
];

export const shoesDetailSizes = [
  {id: 1, value: "heel", name: "굽높이"},
  {id: 2, value: "feet", name: "발볼 넓이 "},
];

export const skirtDetailSizes = [
  {id: 1, value: "total", name: "총장"},
  {id: 2, value: "thigh", name: "허리단면"},
  {id: 3, value: "hem", name: "밑단"},
];

export const bankList = [
  {id: 1, name: "카카오뱅크", logo: ""},
  {id: 2, name: "농협", logo: ""},
  {id: 3, name: "신한은행", logo: ""},
  {id: 4, name: "IBK기업은행", logo: ""},
  {id: 5, name: "하나은행", logo: ""},
  {id: 6, name: "우리은행", logo: ""},
  {id: 7, name: "국민은행", logo: ""},
  {id: 8, name: "SC제일", logo: ""},
  {id: 9, name: "대구은행", logo: ""},
  {id: 10, name: "부산은행", logo: ""},
  {id: 11, name: "광주은행", logo: ""},
  {id: 12, name: "새마을금고", logo: ""},
  {id: 13, name: "경남은행", logo: ""},
  {id: 14, name: "전북은행", logo: ""},
  {id: 15, name: "제주은행", logo: ""},
  {id: 16, name: "산업은행", logo: ""},
  {id: 17, name: "우체국", logo: ""},
  {id: 18, name: "신협", logo: ""},
  {id: 19, name: "수협", logo: ""},
  {id: 20, name: "씨티은행", logo: ""},
  {id: 21, name: "케이뱅크", logo: ""},
  {id: 22, name: "토스뱅크", logo: ""},
  {id: 23, name: "도이치은행", logo: ""},
  {id: 24, name: "BOA", logo: ""},
  {id: 25, name: "BNP", logo: ""},
  {id: 26, name: "중국공상", logo: ""},
  {id: 27, name: "HSBC", logo: ""},
  {id: 28, name: "JP모건", logo: ""},
  {id: 29, name: "산림조합", logo: ""},
  {id: 30, name: "저축은행", logo: ""},
];
export const getName = (name: string): string => {
  switch (name) {
    case "chest":
      return "가슴단면";
    case "arm":
      return "소매";
    case "shoulder":
      return "어깨";
    case "total":
      return "총장";
    case "waist":
      return "허리";
    case "rise":
      return "밑위";
    case "thigh":
      return "허벅지단면";
    case "hem":
      return "밑단";
    case "heel":
      return "굽높이";
    case "feet":
      return "발볼 넓이";
    default:
      return "커스텀";
  }
};

export const countryList = [
  {id: 1, name: "대한민국"},
  {id: 2, name: "중국"},
  {id: 3, name: "그외"},
];

export type FilterIcon =
  | "calendar-arrow-left"
  | "sort-numeric-variant"
  | "sort-alphabetical-variant";
export const filterList: FilterType[] = [
  {id: 1, name: "최근 등록일순", value: "created", icon: "calendar-arrow-left"},
  {id: 2, name: "가격 낮은순", value: "price", icon: "sort-numeric-variant"},
  {id: 3, name: "이름순", value: "name", icon: "sort-alphabetical-variant"},
];
export type FilterType = {
  id: number;
  name: string;
  value: string;
  icon: string;
};

export type ProdListItem = {
  UpdatedProduct: UpdatedProduct | null;
  createdAt: Date;
  id: number;
  isActive: number;
  name: string;
  price: number;
  state: number;
  thumbnail: string;
};

type UpdatedProduct = {
  name: string;
  price: number;
  thumbnail: string;
};
