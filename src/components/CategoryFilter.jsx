import {useNotes} from "../context/NotesContext";
import {CATEGORIES} from "../utils/helpers";

export default function CategoryFilter(){
    const {activeCategory, setActiveCategory} = useNotes();

    return (
        <div className="category-filter">
            {CATEGORIES.map((cat)=>(
            <button
            key={cat}
            onClick={()=>setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
            >
                {cat}
            </button>
        ))}
        </div>
    );
}