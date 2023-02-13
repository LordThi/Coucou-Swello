import './styles.scss';
import twiboLogo from '../../assets/img/twibo-logo-white.png';

import { useState, setState } from 'react';

import LoginForm from '../LoginForm/index'
import Toggler from '../Toggler';

const Header = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(`mail ${email}`)
  console.log(`pass ${password}`)
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleEmailChangeField = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChangeField = (evt) => {
    setPassword(evt.target.value);
  };

  const handleLogin = () => {

  };

  const handleLogout = () => {

  };

  const handleClick = () => {
    setLoginOpen(!isLoginOpen);
    console.log(isLoginOpen)
  };

  const welcomeMessage = "Bienvenue, c'est bien d'être curieux"

  return(
    <div className='header__sticky'>
      <div className='header__nav'>
      < img src={twiboLogo} className='icon-logo' alt="twibo logo" />
      <Toggler onEmitClick={handleClick} isOpen={isLoginOpen}/>
      {
        isLoginOpen && <LoginForm
        email={email}
        password={password}
        emailChangeField={handleEmailChangeField}
        passwordChangeField={handlePasswordChangeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        // isLogged={isLogged}
        loggedMessage={welcomeMessage}
      />
      }
      
      </div>
    </div>
  )
}

export default Header;
