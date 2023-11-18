import { useForm } from "react-hook-form";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2'


const image_hosting_key = import.meta.env.VITE_IMAGE_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
    const axiosSource = useAxiosPublic()
    const axiosSecureSource = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosSource.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe : data.recipe,
                image: res.data.data.display_url 
            }
            const menuRes = await axiosSecureSource.post('/foodMenu', menuItem)
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} add to menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        }
    }
    return (
        <div>
            <div className="mt-8">
                <SectionTitle subtitle="What's new?" headerTitle='Add An Item'></SectionTitle>
            </div>

            <div className="p-5 pl-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select {...register("category")} className="select select-bordered w-full ">
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
                            <input type="number" placeholder="Price" {...register("price")} className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("recipe")} placeholder="details"></textarea>
                    </div>

                    <div>
                        <input type="file" {...register("image")} className="file-input w-full max-w-xs" />
                    </div>

                    <input type="submit" value="Add Item" className="btn" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;