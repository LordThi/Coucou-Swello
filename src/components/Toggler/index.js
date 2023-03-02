import './styles.scss';

const Toggler = ({
  onEmitClick,
  isOpen,
  isLogged,
  logOut
}) => {
  const classNameCSS = isOpen ? "toggler--open" : "toggler--close"
  return (

    isOpen ?
      (<button 
          className={classNameCSS}
          type="button"
          onClick={onEmitClick}>
            x
      </button>)
      : isLogged ?
        (<button 
          className={classNameCSS}
          type="button"
          onClick={logOut}>
            Déconnexion
        </button>) :
        (<button 
          className={classNameCSS}
          type="button"
          onClick={onEmitClick}>
            Connexion
        </button>)

  );
};

export default Toggler;
