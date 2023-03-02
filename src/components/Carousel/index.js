
import "swiper/scss";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import recommendations from '../../data/MOCK_ recommendations.json';
import fivestar from '../../assets/img/Five-Star.png';
import './styles.scss';
import lastSmoke from '../../assets/img/smoke-btm-lvl1.png';
import facebook from '../../assets/img/facebook.png';
import insta from '../../assets/img/insta.png';
import tiktok from '../../assets/img/tiktok.png';
import youtube from '../../assets/img/youtube.png';
import twitter from '../../assets/img/twitter.png';
import pubsista from '../../assets/img/pubsista.png';
import githubpink from '../../assets/img/github-pink.png';



import { Autoplay, Pagination } from "swiper";

const Carousel = () => {

  return (

  <div className='carousel__container'>
    
    <Swiper
      width={1424.24}
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {
          recommendations.map((recommendation) => (
          <SwiperSlide key={recommendation.id} className="social-media--card">

            <div className="card__img">
              <img src={recommendation.img} alt=""/>
            </div>
            <div className="card__comment">
              <p className="card__message">{recommendation.msg}</p>
              <img  className="card__stars" src={fivestar} alt="" />
              <p className="card__author">{recommendation.author}</p>
              <p className="card__job">{recommendation.job}</p>
            </div>
          </SwiperSlide>
          ))
        }
    </Swiper>

    <h1>
      Trouvez le stagiaire qui vous correspond
    </h1>
    <p className="viens_on_est_bien">Essayez Thibaut en <span className="pink-span">illimité</span> pendant 2 mois, minimum.</p>
    <p className="viens_on_est_bien">
      contactez-moi <span className="bluff">(pourquoi ça n'est pas déjà fait? 🧐)</span> 
    </p>

    <div className="contact__container">
        <div className="contact__card">
          <p className="contact__title">
            Mail
          </p>
          <p className="contact__way">
          <a href="mailto:thibaut.livigni@gmail.com">thibaut.livigni@gmail.com</a>
          </p>
        </div>
        <div className="contact__card">
          <p className="contact__title">
            Téléphone
          </p>
          <p className="contact__way">
            <a href="tel:+33784249038">07.84.24.90.38</a> 
          </p>
        </div>
        <div className="contact__card">
          <p className="contact__title">
            LinkedIn
          </p>
          <p className="contact__way">
            <a href="https://www.linkedin.com/in/thibautlivigni/">https://www.linkedin.com/in/thibautlivigni/</a>
          </p>
        </div>
    </div>
    <div className="everywhere_container">
      <div className="everywhere_card">
        <p className="contact__title2">
          Et partout ailleurs
        </p>
        <div className="contact__way">
            <a href="https://www.youtube.com/@Locksherty"><img className="social_icon" src={youtube} alt="" /></a>
            <a href="https://twitter.com/locksherty"><img className="social_icon" src={twitter} alt="" /></a>
            <a href="https://www.tiktok.com/@locksherty"><img className="social_icon" src={tiktok} alt="" /></a>
            <a href="https://www.instagram.com/lordthibiscuit/"><img className="social_icon" src={insta} alt="" /></a>
            <a href="https://www.facebook.com/ThibIscuite"><img className="social_icon" src={facebook} alt="" /></a>
            <a href="https://github.com/LordThi"><img className="social_icon" src={githubpink} alt="" /></a>
            
        </div>
        <div className="pub__sista">
          <p className="pub__sista-text">
            (Et ma petite soeur dont je gère la stratégie)</p>
          <a href="https://www.instagram.com/madamerrance/"><img className="pub__sista-img" src={pubsista} alt="" /></a>
        </div>
      </div>
    </div>
    <h1 className="last_bisou">
      à bientôt 🤙
    </h1>
    <div className="end_of_the_line">
      <div className="it-is-1h-du-mat-here">
        <img src={lastSmoke} alt="" />
      </div>
      <div className="final_rocket"></div>
    </div>
    

</div>
  );
};

export default Carousel;
