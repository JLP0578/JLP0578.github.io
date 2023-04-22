// https://github.com/lwcheun/React_Expense_Tracker/tree/92701e56006e6054cb877fa451d4cc42b6e74053/src

import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
  loading: false,
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component (state, actions)
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const isLoading = (loaded) => {
    dispatch({
      type: 'IS_LOADED',
      payload: loaded
    })
  }

  return (<GlobalContext.Provider value={{
    loading: state.loading,
    isLoading
  }}>{children}
  </GlobalContext.Provider>)
}