import { api } from "./axios.config";
import axios from "./axios";

const API_URL = api.apiUrl;
const DEV = "/dev/";

const createOrder = "create-order";
const order = "order";

export const placeOrder = (payload) => {
  return axios.post(API_URL + DEV + createOrder, payload);
};

export const getAllOrdersForCustomer = (customer_mobile) => {
  return axios.get(
    API_URL + DEV + order + `?customer_mobile=${customer_mobile}`
  );
};
