import { http } from "../config.js";

export const getServices = async () => {
    const response = await http.get("services");
    return response.data;
};