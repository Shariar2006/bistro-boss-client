import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const useCart = () => {
    const axiosSource = useAxios()
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