import React, { useState } from "react";
import {
  ButtonEntrar,
  ButtonEsqueceuSenha,
  Container,
  ContainerButton,
  ContainerLogin,
  ContainerLoginGeral,
  ContainerText3,
  ConteinerLoginText,
  IconVoltar,
  ImageLogin,
  InputLogin,
  Text1,
  Text2,
  Text3,
  Text4,
  TextInput,
  TextLogin,
  ErrorMessage,
} from "./loginStyle";
import Voltar from "../../assets/menorQue.png";
import Jarro from "../../assets/login_jarro.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Clientes from "../../components/clientes/cliente";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/reducers/auth";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(form))
      .unwrap()
      .then(() => {
        navigate("/"); // Navegue para a página principal após login bem-sucedido
      })
      .catch(() => {
        // O erro será exibido automaticamente pelo estado `error`
      });
  };

  return (
    <div>
      <Header />
      <Container>
        <ConteinerLoginText>
          <IconVoltar alt="" src={Voltar} onClick={() => navigate('/')} />
          <TextLogin>Login</TextLogin>
        </ConteinerLoginText>
        <ContainerLoginGeral>
          <ImageLogin alt="" src={Jarro} />
          <ContainerLogin>
            <Text1>Login</Text1>
            <Text2>Digite seus detalhes abaixo</Text2>

            <TextInput>Email</TextInput>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <InputLogin
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              required
            />

            <TextInput>Senha</TextInput>
            <InputLogin
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              required
            />

            <ContainerText3>
              <Text3>Ainda não fez cadastro?</Text3>
              <Text4 onClick={() => navigate('/cadastro')}>Acesse aqui</Text4>
            </ContainerText3>

            <ContainerButton>
              <ButtonEntrar onClick={handleSubmit}>Entrar</ButtonEntrar>
              <ButtonEsqueceuSenha onClick={() => navigate("/")}>
                Esqueceu a senha?
              </ButtonEsqueceuSenha>
            </ContainerButton>
          </ContainerLogin>
        </ContainerLoginGeral>
      </Container>
      <Clientes />
      <Footer />
    </div>
  );
};

export default Login;
