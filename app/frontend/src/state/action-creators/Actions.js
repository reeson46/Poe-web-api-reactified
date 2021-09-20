import { 
  GET_CHARACTERS_AND_STASHTABS,
  GET_CHARACTER_ITEMS,
  GET_STASHTAB_ITEMS,
  IS_LOADING_CHARACTER,
  IS_LOADING_CHARACTER_DONE,
  IS_LOADING_STASH_ITEMS,
  IS_LOADING_STASH_ITEMS_DONE
} from "./types";
import axios from 'axios';

const config = {
  headers: {
    "Content-type": "application/json"
  }
}

export const getCharsAndTabs = () => async dispatch => {
  const res = await axios.get('/api/get-characters-and-stashtabs/', null);
  dispatch({
    type: GET_CHARACTERS_AND_STASHTABS,
    payload: res.data
  });
}

export const getCharacterItems = name => async dispatch => {
  dispatch({type: IS_LOADING_CHARACTER});
  const body = JSON.stringify({name});
  const res = await axios.post('/api/get-character-items/', body, config);
  dispatch({
    type: GET_CHARACTER_ITEMS,
    payload: res.data
  });
  dispatch({type: IS_LOADING_CHARACTER_DONE});
}

export const getStashtabItems = id => async dispatch => {
  dispatch({type: IS_LOADING_STASH_ITEMS});
  const body = JSON.stringify({id});
  const res = await axios.post('/api/get-stashtab-items/', body, config);
  dispatch({
    type: GET_STASHTAB_ITEMS,
    payload: res.data
  });
  dispatch({type: IS_LOADING_STASH_ITEMS_DONE});
}