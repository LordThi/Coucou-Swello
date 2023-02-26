import Carousel from '../Carousel';
import './styles.scss';

const Main = () => {
  return (
    <div className='main__container'>
      <div className='left-background-triangle'></div>
      <div className='message__container'>
        <Carousel />
      </div>
      <div className='right-background-triangle'></div>
    </div>
  )
};

export default Main;
