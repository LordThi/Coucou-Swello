import './styles.scss';
import twiboLogo from '../../assets/img/twibo-logo-white.png';
import LoginForm from '../LoginForm/index'
import { useState, setState } from 'react';

const Header = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(`mail ${email}`)
  console.log(`pass ${password}`)
  
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

  const welcomeMessage = "Bienvenue, c'est bien d'être curieux"

  return(
    <div className='header__sticky'>
      <div className='header__nav'>
      < img src={twiboLogo} className='icon-logo' alt="twibo logo" />
      <input type="button" value="X" />
      <LoginForm
        email={email}
        password={password}
        emailChangeField={handleEmailChangeField}
        passwordChangeField={handlePasswordChangeField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        // isLogged={isLogged}
        loggedMessage={welcomeMessage}
      />
      </div>
    </div>
  )
}

export default Header;
