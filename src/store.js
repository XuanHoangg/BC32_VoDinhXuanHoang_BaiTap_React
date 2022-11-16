import { createStore, combineReducers } from 'redux';
import quanLyDatVeReducer from './Baitap4/quanLyDatVeReducer';


const reducer = combineReducers({
    quanLyDatVe: quanLyDatVeReducer,
})

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;