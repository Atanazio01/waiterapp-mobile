import axios from "axios";
import { API_URL } from "../utils/apiUrl";

export const api = axios.create({
  baseURL: API_URL,
});
