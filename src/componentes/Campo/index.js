import "./Campo.css";

const Campo = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type}`}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Campo;
