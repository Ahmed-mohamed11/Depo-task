import axios from "axios";
import CryptoJS from "crypto-js"; // Make sure to import the correct CryptoJS module

const baseURL = "https://zayer.cowdly.com/api/";
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Decrypt the token from sessionStorage without using React hooks
const getDecryptedToken = () => {
  const encryptedToken = sessionStorage.getItem("token");
  if (encryptedToken) {
    const secretKey = "s3cr3t$Key@123!";
    const decryptedToken = CryptoJS.AES.decrypt(
      encryptedToken,
      secretKey
    ).toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  }
  return null;
};

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = getDecryptedToken(); // Retrieve the decrypted token

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }

    // Optionally add the API version parameter
    // config.url += config.url.includes("?")
    //   ? "&api-version=2.0"
    //   : "?api-version=2.0";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

 api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.clear();
      window.location.href = `${import.meta.env.VITE_PUBLIC_URL}/`;
    }
    return Promise.reject(error);
  }
);

export default api;
