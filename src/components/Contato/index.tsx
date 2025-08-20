import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nomeCompleto: nomeCompletoOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeCompletoOriginal.length > 0) {
      setNomeCompleto(nomeCompletoOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeCompletoOriginal, emailOriginal, telefoneOriginal])

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

  function cancelarEdicao() {
    setEstaEditando(false)
    setNomeCompleto(nomeCompletoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        value={nomeCompleto}
        onChange={handleNomeCompletoChange}
        placeholder="Nome completo"
        maxLength={50}
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={handleEmailChange}
        placeholder="E-mail"
        type="email"
        maxLength={80}
      />
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={handleTelefoneChange}
        placeholder="Telefone"
        maxLength={20}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                // Validações antes de salvar
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
                  editar({
                    nomeCompleto: nomeCompleto.trim(),
                    email: email.trim(),
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`

export const Nome = styled.input`
  font-size: 1.2rem;
  margin-bottom: 8px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Email = styled.input`
  font-size: 1rem;
  margin-bottom: 8px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Telefone = styled.input`
  font-size: 1rem;
  margin-bottom: 16px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 8px;
`

export const Botao = styled.button`
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`

export const BotaoSalvar = styled.button`
  background: #388e3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`

export const BotaoCancelarRemover = styled.button`
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`
