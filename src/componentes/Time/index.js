import Heroi from "../Heroi";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  const css = { backgroundColor: hexToRgba(props.corPrimaria, "0.6") };
  return (
    props.herois.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.nome)}
          value={props.corPrimaria}
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="herois">
          {props.herois.map((heroi) => {
            return (
              <Heroi
                key={heroi.nome}
                nome={heroi.nome}
                descricao={heroi.descricao}
                imagem={heroi.imagem}
                corDeFundo={props.corPrimaria}
                aoDeletar={props.aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
export default Time;
