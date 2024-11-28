import "./Banner.css";
import React from "react";

interface BannerProps{
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({enderecoImagem, textoAlternativo}:BannerProps) => {
  return (
    <header className="banner">
      {/* <img src="/imagens/banner.jpg" alt="banner principal" /> */}
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  );
};

export default Banner