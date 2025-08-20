import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtrosReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtros: filtrosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
