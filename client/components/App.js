/**
 * Created by Oleksii on 31.01.2017.
 */
import React from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import NotesActions from '../actions/NotesActions';
import './App.less';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


const App = React.createClass({

    componentWillMount() {
        NotesActions();
    },

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    },

    handleNoteAdd(noteData) {
        NotesActions(noteData);
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

});

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        NotesActions: bindActionCreators(NotesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
