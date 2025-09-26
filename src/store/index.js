import { createStore } from "redux";

import rootReducer from './reducers'

const store = createStore(rootReducer); // De onde vem todos os reducers

export default store;