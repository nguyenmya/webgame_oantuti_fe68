import { combineReducers, createStore } from "redux";
import { GameOanXuXiReducer } from "./GameOanXuXiReducer";

const rootReducer = combineReducers({
    GameOanXuXiReducer,
    
})
const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export default store
