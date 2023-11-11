import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import PopularFood from "./PopularFood";


const PopularMenu = () => {
    const [menu, setMenu] = useState()

    useEffect(()=>{
        fetch('/Menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularFood = data.filter(item=> item.category === 'popular')
            setMenu(popularFood)
        })
    },[])

    return (
        <section>
            <SectionTitle 
            headerTitle='Popular MENU'
            subtitle='Check it out'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    menu?.map(item => <PopularFood key={item._id} item={item}></PopularFood>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;