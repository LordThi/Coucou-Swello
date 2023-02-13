

const Toggler = ({
  onEmitClick,
  isOpen
}) => {
    const classNameCSS = isOpen ? "toggler toggler--open" : "toggler"
    return (
      <button className={classNameCSS} type="button" onClick={onEmitClick}>x</button>
    );
};

export default Toggler;
