import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtros'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { termo } = useSelector((state: RootReducer) => state.filtros)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const estaExibindoFormulario = location.pathname === '/novo-contato'

  const contatosFiltrados = itens.filter(
    (contato) =>
      contato.nomeCompleto.toLowerCase().includes(termo.toLowerCase()) ||
      contato.email.toLowerCase().includes(termo.toLowerCase()) ||
      contato.telefone.includes(termo)
  )

  return (
    <S.Aside>
      <div>
        {mostrarFiltros && (
          <>
            <S.Campo
              type="text"
              placeholder="Buscar contato..."
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                ativo={true}
                legenda="Todos os contatos"
                contador={contatosFiltrados.length}
              />
            </S.Filtros>
            <S.BotaoAdicionar
              onClick={() =>
                estaExibindoFormulario
                  ? navigate('/')
                  : navigate('/novo-contato')
              }
              type="button"
            >
              {estaExibindoFormulario
                ? 'Voltar à lista de contatos'
                : 'Cadastrar novo contato'}
            </S.BotaoAdicionar>
          </>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
