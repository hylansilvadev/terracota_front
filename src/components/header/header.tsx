import React, { useContext, useState } from "react";
import Logo from '../../assets/logomarca.png';
import Search from '../../assets/search_icon.webp';
import Carrinho from '../../assets/carrinho_icon.png';
import { 
    Container,
    IconsContainer,
    IconsPages,
    IconsRightContainer,
    LogoIcon,
    SearchCarrinhoButton
} from "./headerStyle";
import { To, useNavigate } from "react-router-dom";

// Suponha que você tenha um contexto de autenticação que armazena o estado de login do usuário
// Por exemplo, useAuthContext() seria um hook que retornaria se o usuário está logado ou não.
const Header = () => {

    const navigate = useNavigate();

    // Supondo que você tenha um contexto de autenticação para saber se o usuário está logado.
    // Exemplo fictício: const { isLoggedIn } = useAuthContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Substitua por seu próprio estado ou contexto

    // Função para navegação
    const handleNavigate = (path: To) => {
        navigate(path);
    };

    return (
        <div>
            <Container>
                <LogoIcon alt="Logo" src={Logo} />
                <IconsContainer>
                    <IconsPages onClick={() => handleNavigate('/')}>Home</IconsPages>
                    <IconsPages onClick={() => handleNavigate('/quemsomos')}>Quem Somos</IconsPages>
                    <IconsPages onClick={() => handleNavigate('/produtos')}>Produtos</IconsPages>
                    {/* Aqui altera o texto de "Login" para "Perfil" dependendo do estado de login */}
                    <IconsPages onClick={() => handleNavigate(isLoggedIn ? '/perfil' : '/login')}>
                        {isLoggedIn ? 'Perfil' : 'Login'}
                    </IconsPages>
                </IconsContainer>
                <IconsRightContainer>
                    <SearchCarrinhoButton src={Search} alt="Buscar" />
                    <SearchCarrinhoButton src={Carrinho} alt="Carrinho" onClick={() => handleNavigate('/carrinho')} />
                </IconsRightContainer>
            </Container>
        </div>
    );
};

export default Header;
