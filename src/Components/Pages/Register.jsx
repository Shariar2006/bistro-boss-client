import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";


const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUser, logOut, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSource = useAxios()

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const userInfo = {
                    email: data.email,
                    name: data.name,
                    photo: data.photo
                }
                console.log(result.user)
                axiosSource.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Register successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            
                            logOut()
                            navigate('/login')
                        }
                        handleUpdateProfile(data.name, data.photo)
                    })

            })
            .catch(err => { console.log(err) })
    }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="url" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/ })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password maximum 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be one uppercase, one lowercase,one number and one special characters</span>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                            <h1>Already have an account? <Link to='/login' className="text-blue-600 underline">Please Login</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;