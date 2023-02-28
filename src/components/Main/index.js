import './styles.scss';
import rightRectangle from '../../assets/img/right-rectangle.png';
import deadCarousel from '../../assets/img/dead-carousel.png';
import manChiling from '../../assets/img/man.png';
import Carousel from '../Carousel';

const Main = () => {
  return (
    <div className='main__container'>
      <div className='main__intro'>
        <div className='left-background-triangle'></div>
          <img className='right-background-triangle' src={rightRectangle} alt="" />
        {/* <div className='right__triangle-wraper'>
          <div className='right-background-triangle'></div>
        </div> */}
        <div className='main__inner'>
          <div className='message__container'>
            <h1 className='main__title'>Coucou Swello 👋</h1>
            <h2 className='main__subtitle'>Moi c'est Thibaut, votre prochain stagiaire / développeur.</h2>
            <p className='motivation__text'>
              Je sais que vous ne lisez pas les lettres de motivation alors j'ai dû ruser pour vous montrer la mienne. Je suis votre aventure sur les réseaux sociaux depuis le début de ma reconversion professionnelle et plus le temps passe, plus j'ai envie de monter dans le bateau et faire partie de votre aventure
            </p>
          </div>
          <div className='right__container'>
            <img className='img__carousel' src={deadCarousel} alt="" />
          </div>
          <img className='man__chilling' src={manChiling}></img>
        </div>
      </div>
      <div className='main__whoami'>
        <h1 className='whoami__title'>Ce que vous n'apprendrez pas dans mon <h2>CV</h2></h1>
        <div className='whoami__theorem'>
          <div className='whoami__theorem--list'>
            <p className='whoami__theorem--list-title'>📆 Création de mes profils</p><hr/>

            <ul className='whoami__theorem--list-list'>
              <li className='whoami__theorem--list-item'>
                <p>Facebook</p><p>👤 12 nov. 2007</p></li><br/>

              <li className='whoami__theorem--list-item'>
                <p>Twitter</p><p>🐦 mai 2011</p></li><br/>

              <li className='whoami__theorem--list-item'>
                <p>YouTube</p><p>🎥 6 Juin 2011</p></li><br/>

              <li className='whoami__theorem--list-item'>
                <p>Instagram</p><p>🤳 7 déc. 2013</p></li><br/>

              <li className='whoami__theorem--list-item'>
                <p>tiktok</p><p></p>👨‍🎤 fév. 2022</li><br/>

              <li className='whoami__theorem--list-item'>
                <p>LinkedIn</p><p>🤷‍♂️</p></li>
            </ul>
          </div>
          
          <div className='whoami__solution'>
            <p className='whoami__calendar-explanation'>
              Outre le fait de montrer que je suis vieux 👴🏼, vous pouvez voir que j'ai toujours cherché l'intérêt des diverses plateformes et j'ai pu voir, avec le temps, leurs forces et leurs faiblesses, mais surtout leur puissance dans le monde que l'on a construit et celui qui est à venir.
            </p>
            <p className='whoami__calendar-explanation'>
              C'est avec la même curiosité que je me suis inscrit sur votre plateforme, bien avant de décider de vous composer ce doux site dont le CSS est une douce mélodie (c'est faux 🙅‍♂️).
            </p>
          </div>
        </div>

        
        
      </div>
      <Carousel />
    </div>
  )
};

export default Main;
