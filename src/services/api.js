import axios from "axios";

export const api = axios.create({
  baseURL: 'https://fe-api.vercel.app/'
});
