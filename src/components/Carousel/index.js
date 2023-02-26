
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import './styles.scss';
import "swiper/css";
import recommendations from '../../data/MOCK_ recommendations.json';

const Carousel = () => {

  return (

    <div className='carousel__container'>

      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          recommendations.map((recommendation) => (

            <SwiperSlide key={recommendation.id} className={`social-media--card ${recommendation.category}`}>
              <div className={recommendation.img}></div>
              <p className='message'>{recommendation.msg}</p>
              <p className=''>{recommendation.author}</p>
          </SwiperSlide>
          ))
        }
      </Swiper>

    </div>

  );
};

export default Carousel;
