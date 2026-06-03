import { useState } from "react";
import { CATEGORIES } from "../data/categories";
import { isValidHttpUrl } from "../utils/isValidHttpUrl";
import supabase from "../services/supabase";

export default function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('https://example.com/');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if(!text || !isValidHttpUrl(source) || !category) return;

    setIsUploading(true);

    const { data: newFact, error } = await supabase
      .from('facts')
      .insert([{ text, source, category }])
      .select();

    setIsUploading(false);

    if(!error) {
      setFacts(prevFacts => [newFact[0], ...prevFacts]);
    } else {
      alert('There was a problem uploading the fact');
    }

    setText('');
    setCategory('');
    
    setShowForm(false);
  }

  return (
    <form 
      className="fact-form"
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        placeholder="Share a fact with the world..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input 
        type="text" 
        placeholder="Trustworthy source..." 
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>

        {CATEGORIES.map(({ name }) => (
          <option 
            value={name} 
            key={name}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </option>
        ))}
      </select>
      <button 
        className="btn btn-large" 
        disabled={isUploading}
      >
        Post
      </button>
    </form>
  )
}
