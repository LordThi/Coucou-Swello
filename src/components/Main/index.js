import './styles.scss';
import rightRectangle from '../../assets/img/right-rectangle.png';
import deadCarousel from '../../assets/img/dead-carousel.png';
import manChiling from '../../assets/img/man.png';
import betterComputer from '../../assets/img/computerbetter.gif';
import freeButton from '../../assets/img/freebtn.png';
import LocalityCard from '../../assets/img/LocalityCard.png';
import StackCard from '../../assets/img/StackCard.png';
import MissionCard from '../../assets/img/MissionCard.png';
import HumorCard from '../../assets/img/HumorCard.png';

const Main = () => {
  return (
    <div className='main__container'>
      <div className='main__intro'>
        <div className='left-background-triangle'></div>
          <img className='right-background-triangle' src={rightRectangle} alt="" />
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
        <h1 className='whoami__title'>Ce que vous n'apprendrez pas dans mon</h1><h2>CV</h2>
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
              Il y a beaucoup de features qui m'ont plu mais ce qui m'a sauté aux yeux c'est que: c'est beau et c'est fluide. Alors faisons connaissance 🙋‍♂️.
            </p>
          </div>
      </div>
      <div className='meet'>
      <h2 className='why_title'>Pourquoi moi? 🤌</h2>
        <div className='meet__line'>
          <p className='meet-text'>
          Je suis né en l'an de grâce 1988.<br/>
          En ce temps là...<br/>
          trop loin?<br/>
          ok ok, avançons le temps...
          </p>
          <div className='meet-img'>
            <img src="https://media.tenor.com/PjI-fL_eodcAAAAC/rick-and-morty-rick.gif" />
          </div>
        </div>

        <div className='meet__line'>
          <div className='meet-img2'>
            <img src="https://media.tenor.com/Na2fcNb0VSkAAAAd/why-rick.gif" />
          </div>
          <p className='meet-text'>
          J'ai écrit ma première ligne de code il y a un an pendant une des épreuves les plus sélectives que j'ai pu connaitre: la piscine de 42.<br/>
          C'est un peu comme remplacer le guitariste de Queen 🎸 en ayant regardé un tuto YouTube.
          </p>
        </div>

        <div className='meet__line'>
          <p className='meet-text'>
          Pour autant, je suis tombé amoureux du développement.<br/>
          Cela s'est confirmé avec le temps et encore plus durant les 5 derniers mois chez O'Clock, lieu où j'ai appris HTML, CSS, JavaScript, Express.js, React & Redux. 
          </p>
          <div className='meet-img2'>
            <img className='meet-img2' src="https://thumbs.gfycat.com/HappygoluckyCoarseChimneyswift-size_restricted.gif" />
          </div>
        </div>

        <div className='meet__line'>
          <div className='meet-img2'>
            <img src="https://media2.giphy.com/media/ZdBnIqBeVWBYTobH8U/giphy.gif?cid=ecf05e47jisq6xfco3nsk0knisxo6egufom7h3qxq03nee2p&rid=giphy.gif&ct=g" />
          </div>
          <p className='meet-text'>
          Je comprends et apprends vite, je suis volontaire devant la difficulté et j'ai hâte d'apprendre auprès de développeurs plus expérimentés dans un vrai projet professionnel 👨‍💻
          </p>
        </div>
      </div>
      
      <div className='why'>
        <h2 className='why__title'>Pourquoi vous? 🫵</h2>
        <p className='why__text'>
          Il faut être honnête, il y a beaucoup de belles entreprises en région parisienne. Alors pourquoi (mais surtout comment) je vous ai trouvé?
        </p>
        <p className='why__text'><u>Cluedo du love</u> 🕵️‍♂️</p>
        <div className="why__cards">
          <img src={LocalityCard} alt="" className="why__card" />
          <img src={StackCard} alt="" className="why__card" />
          <img src={MissionCard} alt="" className="why__card" />
          <img src={HumorCard} alt="" className="why__card" />
        </div>

        <h2 className='why_title'>Pourquoi Nous? 🫶</h2>
        <p className='why__text'>
        Faut-il connaitre les reseaux sociaux pour être un bon développeur chez swello?
        Théoriquement non, mais autant que connaitre ses 🐄 vous aide à faire un bon 🧀, connaitre le coeur de votre activité peut me permettre d'apporter mes idées en plus de ma technique et mon enthousiame.
        </p>
      </div>
    </div>
    
    <div className='end_of_main'>
      <div className='end_of_main-right-container'>
        <div className='end_of_main-text-container'>
          <p className='end_of_main-text'>
            Je vous apporterais un cerveau, 10 doigts de plus, énormément de bonne volonté et de l'🤡.
          </p>
          <p className='end_of_main-text'>
            Vous m'apporterez de l'expérience, des défis pour mon besoin constant d'apprendre et une raison supplémentaire de m'installer dans le coin.
          </p>
          <p className='end_of_main-text2'>
            🤝
          </p>
        </div>
        <div className='end_of_main-right-container-pink-rectangle'></div>
      </div>
      <div className='end_of_main-computer'>
        <img  src={betterComputer} alt="" />
      </div>
    </div>
    
      
    </div>
  )
};

export default Main;
