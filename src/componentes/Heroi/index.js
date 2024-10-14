import { IoIosCloseCircle } from "react-icons/io";
import "./Heroi.css";

const Heroi = ({ nome, imagem, descricao, corDeFundo, aoDeletar }) => {
  return (
    <div className="heroi">
      <IoIosCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{descricao}</h5>
      </div>
    </div>
  );
};

export default Heroi;
