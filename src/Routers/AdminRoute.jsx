/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Components/Hooks/useAdmin";

const AdminRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, adminIsLoading] = useAdmin()
    const location = useLocation()
    if(loading || adminIsLoading){
        return <div><img className="mx-auto h-screen" src="https://www.jimphicdesigns.com/downloads/imgs-mockup/hourglass.gif" alt="" /></div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;