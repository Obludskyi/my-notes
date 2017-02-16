/**
 * Created by Oleksii on 31.01.2017.
 */
import React, {Component} from 'react'
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import * as NotesActions from '../actions/NotesActions';
import './App.less';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

function getState() {
    return {
        isLoading: true,
        notes: []
    };
}


class App extends Component{

    constructor(props){
        super(props);
        this.state = getState();
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesActions.TasksStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        NotesActions.TasksStore.removeChangeListener(this.onChange);
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    }

    render(){
       return(
           <div className="App">
               <h2 className="App_header">My notes</h2>
               <NoteEditor onNoteAdd={this.handleNoteAdd} />
               <NotesGrid notes={this.props.notes} onNoteDelete={this.handleNoteDelete} />
           </div>
       )
   }

    onChange() {
        this.setState(getState());
    }

}

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
