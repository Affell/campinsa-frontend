import axios from "axios";
import JSONbigint from "json-bigint-native";
import { Config } from "../config/global";

const ApiManager = axios.create({
  transformResponse: data => JSONbigint.parse(data),
  baseURL: Config.Urls.API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

export default ApiManager;