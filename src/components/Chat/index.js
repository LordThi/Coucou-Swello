import './styles.scss';
import chatpic from '../../assets/img/chatpic.png';
import disabledbtn from '../../assets/img/disabledbtn.png';

import whatsapp from '../../assets/img/whatsapp.png'
import { useState } from 'react';

const Chat = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="chat">
      {isOpen &&
      (<div className='chat__container'>
        <div className="chat__header">
          <img className='chat__chatpic' src={chatpic} alt="" />
          <div className="chat__pseudo">
            <p className="pseudo">Thibaut</p>
            <p className="status">Hors Ligne</p>
          </div>
        </div>
        <div className="chat__message-container">
          <p className="messagerie-text">
            Je ne suis pas disponible pour le moment... Mais si vous voulez me parler, envoyez moi un petit mot par mail ou sur LinkedIn 👐
          </p>
        </div>
        <input className='disabel_btn' type="text" disabled="disabled" placeholder="Nop..."/>
        <div className="disablebtn__container"></div>
        <img className="disablebtn__img" src={disabledbtn} alt="" />
      </div>)
      }
      <div className='chat__btn-container'>
        <button className='chat__btn' onClick={handleClick}>
        {
          !isOpen &&
          (<img className='chat__icon' src={whatsapp} alt="" />)
        }
        {
          isOpen &&
          <p className='chat__icon'>🙅‍♂️</p>
        }
        </button>
        
      </div>
    </div>
  );
};

export default Chat;
