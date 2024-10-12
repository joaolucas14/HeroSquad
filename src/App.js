import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Ataque",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Defesa",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Suporte",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
  ];

  const [herois, setHerois] = useState([]);
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
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          herois={herois.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
