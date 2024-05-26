import axios from "axios";
import { useEffect } from "react";



const axiosSecure = axios.create({
    baseURL: 'https://jobify-server-psi.vercel.app',
    withCredentials: true
})

const useAxios = () => {
   
  
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error', error.message);
           
        })
    }, [])
    return axiosSecure;
};

export default useAxios;