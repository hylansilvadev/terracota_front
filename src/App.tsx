import React from 'react';
import './App.css';
import Home from './pages/home/home'
import QuemSomos from './pages/quemSomos/quemSomos';
import Produtos from './pages/produtos/produto';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <QuemSomos/> */}
      {/* <Produtos/> */}
      {/* <Login/> */}
      <Cadastro/>
    </div>
  );
}

export default App;
