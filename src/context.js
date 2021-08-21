import React, { useContext } from 'react';


const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
