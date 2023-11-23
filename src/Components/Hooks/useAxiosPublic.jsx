import axios from "axios";

const axiosSource = axios.create({
    baseURL: 'https://bistro-boss-server-beige-six.vercel.app'
})

const useAxiosPublic = () => {
    return axiosSource
};

export default useAxiosPublic;