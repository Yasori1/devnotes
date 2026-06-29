import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { CATEGORIES, parseTags } from "../utils/helpers";

export default function NoteForm({ onClose }) {
  const { addNote } = useNotes();
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "JavaScript",
    tagsInput: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    addNote({
      title: form.title,
      content: form.content,
      category: form.category,
      tags: parseTags(form.tagsInput),
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <form className="note-form" onSubmit={handleSubmit}>
        <h2>Yeni Not</h2>

        <input
          name="title"
          placeholder="Başlık"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="content"
          placeholder="İçerik..."
          value={form.content}
          onChange={handleChange}
          rows={5}
        />

        <select name="category" value={form.category} onChange={handleChange}>
          {CATEGORIES.filter((c) => c !== "Tümü").map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          name="tagsInput"
          placeholder="Etiketler (virgülle ayır: hook, state, api)"
          value={form.tagsInput}
          onChange={handleChange}
        />

        <div className="form-buttons">
          <button type="submit">Kaydet</button>
          <button type="button" onClick={onClose}>İptal</button>
        </div>
      </form>
    </div>
  );
}