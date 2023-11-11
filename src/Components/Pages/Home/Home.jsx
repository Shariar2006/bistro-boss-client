import SectionTitle from "../../SectionTitle/SectionTitle";
import Banner from "./Banner";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Swipar from "./Swipar";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-5 ">
                <SectionTitle
                headerTitle='Order Online'
                subtitle='Form 11:00am To 10:00pm'
                ></SectionTitle>
                <Swipar></Swipar>
            </div>
            <div className="my-14">
                <PopularMenu></PopularMenu>
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