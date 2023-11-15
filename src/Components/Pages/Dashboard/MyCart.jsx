import { FaTrashCan } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";


const MyCart = () => {
    const [cart, refetch] = useCart()
    const axiosSource = useAxios()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSource.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount>0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="w-11/12 mx-auto p-5 flex justify-between">
                <h2 className="text-4xl font-semibold">Total Order: {cart.length}</h2>
                <h2 className="text-4xl font-semibold">Total Price: {totalPrice}</h2>
                <h2 className="btn btn-primary">Pay</h2>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>
                                    $ {item?.price}
                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(item?._id) }} className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;