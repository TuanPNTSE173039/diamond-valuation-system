import { http } from "../config.js";
import axios from "axios";

export const getServices = async () => {
  const response = await http.get("services");
  return response.data;
};
