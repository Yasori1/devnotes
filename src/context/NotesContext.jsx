import {createContext, useContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const NotesContext = createContext(null);

export function NotesProvider({children}) {
    const [notes, setNotes] = useLocalStorage("devnotes", []);
    const [serachQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Tümü");

    const addNote = (noteData) => {
        const newNote = {
            id: Date.now(),
            createdAt: new Date().toISOString(),
            ...noteData,
        };   
        setNotes((prev) => [newNote, ...prev]);
        }
    const updateNote = (id,updatedData) => {
        setNotes((prev) =>
            prev.map((note) => (note.id === id ? {...note, ...updatedData} : note))
        );
    };

   const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = 
    note.title.toLowerCase().includes(search.searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(serachQuery.toLowerCase());

    const matchesCategory =
    activeCategory === "Tümü" || note.category === activeCategory;

    return matchesSearch && matchesCategory;
    });
    
    return (
        <NotesContext.Provider
            value={{
                notes,
                filteredNotes,
                searchQuery,
                activeCategory,
                setActiveCategory,
                addNote,
                updateNote,
                deleteNote,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);
    if (!context) throw new Error("UseNotes must be used within a NotesProvider");
    return context;
}