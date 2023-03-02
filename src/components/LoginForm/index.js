import Field from './Field';
import './styles.scss';

const LoginForm = ({
  email,
  password,
  emailChangeField,
  passwordChangeField,
  handleLogin,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
        </div>
      )}

      {!isLogged && (
        <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={emailChangeField}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={passwordChangeField}
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
          >
            OK
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
