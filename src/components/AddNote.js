import { useState } from "react";

function AddNote({handleAddNote}){
    const[noteText,setNoteText] = useState('');
    const characterLimit = 200;
    function handleChange(e) {
       if(characterLimit - e.target.value.length >= 0){
        setNoteText(e.target.value);
       }
    }
    function handleSaveClick() {
        if(noteText.trim().length > 0){  //trim removes all the spaces
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <div className="note new">
            <textarea rows='8' col='10' placeholder="please write your note here"  onChange={handleChange} value={noteText}></textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>save</button>
            </div>
        </div>

        )
}

export default AddNote;