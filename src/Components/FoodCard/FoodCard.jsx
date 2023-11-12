/* eslint-disable react/prop-types */

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" /></figure>
                <h1 className="bg-black text-white absolute right-4 px-3 py-1 top-2">${price}</h1>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline text-center text-[#BB8506] mt-4 border-0 border-b-4">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;