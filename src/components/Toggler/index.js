import './styles.scss';

const Toggler = ({
  onEmitClick,
  isOpen
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
      :
      (<button 
        className={classNameCSS}
        type="button"
        onClick={onEmitClick}>
          Connexion
      </button>)

  );
};

export default Toggler;
