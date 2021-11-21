import instance from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import cartStore from "./cartStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  users = null;

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (token) => {
    AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `bearer ${token}`;
    this.user = decode(token);
  };

  signUp = async (userData, navigate) => {
    try {
      const response = await instance.post("/signup", userData);
      this.setUser(response.data.token);
      navigate.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };
  signIn = async (userData, navigate) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
      navigate("/CategoryList");
    } catch (error) {}
  };
  logout = () => {
    delete instance.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
    this.user = null;
    console.log("logout");
  };
  checkForToken = () => {
    const token = AsyncStorage.getItem("myCart");

    this.items = cart ? JSON.parse(cart) : [];
  };
}

const authenticationStore = new AuthStore();
export default authenticationStore;
