import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuPageCover from '../../../assets/menu/banner3.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../Hooks/UseMenu';
import MenuCategory from './MenuCategory';
import SectionTitle from '../../SectionTitle/SectionTitle';


const OurMenu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const offered = menu?.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className='mb-5'>
                <Cover img={menuPageCover} title='OUR MENU' subTitle='Would you like to try a dish?'></Cover>
            </div>
            <SectionTitle subtitle="Don't miss" headerTitle="today's offered"></SectionTitle>
            <div>
                <MenuCategory items={offered} img={menuPageCover}></MenuCategory>
            </div>
            <div className=''>
                <MenuCategory items={desserts} img={dessert} title='Desserts'></MenuCategory>
            </div>
            <div>
                <MenuCategory items={pizzas} img={pizza} title='Pizzas'></MenuCategory>
            </div>
            <div>
                <MenuCategory items={salads} img={salad} title='Salads'></MenuCategory>
            </div>
            <div>
                <MenuCategory items={soups} img={soup} title='Soups'></MenuCategory>
            </div>
            
        </div>
    );
};

export default OurMenu;