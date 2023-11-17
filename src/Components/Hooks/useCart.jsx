import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import useAxiosPublic from "./useAxiosPublic";


const useCart = () => {
    const axiosSource = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch, data: cart = []}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await axiosSource.get(`/carts?email=${user.email}`);
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;