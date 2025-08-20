import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.cinzaClaro};
  height: 100vh;
  border-right: 1px solid ${variaveis.cinzaMedio};
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinzaEscuro};
  border: 1px solid ${variaveis.azulClaro};
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${variaveis.azulPrimario};
    box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.1);
  }
`

export const BotaoAdicionar = styled.button`
  padding: 12px 16px;
  margin-top: 16px;
  background-color: ${variaveis.azulSucesso};
  color: ${variaveis.branco};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #047857;
  }
`
