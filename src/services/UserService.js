import { create } from "./BaseService";

const http = create();

export const getUserInfo = () => {
  return http.get("/users/me");
};

export const editProfile = (user) => {
  return http.put("/user/editprofile", user)
}