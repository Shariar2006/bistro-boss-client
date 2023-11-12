import Cover from "../../../Cover/Cover";
import order from '../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/UseMenu";
import CardFood from "../../../CardFood/CardFood";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['dessert', 'pizza', 'soup', 'salad', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    console.log(initialIndex)
    console.log(category)

    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu?.filter(item => item.category === 'drinks')

    return (
        <div className="space-y-10">
            <Cover img={order} title='Order Food'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <CardFood items={desserts}></CardFood>
                </TabPanel>
                <TabPanel>
                <CardFood items={pizzas}></CardFood>
                </TabPanel>
                <TabPanel>
                <CardFood items={soups}></CardFood>
                </TabPanel>
                <TabPanel>
                <CardFood items={salads}></CardFood>
                </TabPanel>
                <TabPanel>
                <CardFood items={drinks}></CardFood>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;