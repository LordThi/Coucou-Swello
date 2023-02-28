import './styles.scss';
import deadCarousel from '../../assets/img/dead-carousel.png';
import manChiling from '../../assets/img/man.png';

const Main = () => {
  return (
    <div className='main__container'>
      <div className='left-background-triangle'></div>
      <div className='main__inner'>
        <div className='message__container'>
          <h1 className='main__title'>Coucou Swello 👋</h1>
          <h2 className='main__subtitle'>Moi c'est Thibaut, votre prochain stagiaire.</h2>
          <p className='motivation__text'>Je sais que vous ne lisez pas les lettres de motivation alors j'ai dû ruser pour vous montrer la mienne. Je suis votre aventure sur les réseaux sociaux depuis le début de ma reconversion profesionnelle et plus le temps passe, plus j'ai envie de monter dans le bateau et faire partie de votre aventure.</p>
        </div>
        <div className='right__container'>
          <img className='img__carousel' src={deadCarousel} alt="" />
        </div>
        <img className='man__chilling' src={manChiling}></img>
      </div>
      <div className='right-background-triangle'></div>
    </div>
  )
};

export default Main;
