import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Props } from '.'

type PropsSemLegendaEContados = Omit<Props, 'contador' | 'legenda' | 'criterio'>

export const Card = styled.div<PropsSemLegendaEContados>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.azulPrimario : variaveis.cinzaMedio)};
  background-color: ${(props) =>
    props.ativo ? variaveis.branco : variaveis.cinzaClaro};
  color: ${(props) =>
    props.ativo ? variaveis.azulPrimario : variaveis.azulNeutro};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${variaveis.azulSecundario};
    background-color: ${variaveis.branco};
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
