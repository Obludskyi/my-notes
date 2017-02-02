/**
 * Created by Oleksii on 31.01.2017.
 */
import React from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import NotesActions, {TasksStore} from '../actions/NotesActions';
import './App.less';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function getState() {
    return {
        isLoading: TasksStore.Loading(),
        notes: TasksStore.getNotes()
    };
}


const App = React.createClass({

    getInitialState() {
        return getState();
    },

    componentWillMount() {
        NotesActions.loadNotes();
    },

    componentDidMount() {
        NotesActions.addChangeListener(this.onChange);
    },

    componentWillUnmount() {
        NotesActions.removeChangeListener(this.onChange);
    },

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    },

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    },

    render(){
       return(
           <div className="App">
               <h2 className="App_header">My notes</h2>
               <NoteEditor onNoteAdd={this.handleNoteAdd} />
               <NotesGrid notes={this.props.notes} onNoteDelete={this.handleNoteDelete} />
           </div>
       )
   },

    onChange() {
        this.setState(getState());
    }

});

function mapStateToProps(state) {
    return {
        notes: state.notes,
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        NotesActions: bindActionCreators(NotesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
