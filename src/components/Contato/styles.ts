import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.branco};
  box-shadow: 0px 4px 4px rgba(30, 64, 175, 0.15);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  border-left: 4px solid ${variaveis.azulPrimario};
`

export const Nome = styled.input`
  color: ${variaveis.cinzaEscuro};
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  background: transparent;
  resize: none;

  &:disabled {
    background: transparent;
    cursor: default;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${variaveis.azulPrimario};
  }
`

export const Email = styled.input`
  color: ${variaveis.azulNeutro};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  background: transparent;
  resize: none;

  &:disabled {
    background: transparent;
    cursor: default;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${variaveis.azulPrimario};
  }
`

export const Telefone = styled.input`
  color: ${variaveis.azulNeutro};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  background: transparent;
  resize: none;

  &:disabled {
    background: transparent;
    cursor: default;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${variaveis.azulPrimario};
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.cinzaMedio};
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulPrimario};
  border-radius: 8px;
  margin-right: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${variaveis.azulEscuro};
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.azulSucesso};

  &:hover {
    background-color: #047857;
  }
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.azulAlerta};

  &:hover {
    background-color: #b91c1c;
  }
`
