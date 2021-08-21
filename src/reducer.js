import {
  SET_LOADING
} from './actions';

const reducer = (state,action) => {
  if(action.type === SET_LOADING) {
    return {...state, isLoading:true}
  }
    throw new Error (`no matching "${action.type}" action type`)
}
export default reducer;