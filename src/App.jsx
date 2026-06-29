import {useState} from "react";
import {NotesProvider} from "./context/NotesContext";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import CategoryFilter from "./components/CategoryFilter";
import NoteForm from "./components/NoteForm";
import "./index.css";

function App(){
  const [showForm, setShowForm] = useState(false);

  return(
    <NotesProvider>
      <div className="app">
        <header className="app-header">
          <h1>⌨️ DevNotes</h1>
          <button className="add-btn" onClick= {() => setShowForm(true)}>
            + Yeni Not
          </button>
        </header>

        <SearchBar />
        <CategoryFilter />
        <NoteList />
        {showForm && <NoteForm onClose={() => setShowForm(false)} />}
      </div>
    </NotesProvider>
  )
}

export default App;