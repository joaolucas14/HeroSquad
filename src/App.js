import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Ataque",
      cor: "#F50501",
    },
    {
      id: uuidv4(),
      nome: "Defesa",
      cor: "#0114F5",
    },
    {
      id: uuidv4(),
      nome: "Suporte",
      cor: "#F5DE00",
    },
  ]);

  const [herois, setHerois] = useState([]);

  function deletarHeroi(id) {
    setHerois(herois.filter((heroi) => heroi.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoHeroiAdicionado = (heroi) => {
    heroi.id = uuidv4();
    heroi.favorito = false;
    setHerois([...herois, heroi]);
  };

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setHerois(
      herois.map((heroi) => {
        if (heroi.id === id) heroi.favorito = !heroi.favorito;
        return heroi;
      })
    );
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem="/imagens/banner.jpg"
        textoAlternativo="banner principal"
      />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoHeroiCadastrado={(heroi) => aoNovoHeroiAdicionado(heroi)}
      />

      {times.map((time) => (
        <Time
          aoFavoritar={resolverFavorito}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.cor}
          herois={herois.filter((heroi) => heroi.time === time.nome)}
          aoDeletar={deletarHeroi}
          mudarCor={mudarCorDoTime}
          id={time.id}
        />
      ))}
    </div>
  );
}

export default App;
