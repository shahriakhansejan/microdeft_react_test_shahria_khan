import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://react-interview.crd4lc.easypanel.host/api",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        config.headers.authentication = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        localStorage.removeItem("access-token");
        navigate("/login");
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
