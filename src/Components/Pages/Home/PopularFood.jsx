/* eslint-disable react/prop-types */


const PopularFood = ({item}) => {
    const {name, recipe, image, price} = item || {}
    return (
        <div className="flex gap-3">
            <img className="w-[100px] rounded-tr-2xl rounded-bl-2xl" src={image} alt="" />
            <div>
            <h1 className="uppercase font-semibold">{name}----------</h1>
            <p>{recipe}</p>
            </div>
            <h4 className="text-yellow-500">${price}</h4>
        </div>
    );
};

export default PopularFood;