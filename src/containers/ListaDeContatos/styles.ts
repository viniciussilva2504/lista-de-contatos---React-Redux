import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${variaveis.branco};
`

export const Mensagem = styled.p`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 24px;
  color: ${variaveis.azulNeutro};
  font-size: 16px;
  padding: 16px;
  background-color: ${variaveis.cinzaClaro};
  border-radius: 8px;
  border-left: 4px solid ${variaveis.azulPrimario};
`
