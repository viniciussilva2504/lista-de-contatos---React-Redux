import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body {
  background-color: ${variaveis.cinzaClaro};
  color: ${variaveis.cinzaEscuro};
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  min-height: 100vh;
`

export const BotaoAdicionar = styled.button`
  height: 64px;
  position: fixed;
  top: 80px;
  right: 40px;
  background-color: ${variaveis.azulSucesso};
  border-radius: 50px;
  padding: 0 16px;
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);

  &:hover {
    background-color: #047857;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(30, 64, 175, 0.4);
  }
`

export default EstiloGlobal
