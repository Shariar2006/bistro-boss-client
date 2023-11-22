import { FaTrashCan } from "react-icons/fa6";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    const axiosSource = useAxiosSecure()

    const handleDelete = (id) => {
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
                axiosSource.delete(`/foodMenu/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount>0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: 'This food has been deleted.',
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
            <div className="mt-5">
                <SectionTitle subtitle='Hurry Up!' headerTitle='MANAGE ALL ITEMS'></SectionTitle>
            </div>
            <div>
            <div className="w-11/12 mx-auto p-5 flex justify-between">
                <h2 className="text-4xl font-semibold">Total Order: {menu.length}</h2>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu?.map((item, index) => <tr key={item._id}>
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
                                    <Link to={`/dashboard/updateItem/${item?._id}`}><button className="btn btn-ghost btn-lg "><FaEdit /></button></Link>
                                </th>
                                <th>
                                    <button onClick={() => { handleDelete(item?._id) }} className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageItem;