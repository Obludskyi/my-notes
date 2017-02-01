/**
 * Created by Oleksii on 01.02.2017.
 */
import Constants from '../constants/AppConstants';


const initialState = {
    notes: [],
    loadingError: null,
    isLoading: true
};

function formatNote(note) {
    return {
        id: note._id,
        title: note.title,
        text: note.text,
        color: note.color || '#ffffff',
        createdAt: note.createdAt
    };
}



export default function noteReducer(state = initialState, action) {
    switch (action.type){
        case Constants.LOAD_NOTES_REQUEST:
            return {...state, isLoading: true};
        case Constants.LOAD_NOTES_SUCCESS:
            return {...state, isLoading: false, notes: action.payload.map(formatNote)};
        case Constants.LOAD_NOTES_FAIL:
            return {...state, loadingError: action.payload};
        default:
            return state;
    }
}