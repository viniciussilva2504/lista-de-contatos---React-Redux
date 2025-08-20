import { FormEvent, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/contatos'
import * as S from './styles'

const FormularioContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  // Função para validar nome completo (apenas letras e espaços, máximo 50 caracteres)
  const handleNomeCompletoChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const valor = evento.target.value
    // Remove caracteres que não são letras ou espaços e limita a 50 caracteres
    const valorLimpo = valor.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').slice(0, 50)
    setNomeCompleto(valorLimpo)
  }

  // Função para validar email (máximo 80 caracteres)
  const handleEmailChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const valor = evento.target.value.slice(0, 80)
    setEmail(valor)
  }

  // Função para validar telefone (apenas números, máximo 20 caracteres)
  const handleTelefoneChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const valor = evento.target.value
    // Remove caracteres que não são números e limita a 20 caracteres
    const valorLimpo = valor.replace(/[^0-9]/g, '').slice(0, 20)
    setTelefone(valorLimpo)
  }

  // Função para validar se o email é válido
  const isEmailValido = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    // Validações mais detalhadas
    if (nomeCompleto.trim() === '') {
      alert('Nome completo é obrigatório!')
      return
    }
    if (email.trim() === '') {
      alert('Email é obrigatório!')
      return
    }
    if (!isEmailValido(email)) {
      alert('Por favor, insira um email válido!')
      return
    }
    if (telefone.trim() === '') {
      alert('Telefone é obrigatório!')
      return
    }

    dispatch(
      cadastrar({
        nomeCompleto: nomeCompleto.trim(),
        email: email.trim(),
        telefone
      })
    )
    setNomeCompleto('')
    setEmail('')
    setTelefone('')
    navigate('/')
  }

  return (
    <S.Form onSubmit={cadastrarContato}>
      <S.Titulo>Novo contato</S.Titulo>
      <S.Campo
        value={nomeCompleto}
        onChange={handleNomeCompletoChange}
        type="text"
        placeholder="Nome completo"
        maxLength={50}
        required
      />
      <S.Campo
        value={email}
        onChange={handleEmailChange}
        type="email"
        placeholder="E-mail"
        maxLength={80}
        required
      />
      <S.Campo
        value={telefone}
        onChange={handleTelefoneChange}
        type="tel"
        placeholder="Telefone"
        maxLength={20}
        required
      />
      <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
    </S.Form>
  )
}

export default FormularioContato
