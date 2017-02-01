/**
 * Created by Oleksii on 01.02.2017.
 */
import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/notes`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/notes`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/notes/${noteId}`);
    }
}