import {useNotes} from "../context/NotesContext";

export default function SearchBar(){
    const {searchQuery, setSearchQuery} = useNotes();

    return(
        <input
        type="text"
        placeholder ="Notlarda ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
        />
    )
}