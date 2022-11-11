import { api } from "./axios.config";
import axios from "./axios";
// import axios from "axios";

const API_URL = api.apiUrl;
const DEV = "/dev/";

const restaurant = "restaurant";
const menu = "menu";
const menuitem = "menuitem";


export const getAllRestaurents = () => {
  return axios.get(API_URL + DEV + restaurant);
};

export const getAllMenus = (restaurant_id) => {
  return axios.get(API_URL + DEV + menu + `?restaurant_id=${restaurant_id}`);
};

export const getMenuItems = (restaurant_id) => {
    return axios.get(API_URL + DEV + menuitem + `?restaurant_id=${restaurant_id}`);
};

export const getMenuType = (menu_id) => {
    return axios.get(API_URL + DEV + menuitem + `?menu_id=${menu_id}`);
};
