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

export const getDiamondCheckByCertificateId = async (certificateId) => {
  const response = await http.get(`diamond-valuation-notes/search`, {
    params: { certificateId },
  });
  return response.data;
};

//CALCULATE
export const getDiamondData = async (params) => {
  const response = await http.get(`diamond-market/price-list`, { params });
  return response.data;
};

export const getDiamondMarketData = async (params) => {
  const response = await http.get(`diamond-market/search`, { params });
  return response.data;
};

//MANAGE

export const getValuationRequests = async (customerID) => {
  const response = await http.get(`valuation-requests/customer/${customerID}`);
  return response.data;
};
