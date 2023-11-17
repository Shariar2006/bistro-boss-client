import axios from "axios";

const axiosSource = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosSource
};

export default useAxiosPublic;