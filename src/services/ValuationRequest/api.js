import { http } from "../config.js";

export const addValuationRequest = (body) => {
  return http.post("valuation-requests", body);
};
