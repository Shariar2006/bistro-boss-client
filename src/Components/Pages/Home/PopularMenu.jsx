import SectionTitle from "../../SectionTitle/SectionTitle";
import PopularFood from "./PopularFood";
import useMenu from "../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState()

    // useEffect(() => {
    //     fetch('/Menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularFood = data.filter(item => item.category === 'popular')
    //             setMenu(popularFood)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                headerTitle='Popular MENU'
                subtitle='Check it out'
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    popular?.map(item => <PopularFood key={item._id} item={item}></PopularFood>)
                }
            </div>
            <div className="text-center mt-2">
                <button className="btn btn-outline mt-4 border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;