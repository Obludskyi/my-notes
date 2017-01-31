/**
 * Created by Oleksii on 31.01.2017.
 */
import React from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import './App.less';

const App = React.createClass({
    handleNoteAdd(data){
      console.log(data);
    },

    render(){
       return(
           <div className="App">
               <h2 className="App_header">My notes</h2>
               <NoteEditor onNoteAdd={this.handleNoteAdd} />
               <NotesGrid />
           </div>
       )
   }
});

export default App;