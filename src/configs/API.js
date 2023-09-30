import axios from "axios";
import JSONbigint from "json-bigint";
import { Config } from "./globalConfig";
import { postFetch } from "./Fetch";

var check = false;
var checking = false;
var checkCallbacks = [];

export const setCheck = (b) => { check = b };

// Global API URL
export const APIUrl = Config.Urls.API;

// Keys names
const TokenKeyName = "Oui-Connect-Token";
const UserDataKeyName = "userdata";

// User Token
export const storeUserToken = (token) => {
  localStorage.setItem(TokenKeyName, token);
  API.defaults.headers[TokenKeyName] = token;
}
export const getUserToken = () => localStorage.getItem(TokenKeyName);
const delUserToken = () => localStorage.removeItem(TokenKeyName);

// User Data
export const storeUserData = (data) => {
  localStorage.setItem(UserDataKeyName, JSON.stringify(data));
};
export const getUserData = () => {
  var data = localStorage.getItem(UserDataKeyName)
  return data ? JSON.parse(data) : null;
}
const delUserData = () => localStorage.removeItem(UserDataKeyName);

export const addCheckCallback = (f) => {
  if (!check && !checking) checkUserToken();
  if (!checking) {
    f(getUserData());
  } else {
    checkCallbacks.push(f);
  }
}
export const checkUserToken = () => {
  checking = true;
  const end = () => {
    check = true;
    checking = false;
    const data = getUserData();
    checkCallbacks.forEach(f => {
      f(data);
    });
  }
  const token = getUserToken();
  delUserToken();
  delUserData();
  if (token) {
    postFetch("/auth/login", { "token": token }, null, r => {
      if (r && r.status === 200 && r.data) {
        if (r.data.token) storeUserToken(r.data.token);
        if (r.data.user) storeUserData(r.data.user);
      }
    }).finally(() => {
      end();
    });
  } else {
    end();
  }
};

// Struct for axios with preregistered X-Connect-Token and URL
export const API = axios.create({
  transformResponse: data => JSONbigint.parse(data),
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    "Torkhan-Connect-Token": getUserToken(),
  },
  withCredentials: true,
  mode: 'cors'
});

// Function to logout user and remove localstorage
export const logoutUser = () => {
  API.post("/auth/logout");
  delUserToken();
  delUserData();
};

export const handleErrorAPI = (err, hideNotif) => {
  if (!err) return;

  if (err?.response?.status === 401) {
    logoutUser();
    window.location.href = `/login?from=${window.location.pathname ?? ""}`;
    return;
  }
};