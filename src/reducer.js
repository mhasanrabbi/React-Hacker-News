import {
  SET_LOADING,
  SET_STORIES
} from './actions';

const reducer = (state,action) => {
  if(action.type == SET_LOADING) {
    return {...state, isLoading:true}
  } if (action.type == SET_STORIES) {
    return {
      ...state,
      isLoading:false,
      hits:action.payload.hits,
      nbPages:action.payload.nbPages,
    }
  }
    throw new Error (`no matching "${action.type}" action type`)
}
export default reducer;