import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 120px 50px 50px 40px;

    @media (max-width: 768px) {

        margin-left: 25px;
    }
`;

export const ConteinerQuemSomosText = styled.div`
    margin-left: 1%;
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

export const TextQuemSomos = styled.div`
    font-size: 26px;
    font-weight: 200;
`;

export const ContainerImage = styled.div`
    width: 93%;
    height: auto;
    background-size: contain;
`;

export const ImageModelagem = styled.img`
    width: 100%;
    height: auto;
`;

export const QuemSomosContainer = styled.div`
    width: 93%;
    
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const QuemSomosText = styled.div`
    width: 100%;
    color: #802600;
    font-size: 45px;
    font-weight: 400;
    margin: 25px 0px 15px 0px;
`;

export const Text = styled.div`
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 35px;
`;

