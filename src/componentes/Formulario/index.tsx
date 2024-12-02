import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IHeroi } from "../../compartilhado/interface/IHeroi";


interface FormularioProps{
  aoHeroiCadastrado:(heroi:IHeroi) =>void
  times:string[]
  cadastrarTime: (time: { nome: string; cor: string }) => void;
}

const Formulario = (props:FormularioProps) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState(props.times[0]);
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento:React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoHeroiCadastrado({
      nome,
      descricao,
      imagem,
      time,
    });
    setNome("");
    setDescricao("");
    setImagem("");
    setTime(props.times[0]);
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu Super Herói</h2>
        <Campo
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
        />
        <Campo
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
          obrigatorio={true}
          label="Descrição"
          type="text"
          placeholder="Digite sua descrição"
        />
        <Campo
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          type="text"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          type="text"
          placeholder="Digite o nome do time"
        />
        <Campo
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          obrigatorio
          label="cor"
          type="color"
          placeholder="Digite a cor do time"
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
