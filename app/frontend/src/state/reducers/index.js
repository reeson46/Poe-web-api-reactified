import { combineReducers } from "redux";
import charactersAndTabsReducer from "./charactersAndTabsReducer";
import characterItemsReducer from './characterItemsReducer'
import stashReducer from './stashReducer'

const reducers = combineReducers({
    charsAndTabs: charactersAndTabsReducer,
    characterItems: characterItemsReducer,
    stash: stashReducer
});

export default reducers;