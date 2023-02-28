
import "swiper/scss";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import recommendations from '../../data/MOCK_ recommendations.json';
import fivestar from '../../assets/img/Five-Star.png';
import './styles.scss';


import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {

  return (

    <div className='carousel__container'>

      {/* <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          recommendations.map((recommendation) => (
          <li className="swiper-slide" key={recommendation.id} className="social-media--card">

            <div className="card__img">
              <img src={recommendation.img} alt=""/>
            </div>
            <div className="card__comment">
              <p className="card__message">{recommendation.msg}</p>
              <img  className="card__stars" src={fivestar} alt="" />
              <p className="card__author">{recommendation.author}</p>
              <p className="card__job">{recommendation.job}</p>
            </div>
          </li>
          ))
        }
      </Swiper> */}

<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>



</div>
  );
};

export default Carousel;
