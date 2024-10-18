import { IoIosCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Heroi.css";

const Heroi = ({
  id,
  nome,
  imagem,
  descricao,
  corDeFundo,
  aoDeletar,
  favorito,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="heroi">
      <IoIosCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{descricao}</h5>
        <div className="favoritar">
          {favorito ? (
            <AiFillHeart {...propsFavorito} color={corDeFundo} />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Heroi;
