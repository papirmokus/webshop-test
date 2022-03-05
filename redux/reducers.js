import { combineReducers } from 'redux'
import * as types from './types'

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      if (state.find(item => item.id === payload.id)) return state
      return [...state, payload]
    case types.REMOVE_FROM_CART:
      return state.filter(item => item.id !== payload)
    default:
      return state
  }
}

// csak egy van, de lehetne több is
const reducers = {
  cart: cartReducer,
}

export default combineReducers(reducers)