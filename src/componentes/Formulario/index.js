import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState(props.times[0]);
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
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
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu Super Herói</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
          obrigatorio={true}
          label="Descrição"
          placeholder="Digite sua descrição"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
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
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <CampoTexto
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          obrigatorio
          label="cor"
          placeholder="Digite a cor do time"
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
