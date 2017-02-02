/**
 * Created by Oleksii on 01.02.2017.
 */
import Constants from '../constants/AppConstants';
import api from '../api';
import { EventEmitter } from 'events';


const CHANGE_EVENT = 'change';

export const TasksStore = Object.assign({}, EventEmitter.prototype, {
    Loading() {
        return this.props.isLoading;
    },

    getNotes() {
        return this.props.notes;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


const NoteActions = {
        loadNotes() {
            dispatch({
                type: Constants.LOAD_NOTES_REQUEST
            });
            TasksStore.emitChange();
            api.listNotes()
                .then(({ data }) =>
                        dispatch({
                            type: Constants.LOAD_NOTES_SUCCESS,
                            payload: data
                        }),
                    TasksStore.emitChange()
                )
                .catch(err =>
                        dispatch({
                            type: Constants.LOAD_NOTES_FAIL,
                            payload: err
                        }),
                    TasksStore.emitChange()
                );
        },
        createNote(data){
            api.createNote(data)
                .then(() =>
                    loadNotes()
                )
                .catch(err =>
                    console.error(err)
                );
        },

        deleteNote(data){
            api.deleteNote(data)
                .then(() =>
                    loadNotes()
                )
                .catch(err =>
                    console.error(err)
                );
        }
};

export default NoteActions;

