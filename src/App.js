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

  function deletarHeroi() {
    console.log("deletando heroi");
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
    setHerois([...herois, heroi]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoHeroiCadastrado={(heroi) => aoNovoHeroiAdicionado(heroi)}
      />

      {times.map((time) => (
        <Time
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
