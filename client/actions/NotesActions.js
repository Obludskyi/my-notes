/**
 * Created by Oleksii on 01.02.2017.
 */
import Constants from '../constants/AppConstants';
import api from '../api';

const NoteActions = {
    loadNotes() {
        dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
            .then(({ data }) =>
                dispatch({
                    type: Constants.LOAD_NOTES_SUCCESS,
                    notes: data
                })
            )
            .catch(err =>
                dispatch({
                    type: Constants.LOAD_NOTES_FAIL,
                    error: err
                })
            );
    },

    createNote(note) {
        api.createNote(note)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
            .then(() =>
                this.loadNotes()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default NoteActions;

