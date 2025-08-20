import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.azulNeutro};
  margin-left: 10px;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-bottom: 10px;
  padding-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: ${variaveis.azulPrimario};
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinzaEscuro};
  border: 1px solid ${variaveis.azulClaro};
  margin-bottom: 16px;
  width: 100%;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${variaveis.azulPrimario};
    box-shadow: 0 0 0 2px rgba(30, 64, 175, 0.1);
  }
`

export const BotaoSalvar = styled.button`
  background-color: ${variaveis.azulPrimario};
  border-radius: 8px;
  padding: 8px 12px;
  color: ${variaveis.branco};
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulEscuro};
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
