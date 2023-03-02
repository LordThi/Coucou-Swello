import './styles.scss';
import twiboLogo from '../../assets/img/twibo-logo-white.png';

import { useState, setState } from 'react';

import usersData from '../../data/MOCK_users.json';

import LoginForm from '../LoginForm/index'
import Toggler from '../Toggler';

const Header = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(`mail ${email}`)
  console.log(`pass ${password}`)
  const [resultConnexion, setResultConnexion] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleEmailChangeField = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChangeField = (evt) => {
    setPassword(evt.target.value);
  };

  const handleLogin = () => {
    event.preventDefault();
    const user = usersData.find((u) => u.email === email); 
    if (user && user.password === password) { 
      setResultConnexion("Bienvenue 🖖, c'est bien d'être curieux");
      setIsLogged(true);
    } else {
      setResultConnexion("Quelqu'un n'est pas assez curieux 👀");
    }
  };

  const handleLogout = () => {
    event.preventDefault();
    setIsLogged(false);
  }

  const handleClick = () => {
    setLoginOpen(!isLoginOpen);
    setResultConnexion('');
  };

  return (
  <div className='header__wraper'>
    <div className='header__nav'>
      < img src={twiboLogo} className='icon-logo' alt="twibo logo" />
      <div className='header__login'>
        {
          isLoginOpen && 
          <LoginForm
          email={email}
          password={password}
          emailChangeField={handleEmailChangeField}
          passwordChangeField={handlePasswordChangeField}
          handleLogin={handleLogin}
          isLogged={isLogged}
          loggedMessage={resultConnexion}
          />
        }
        <Toggler
        onEmitClick={handleClick}
        isOpen={isLoginOpen}
        isLogged={isLogged}
        logOut={handleLogout}/>
      </div>
    </div>
  </div>
  )
};

export default Header;
