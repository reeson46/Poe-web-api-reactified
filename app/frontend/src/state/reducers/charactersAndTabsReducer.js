import { GET_CHARACTERS_AND_STASHTABS } from "../action-creators/types";

const initialState = {
  characters: [],
  stashTabs: [],
  isLoading: true
};

const reducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_CHARACTERS_AND_STASHTABS:
      return {
        ...state,
        characters: payload.characters,
        stashTabs: payload.stashtabs,
        isLoading: false
      }
    
    default:
      return state;
  }
}

export default reducer;