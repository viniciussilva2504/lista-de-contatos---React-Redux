import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container, Mensagem } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtros)

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (termo !== '') {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) =>
          contato.nomeCompleto.toLowerCase().includes(termo.toLowerCase()) ||
          contato.email.toLowerCase().includes(termo.toLowerCase()) ||
          contato.telefone.includes(termo)
      )
    }

    return contatosFiltrados
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complemento =
      termo !== '' && termo !== undefined ? ` para "${termo}"` : ''

    mensagem = `${quantidade} contato(s) encontrado(s)${complemento}`

    return mensagem
  }

  const contatos = filtrarContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <Container>
      <Mensagem>{mensagem}</Mensagem>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <Contato
              id={contato.id}
              nomeCompleto={contato.nomeCompleto}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
