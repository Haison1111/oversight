import axios from "axios"

const authEndpoint = "http://accounts.spotify.com/en/authorize?";
const clientID = "e6710c2cbeb346349c46dfd1fb6506a0";
const redirectUrl = "http://oversight-hs.netlify.app";
const scopes = ["user-library-read", "playlist-read-private"];


export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&response_type=token&show-dialog=true&scope=${scopes.join(
  "%20"
)}`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;