import './styles.scss';
import recommendations from '../../data/MOCK_ recommendations.json';

const Carousel = () => {
  return(
    <div className='carousel__container'>
      {
          recommendations.map((recommendation) =>

            <div key={recommendation.id} className='social-media--card'>
              <div className={recommendation.img}></div>
              <p className='message'>{recommendation.msg}</p>
              <p>{recommendation.author}</p>
            </div>

          )
      }
    </div>
  )
};

export default Carousel;
