import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { formatDate } from "../utils/helpers";

export default function NoteCard({ note }) {
  const { deleteNote, updateNote } = useNotes();
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleSave = () => {
    updateNote(note.id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="note-card">
      <div className="note-header">
        <span className="note-category">{note.category}</span>
        <span className="note-date">{formatDate(note.createdAt)}</span>
      </div>

      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className="edit-textarea"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
          />
          <div className="card-buttons">
            <button className="save-btn" onClick={handleSave}>Kaydet</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>İptal</button>
          </div>
        </>
      ) : (
        <>
          <h3 onClick={() => setExpanded(!expanded)}>{note.title}</h3>
          {expanded && <p className="note-content">{note.content}</p>}
          <div className="note-tags">
            {note.tags?.map((tag) => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <div className="card-buttons">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Düzenle</button>
            <button className="delete-btn" onClick={() => deleteNote(note.id)}>Sil</button>
          </div>
        </>
      )}
    </div>
  );
}