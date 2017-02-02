/**
 * Created by Oleksii on 01.02.2017.
 */
import {createStore} from 'redux';
import noteReducer from '../reducers/noteReducer';

export default function configureStore(initialState) {
    return createStore(noteReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}