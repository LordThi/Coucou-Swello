

const Toggler = ({
  onEmitClick,
  isOpen
}) => {
  const classNameCSS = isOpen ? "toggler toggler--open" : "toggler"
  console.log(isOpen)
  return (

    !isOpen &&
      (<button 
          className={classNameCSS}
          type="button"
          onClick={onEmitClick}>
            Connexion
      </button>)

  );
};

export default Toggler;
