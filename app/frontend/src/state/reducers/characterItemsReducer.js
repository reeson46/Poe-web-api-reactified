import { GET_CHARACTER_ITEMS, IS_LOADING_CHARACTER, IS_LOADING_CHARACTER_DONE } from "../action-creators/types";

const initialState = {
  inventory: [],
  equipment: [],
  isLoading: false
};

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_CHARACTER_ITEMS:
      return {
        ...state,
        inventory: payload.inventory,
        equipment: payload.equipment
      }
    
    case IS_LOADING_CHARACTER:
      return {
        ...state,
        isLoading: true
      }

    case IS_LOADING_CHARACTER_DONE:
      return {
        ...state,
        isLoading: false
      }
      
    default:
      return state
  }
}

export default reducer;