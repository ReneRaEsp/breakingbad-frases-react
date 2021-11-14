import './App.css';
import Frase from './components/Frase.jsx';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Boton = styled.button`
  background: darkcyan;
  background-size: 300px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  cursor: pointer;
  transition: 2s;
  &:hover {
    background: skyblue;
    color: darkcyan;
    border-radius: 2rem;
  }
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    width: 15rem;
  }

`;

function App() {

  const [ frase, guardarFrase ] = useState({
    author: '',
    quote: ''
  });

  const consultarApi = async() => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  //Cargar una frase
  useEffect( () => {

    consultarApi();
  }, [] );

  return (
    <Cont className="App">
      <img src="./logo192.png" alt="logo breaking bad"/>
     <Boton
        onClick={() => consultarApi() }
      >
      Generar frase
     </Boton> 
    <Frase 
      frase={frase}
    />
    </Cont>
  );
}

export default App;
