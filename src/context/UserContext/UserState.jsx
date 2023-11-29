import { useReducer } from "react";
import { createContext } from "react";
import UserReducer from "../UserContext/UserReducer";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: token || null,
  user: user || null,
};

const API_URL = "http://localhost:8080/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (valuesUser) => {
    const res = await axios.post(API_URL + "/login", valuesUser);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
