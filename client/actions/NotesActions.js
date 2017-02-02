/**
 * Created by Oleksii on 01.02.2017.
 */
import Constants from '../constants/AppConstants';
import api from '../api';

function loadNotes() {
    dispatch({
        type: Constants.LOAD_NOTES_REQUEST
    });

    api.listNotes()
        .then(({ data }) =>
            dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                payload: data
            })
        )
        .catch(err =>
            dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                payload: err
            })
        );
}

function createNote(data) {
    api.createNote(data)
        .then(() =>
            loadNotes()
        )
        .catch(err =>
            console.error(err)
        );
}

export default function NoteActions() {
    return (dispatch) => {
        loadNotes();

        api.deleteNote(data)
            .then(() =>
                loadNotes()
            )
            .catch(err =>
                console.error(err)
            );

        createNote(data);
    }
};

