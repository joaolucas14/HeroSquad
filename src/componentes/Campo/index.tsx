import React from "react";
import "./Campo.css";

interface campoProps{
  aoAlterado:(valor:string)=>void
  placeholder:string
  type:string
  label:string
  valor:string
  obrigatorio: boolean
}

const Campo = ({aoAlterado, type, label, valor, obrigatorio, placeholder}:campoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
