import Banner from "./Banner";
import Swipar from "./Swipar";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-5 ">
                <h3 className="text-center text-yellow-500">---Form 11:00am To 10:00pm---</h3>
                <h1 className="text-4xl  text-center border-t-2 border-b-2 pt-1 w-64 mx-auto pb-2 mb-4 uppercase">Order Online</h1>
                <Swipar></Swipar>
            </div>
        </div>
    );
};

export default Home;