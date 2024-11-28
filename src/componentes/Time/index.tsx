import { IColaborador as IHeroi } from "../../compartilhado/interface/IHeroi";
import Heroi from "../Heroi";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps{
  corPrimaria: string
  nome:string
  mudarCor: (cor: string, id: number) => void;
  id: number
  herois: IHeroi[]
  aoDeletar: (id: number) => void; 
  aoFavoritar: (id: number) => void;
}

const Time = (props:TimeProps) => {
  const css = { backgroundColor: hexToRgba(props.corPrimaria, "0.6") };
  return (
    props.herois.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          value={props.corPrimaria}
          type="color"
          className="input-color"
        />
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="herois">
          {props.herois.map((heroi) => {
            return (
              <Heroi
                id={heroi.id}
                favorito={heroi.favorito}
                key={heroi.id}
                nome={heroi.nome}
                descricao={heroi.descricao}
                imagem={heroi.imagem}
                corDeFundo={props.corPrimaria}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};
export default Time;
