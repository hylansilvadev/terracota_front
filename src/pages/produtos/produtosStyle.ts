import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  margin: 120px 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

`;

export const ConteinerProdutosText = styled.div`
  margin-left: 2%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  `;

export const IconVoltar = styled.img`
  width: auto;
  height: 23px;
  margin-top: 6px;
  margin-right: 15px;
  cursor: pointer;
`;

export const TextProdutos = styled.div`
  font-size: 26px;
  font-weight: 200;
`;

export const ContainerProdutosGeral = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); 
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  }
`;
