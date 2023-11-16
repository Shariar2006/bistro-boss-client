import { FaTrashCan } from "react-icons/fa6";
import {  FaUsers } from "react-icons/fa";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSource = useAxios()
    const {data, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSource.get('/users');
            return res.data
        }
    })


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
                axiosSource.delete(`/users/${id}`)
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
            <div className="w-11/12 mx-auto p-5 ">
                <h2 className="text-4xl font-semibold">Total Order: {data?.length}</h2>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, index) => <tr key={user._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>
                                <button onClick={() => { handleDelete(user?._id) }} className="btn btn-ghost btn-lg "><FaUsers /></button>
                                </td>
                                <th>
                                    <button onClick={() => { handleDelete(user?._id) }} className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllUsers;