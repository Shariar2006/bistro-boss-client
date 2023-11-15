import axios from "axios";

const axiosSource = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {
    return axiosSource
};

export default useAxios;