import {useState} from "react";
import {useNotes} from "../context/NotesContext";
import {formatDate} from "../utils/helpers";

export default function NoteCard({note}) {
    const {deleteNote} = useNotes();
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="note-card">
            <div className="note-card-header">
                <span className="note-category">{note.category}</span>
                <span className="note-date">{formatDate(note.createdAt)}</span>
            </div>

            <h3 onClick={() => setExpanded(!expanded)}>{note.title}</h3>

            {expanded && (<p className="note-content">{note.content}</p>)}

            <div className="note-tags">
                {note.tags?.map((tag) =>
                    <span key={tag} className="note-tag">#{tag} </span>
                )}
            </div>
            
            <button 
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
            >
                Sil
            </button>

        </div>
    );
}