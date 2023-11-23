/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { name, recipe, image, price, _id } = item || {}
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()

    const handleOrder = () => {

        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('https://bistro-boss-server-beige-six.vercel.app/carts', cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch()
                }
            })

        } else {

            Swal.fire({
                title: "You are not Logged In!",
                text: "Please Login to add to cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });

        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
                <h1 className="bg-black text-white absolute right-4 px-3 py-1 top-2">${price}</h1>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => { handleOrder(item) }} className="btn btn-outline text-center text-[#BB8506] mt-4 border-0 border-b-4">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;