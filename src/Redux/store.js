import { createStore } from 'redux';
import rootReducer from "./reducer"

// Configura el store
const store = createStore(rootReducer);

export default store;