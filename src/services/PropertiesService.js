import { create } from "./BaseService";

const http = create();

export const getProperties = (search) => {
  return http.get("/properties", { params: { search } });
};

export const getProperty = (id) => {
	return http.get(`/properties/${id}`);
}

export const editProperty = (property, id) => {
	return http.put(`/properties/${id}/edit`, property);
}

export const createProperty = (property) => {
    return  http.post(`/properties/create`, property);
}

export const reject =(id) => {
  return http.post(`/properties/${id}/reject`, id);
}

export const like =(id) => {
  return http.post(`/properties/${id}/like`, id);
}