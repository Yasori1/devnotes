import {useNotes} from "../context/NotesContext";
import NoteCard from "./NoteCard";

export default function NoteList(){
    const {filteredNotes} = useNotes();

    if (filteredNotes.length === 0) {
        return <p className="empty-state">Henüz not yok. ilk notunu ekle!📝</p>
    }
    return(
        <div className="note-grid">
            {filteredNotes.map(note => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    );
}