import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import silde1 from '../../../assets/home/slide1.jpg'
import silde2 from '../../../assets/home/slide2.jpg'
import silde3 from '../../../assets/home/slide3.jpg'
import silde4 from '../../../assets/home/slide4.jpg'
import silde5 from '../../../assets/home/slide5.jpg'


const Swipar = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-2xl font-semibold text-white text-center mb-5"
      >
        <SwiperSlide>
            <img src={silde1} alt="" />
            <h3 className='-mt-16 '>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silde2} alt="" />
            <h3 className='-mt-16 '>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silde3} alt="" />
            <h3 className='-mt-16 '>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silde4} alt="" />
            <h3 className='-mt-16 '>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silde5} alt="" />
            <h3 className='-mt-16 '>Salad</h3>
        </SwiperSlide>
      
        
      </Swiper>
    );
};

export default Swipar;