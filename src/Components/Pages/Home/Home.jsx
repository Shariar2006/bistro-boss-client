import { Helmet } from "react-helmet-async";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Swipar from "./Swipar";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet> <title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <div className="my-5 ">
                <SectionTitle
                headerTitle='Order Online'
                subtitle='Form 11:00am To 10:00pm'
                ></SectionTitle>
                <Swipar></Swipar>
            </div>
            <div className="bistro-parallax py-20 bg-fixed mt-20">
                <div className="text-center p-10 bg-white w-3/4 mx-auto">
                <h1 className="text-4xl">Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
            <div className="my-14">
                <PopularMenu></PopularMenu>
            </div>
            <div className="bg-black p-20 text-center mb-10">
                <h1 className="text-4xl font-bold text-white">Call Us: +88 0192345678910</h1>
            </div>
            <div className="mb-10">
                <Featured></Featured>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;