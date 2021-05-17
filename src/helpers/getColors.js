// import { axiosWithAuth } from "./axiosWithAuth";
import axios from "axios";

export const getColors = () => {
  return axios
    .get("https://localhost:5000/api/colors")
    .then((res) => res)
    .catch((err) => err);
};
