import { GET_STASHTAB_ITEMS, IS_LOADING_STASH_ITEMS_DONE, IS_LOADING_STASH_ITEMS } from "../action-creators/types";

const initialState = {
  items: [],
  isLoading: false
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_STASHTAB_ITEMS:
      return {
        ...state,
        items: payload
      }
    
    case IS_LOADING_STASH_ITEMS:
      return {
        ...state,
        isLoading: true
      }
    
    case IS_LOADING_STASH_ITEMS_DONE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default reducer;