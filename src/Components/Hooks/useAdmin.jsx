import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSource = useAxiosSecure()
    const { data: isAdmin, isPending: adminIsLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSource.get(`/users/admin/${user?.email}`)
            console.log(res?.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, adminIsLoading]
};

export default useAdmin;