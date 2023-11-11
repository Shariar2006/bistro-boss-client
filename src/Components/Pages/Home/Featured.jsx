import SectionTitle from "../../SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <section className="featured text-white p-5 bg-fixed">
            <div className="bg-opacity-60">
            <SectionTitle subtitle='Check it out' headerTitle='Featured item'></SectionTitle>
            <div className="md:flex items-center p-10 justify-center gap-5 bg-opacity-60">
                <div className="p-20">
                <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Featured;