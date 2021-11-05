import axios from "axios";
import {Category, Color, Store} from "./data";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://api.fstr.shop";

export const getCateList = async () => {
  try {
    const {data} = await axios.get<Category[]>("/seller/data/category");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getColorList = async () => {
  try {
    const {data} = await axios.get<Color[]>("/seller/data/color");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getStoreList = async () => {
  try {
    const {data} = await axios.get<Store[]>("/seller/data/store");
    return data;
  } catch (e) {
    console.error(e);
  }
};
