import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import useAxios from "../Hooks/useAxios";


const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/"
    const axiosSource = useAxios()


    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName,
                    photo: res.user.photoURL
                }
                console.log(res,userInfo)
                axiosSource.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data)
                    toast('successfully login')
                    navigate(form, { replace: true })
                })
            })
    }
    return (
        <div>
            <div className='p-3'>
                <div className="divider">or</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full">
                    <FaGoogle />
                    Button
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;