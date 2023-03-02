import './styles.scss';
import chatpic from '../../assets/img/chatpic.png';

import whatsapp from '../../assets/img/whatsapp.png'
import { useState } from 'react';

const Chat = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="chat">
      <div className='chat__container'>
        <div className="chat__header">
          <img className='chat__chatpic' src={chatpic} alt="" />
          <div className="chat__pseudo">
            <p className="pseudo">Thibaut</p>
            <p className="status">Hors Ligne</p>
          </div>
        </div>
        <div className="message__container">
          spiner?
          <p className="messagerie"></p>
        </div>
        <p className="is__typing"></p>
        <input className='disabel_btn' type="text" disabled="disabled" placeholder="Nop..."/>
      </div>
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
