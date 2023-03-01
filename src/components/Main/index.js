import './styles.scss';
import rightRectangle from '../../assets/img/right-rectangle.png';
import deadCarousel from '../../assets/img/dead-carousel.png';
import manChiling from '../../assets/img/man.png';
import Carousel from '../Carousel';
import betterComputer from '../../assets/img/computerbetter.gif';
import freeButton from '../../assets/img/freebtn.png';

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
            <div className='free__button'>
              <img src={freeButton} alt="" />
            </div>
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
              C'est avec la même curiosité que je me suis inscrit sur votre plateforme, bien avant de décider de vous composer ce merveilleux site dont le CSS est une douce mélodie (c'est faux 🙅‍♂️).
            </p>
            <p className='whoami__calendar-explanation'>

            </p>
          </div>
      </div>
      <div className='watalike'>
            <h2 className='watalike_title'>
              Ce que j'💙 chez swello
            </h2>
            <p className='watalike_text'>

            </p>
          </div>
          <div className='why'>
            <h1>"Ok, ok... mais pourquoi?" 🤔</h1>
            <h2 className='why_title'>Pourquoi vous? 🫵</h2>
            <p className='why__text'>
              Il faut être honnete, il y a beaucoup de belles entreprises en région parisienne. Alors pourquoi (mais surtout comment) je vous ai trouvé?
            </p>
            <p className='why__text'><u>Cluedo du love</u> 🕵️‍♂️</p>
            <ul className='why_you--list why__text'>
              <li className='why_you--list-item '>
                🌞 <span className='pink-span'>Votre localité</span> , j’ai vécu des moments d’enfance merveilleux à Sanary auprès de mes grands-parents, mes parents ont décidé de s’installer à Hyères par la suite et, maintenant papa, je souhaite apporter à ma fille une qualité de vie meilleure en vivant à mon tour dans cette magnifique région.
              </li><br/>
              <li className='why_you--list-item'>
                💾 <span className='pink-span'>Votre stack technique</span>, car bien que de formation purement JavaScript, je souhaite tout de même découvrir et apprendre le PHP. Le fait que vous proposez des projets permettant cet apprentissage est une réelle motivation à travailler avec vous.
              </li><br/>
              <li className='why_you--list-item'>
                📊 <span className='pink-span'>Votre mission</span>, qui est assurément la raison la plus importante. La lecture de mon CV a pu vous montrer le côté “atypique” de mon proil. Le fil conducteur de ces expériences diverses a toujours été: “Donner du sens à mon activité”. Cela a été le cas dans la santé pendant mes études ou mon activité de vidéaste, dans mon commerce mais aussi dans ma parenthèse administrative. Je retrouve cela dans les outils que vous proposez.
              </li><br/>
            </ul>
            <h2 className='why_title'>Pourquoi moi? 🤌</h2>
            <p className='why__text'>
              J'ai découvert le code à la dure lors de ma piscine à 42. Malgré la difficulté, je suis tombé amoureux du développement. Cela s'est confirmé durant les 5 derniers mois chez O'Clock. Je comprends et apprends vite, je suis volontaire devant la difficulté et j'ai hâte d'apprendre auprès de développeurs plus expérimentés dans un vrai projet professionnel 👨‍💻
            </p>
            <h2 className='why_title'>Pourquoi Nous? 🫶</h2>
            <p className='why__text'>
            Faut il connaitre les reseaux sociaux pour être un bon développeur chez swello?
            Théoriquement non, mais autant que connaitre ses 🐄 vous aide à faire un bon 🧀, connaitre le coeur de votre activité peut me permettre d'apporter mes idées en plus de ma technique et mon entousiame.
            </p>
          </div>
          
        </div>
        <img className='computer' src={betterComputer} alt="" />
      <Carousel />
    </div>
  )
};

export default Main;
