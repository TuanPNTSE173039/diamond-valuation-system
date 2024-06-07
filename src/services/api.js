import { http } from "./config.js";

//APPOINTMENT
export const getCustomers = async () => {
  const response = await http.get("customers");
  return response.data;
};

export const getCustomer = async (customerID) => {
  const response = await http.get(`customers/${customerID}`);
  return response.data;
};

export const getServices = async () => {
  const response = await http.get("services");
  return response.data;
};

export const addValuationRequest = (body) => {
  return http.post("valuation-requests", body);
};

//DIAMOND CHECK

//CALCULATE
export const getDiamondPriceData = async (params) => {
  const response = await http.get(`diamond-price-lists/search`, { params });
  return response.data;
};
