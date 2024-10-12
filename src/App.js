import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Ataque",
      corPrimaria: "#F50501",
      corSecundaria: "#F57876",
    },
    {
      nome: "Defesa",
      corPrimaria: "#0114F5",
      corSecundaria: "#AFB5F5",
    },
    {
      nome: "Suporte",
      corPrimaria: "#F5DE00",
      corSecundaria: "#F5F1CE",
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
          herois={herois.filter((heroi) => heroi.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
