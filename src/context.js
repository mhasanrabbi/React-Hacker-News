import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading:true,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  const fetchStories = async (url) => {
    dispatch({ type: 'SET_LOADING'})
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
