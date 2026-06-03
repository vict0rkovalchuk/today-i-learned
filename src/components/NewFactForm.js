import { useState } from "react";
import { CATEGORIES } from "../data/categories";

export default function Form() {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  
  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();
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
      />
      <span>{200 - textLength}</span>
      <input 
        type="text" 
        placeholder="Trustworthy source..." 
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
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
      <button className="btn btn-large">Post</button>
    </form>
  )
}
