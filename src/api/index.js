import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status === 401) window.location.href = "/login";

    return Promise.reject(err);
  }
);

export const login = (firebaseToken) =>
  API.post(
    "/login",
    {},
    {
      headers: {
        Authorization: firebaseToken,
      },
    }
  );

export const fetchDocs = () => API.get("/docs");
export const fetchDoc = (id) => API.get(`/docs/${id}`);
export const createDoc = (newDoc) => API.post("/docs", { ...newDoc });
