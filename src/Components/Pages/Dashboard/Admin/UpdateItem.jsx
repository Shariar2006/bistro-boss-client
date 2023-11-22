import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const UpdateItem = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


    const { id } = useParams()
    const { name, recipe, _id, price, category, image } = useLoaderData()
    console.log(id)

    const axiosSource = useAxiosPublic()
    const axiosSecureSource = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosSource.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            body: imageFile
        })
        // if (res.data.success) {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: image || res?.data?.data?.display_url
        }
        console.log(menuItem)
        const menuRes = await axiosSecureSource.patch(`/foodMenu/${_id}`, menuItem)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} add to menu`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        // 
        // }
    }
    return (
        <div>
            <div className="mt-8">
                <SectionTitle subtitle='Update Item' headerTitle='Update An Item'></SectionTitle>
            </div>

            <div className="p-5 pl-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input defaultValue={name} type="text" placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category")} className="select select-bordered w-full ">
                                <option disabled selected>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input defaultValue={price} type="number" placeholder="Price" {...register("price")} className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} className="textarea textarea-bordered h-24" {...register("recipe")} placeholder="details"></textarea>
                    </div>

                    <div>
                        <input type="file" {...register("image")} className="file-input w-full max-w-xs" />
                    </div>

                    <input type="submit" value="Update an Item" className="btn" />
                </form>
            </div>
        </div>
    );

};

export default UpdateItem;