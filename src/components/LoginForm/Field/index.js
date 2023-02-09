const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {

  const inputId = `field-${name}`;

  return (
    <div className='field'>
      <input
        value={value}
        onChange={onChange}
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Field;
