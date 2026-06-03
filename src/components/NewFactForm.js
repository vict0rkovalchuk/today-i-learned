import { useState } from "react";
import { CATEGORIES } from "../data/categories";
import { isValidHttpUrl } from "../utils/isValidHttpUrl";

export default function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('https://example.com/');
  const [category, setCategory] = useState('');
  
  const textLength = text.length;

  function handleSubmit(e) {
    e.preventDefault();

    if(!text || !isValidHttpUrl(source) || !category) return;

    const newFact = {
      id: crypto.randomUUID(),
      text,
      source,
      category,
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 0,
      createdIn: new Date().toISOString(),
    }

    setFacts(prevFacts => [newFact, ...prevFacts]);

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
