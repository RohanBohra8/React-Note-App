import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes,setNotes] = useState([
    { 
      id: nanoid(),
      text: "This is the default Note as an example",
      date: "Month/Day/Year"
    }
  ]);

  const [searchText,setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);


  //yeh function accept kar rha h text ko....... uar text kha se aa rha h? -> text aa rha h AddNote ke handleSaveClick
  function addNote(text) {    //text is comming from handleSaveClick (AddNote) -> NotesList -> App   
    setNotes([...notes, {      //iski jagha ContextAPI bhi use kar skte hai
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    }]);
  }

  function deleteNote(id) {
    const noteAfterDelete = notes.filter((noteIterator) => noteIterator.id !== id);
    setNotes(noteAfterDelete);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
      <Header handleDarkMode = {setDarkMode}></Header>
      <Search handleSearchNote = {setSearchText}></Search>
      {/*notes. filter wali line ka matlab  = notes array ko filter karega jisme search text wala content jis note me include ho */}
      <NotesList notes={notes.filter((noteIterator)=> noteIterator.text.toLowerCase().includes(searchText))} handleAddNote = {addNote}  handleDeleteNote = {deleteNote}></NotesList>
      </div>  
    </div> 
  );
}

export default App;
