import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const axiosSource = useAxiosSecure()
    console.log(user?.email)
    const { data: isAdmin, isPending: adminIsLoading } = useQuery({
        queryKey: [ 'isAdmin', user?.email ],
        queryFn: async () => {
            const res = await axiosSource.get(`/users/admin/${user?.email}`)
            console.log(res?.data)
            return res.data?.admin;
        },
        enabled: !!user?.email
    })
    return [isAdmin, adminIsLoading]
};

export default useAdmin;