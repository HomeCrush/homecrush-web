import { create } from "./BaseService";

const http = create();

export const getUserInfo = () => {
  return http.get("/users/me");
};

export const profileUpdate = (id) => {
  return http.put(`/user/profileupdate/${id}`);
};
