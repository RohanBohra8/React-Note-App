import AddNote from './AddNote';
import Note from './Note';

//This component will store all the note of notepad in a list
function NotesList({notes,handleAddNote,handleDeleteNote }) {         
    return(
        <div className="notes-list">
            {
                notes.map((notesIterator) => <Note id={notesIterator.id} text={notesIterator.text} date ={notesIterator.date} handleDeleteNote = {handleDeleteNote }></Note>)
            }
            <AddNote handleAddNote={handleAddNote} ></AddNote>
        </div>
    )
}

export default NotesList;