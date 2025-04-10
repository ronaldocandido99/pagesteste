import React, { useState } from 'react';
import './FlashCards.css'; // Arquivo CSS opcional para estilização

const flashCardsData = [
  { front: "O que é fotogrametria?", back: "Ciência de medir objetos e superfícies a partir de imagens, como fotos aéreas ou de satélite." },
  { front: "O que diferencia uma imagem digital de uma foto tradicional?", back: "Os valores de uma imagem digital são discretos (números inteiros)." },
  { front: "O que são pixels?", back: "Picture elements, ou pequenos pontos que formam uma imagem digital, cada um com um valor de brilho." },
  { front: "O que é uma vizinhança em uma imagem?", back: "Os pixels ao redor de um pixel específico, como uma matriz 3x3 ou 5x7." },
  { front: "O que é melhoria de imagem?", back: "Ajustar a imagem para torná-la mais útil, como aumentar nitidez ou contraste." },
  { front: "O que é restauração de imagem?", back: "Reverter danos conhecidos, como desfocagem ou distorções ópticas." },
  { front: "O que é segmentação de imagem?", back: "Dividir a imagem em partes ou isolar objetos, como linhas ou formas." },
  { front: "O que é uma imagem binária?", back: "Imagem com pixels apenas preto (0) ou branco (1), usando 1 bit por pixel." },
  { front: "O que é uma imagem em escala de cinza?", back: "Imagem com tons de cinza de 0 (preto) a 255 (branco), usando 8 bits por pixel." },
  { front: "O que é uma imagem RGB?", back: "Imagem colorida com 3 valores por pixel (vermelho, verde, azul), cada um de 0 a 255." },
  { front: "Quantas cores possíveis tem uma imagem RGB?", back: "256³ = 16,7 milhões de cores." },
  { front: "Qual comando Matlab lê uma imagem?", back: "`imread`" },
  { front: "Qual comando Matlab exibe uma imagem?", back: "`imshow(g)`" },
  { front: "O que faz o comando `pixval on` no Matlab?", back: "Exibe os valores dos pixels na imagem." },
  { front: "O que retorna o comando `impixel(i,j)`?", back: "O valor do pixel na posição (i,j)." },
  { front: "O que é o tipo de dado `uint8`?", back: "Inteiro sem sinal de 8 bits, com valores de 0 a 255." },
  { front: "O que mostra o comando `iminfo`?", back: "Informações sobre a imagem, como tamanho e formato." },
  { front: "O que são planos de bits?", back: "Divisão de uma imagem em escala de cinza em 8 imagens binárias, uma para cada bit." },
  { front: "Qual é o bit menos significativo em um plano de bits?", back: "Bit 0 (último bit)." },
  { front: "Qual é o bit mais significativo em um plano de bits?", back: "Bit 7 (primeiro bit)." },
  { front: "O que é resolução espacial?", back: "Densidade de pixels em uma imagem; mais pixels = mais detalhes." },
  { front: "O que acontece ao reduzir a resolução pela metade?", back: "Remove linhas e colunas alternadas, reduzindo o detalhe." },
  { front: "O que é interpolação em imagens?", back: "Estima valores entre pixels para redimensionar ou suavizar." },
  { front: "O que são frequências em uma imagem?", back: "Taxa de mudança nos valores de cinza com a distância." },
  { front: "O que caracteriza componentes de alta frequência?", back: "Mudanças rápidas, como bordas e ruído." },
  { front: "O que caracteriza componentes de baixa frequência?", back: "Mudanças lentas, como fundos e texturas suaves." },
  { front: "O que faz um filtro passa-alta?", back: "Destaca bordas e remove componentes de baixa frequência." },
  { front: "O que faz um filtro passa-baixa?", back: "Suaviza a imagem e remove componentes de alta frequência." },
  { front: "O que é um filtro Gaussiano?", back: "Filtro passa-baixa baseado na distribuição Gaussiana para suavização." },
  { front: "O que controla o grau de suavização em um filtro Gaussiano?", back: "O desvio padrão (\u03C3); maior \u03C3 = mais suavização." },
  { front: "O que é ruído em uma imagem?", back: "Degradação indesejada causada por interferências externas." },
  { front: "O que é ruído 'salt and pepper'?", back: "Pixels brancos ou pretos aleatórios devido a distúrbios bruscos." },
  { front: "O que é ruído Gaussiano?", back: "Variações aleatórias suaves, como ruído de sensor." },
  { front: "O que é ruído Speckle?", back: "Ruído multiplicativo, comum em imagens de radar." },
  { front: "Qual é o objetivo da detecção de bordas?", back: "Identificar mudanças bruscas nos valores dos pixels." },
  { front: "O que o Canny Edge Detector minimiza?", back: "A distância entre bordas reais e detectadas." },
  { front: "O que o Canny Edge Detector evita?", back: "Múltiplas bordas onde só existe uma." },
  { front: "O que é o modelo de cor RGB?", back: "Representa cores com valores de vermelho, verde e azul (0-255)." },
  { front: "O que é o modelo de cor HSV?", back: "Define cores por Hue (matiz), Saturation (saturação) e Value (valor)." },
  { front: "O que é Hue no modelo HSV?", back: "A cor pura, como vermelho ou azul." },
  { front: "O que é Saturation no modelo HSV?", back: "O quanto a cor está diluída com branco." },
  { front: "O que é Value no modelo HSV?", back: "O brilho da cor; alto = claro, baixo = escuro." },
  { front: "Qual função Matlab converte RGB para escala de cinza?", back: "`rgb2gray`" },
  { front: "Qual função Matlab converte escala de cinza para RGB?", back: "`gray2rgb`" },
  { front: "O que é segmentação em uma foto aérea?", back: "Isolar objetos como carros, árvores ou estradas." },
  { front: "O que é um pixel em termos simples?", back: "Um pequeno ponto em uma imagem com um valor de brilho ou cor." },
  { front: "Por que usamos 8 bits em imagens em escala de cinza?", back: "Para representar 256 tons de cinza (0 a 255)." },
  { front: "O que é um filtro passa-baixa em termos práticos?", back: "Desfoca a imagem para remover ruído ou detalhes." },
  { front: "O que é um filtro passa-alta em termos práticos?", back: "Realça bordas e detalhes, eliminando fundos suaves." },
  { front: "Qual é a vantagem do Matlab para PDI?", back: "Oferece comandos simples como `imread` e `imshow` para manipular imagens." },
];

const FlashCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h3>{front}</h3>
        </div>
        <div className="card-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
};

const FlashCards = () => {
  return (
    <div className="flashcards-container">
      <h1>Flashcards de Processamento Digital de Imagens</h1>
      <div className="flashcards-grid">
        {flashCardsData.map((card, index) => (
          <FlashCard key={index} front={card.front} back={card.back} />
        ))}
      </div>
    </div>
  );
};

export default FlashCards;