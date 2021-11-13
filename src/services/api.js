import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000/api",
});

export function SET_API_TOKEN(token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
}

export function REMOVE_API_TOKEN(token) {
    api.defaults.headers.authorization = undefined;
}
