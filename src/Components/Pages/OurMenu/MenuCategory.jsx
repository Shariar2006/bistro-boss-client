/* eslint-disable react/prop-types */
import Cover from "../../Cover/Cover";
import PopularFood from "../Home/PopularFood";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="my-10">
            <div className="my-8">
            {title && 
            <Cover img={img} title={title} subTitle='Would you like to try a dish?'></Cover>
            }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    items?.map(item => <PopularFood key={item._id} item={item}></PopularFood>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;