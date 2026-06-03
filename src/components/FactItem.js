import { useState } from "react";
import { CATEGORIES } from "../data/categories";
import supabase from "../services/supabase";

export default function FactItem({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { 
    id,
    text, 
    source, 
    category, 
    votesInteresting, 
    votesMindblowing, 
    votesFalse
  } = fact;

  async function handleVote(columnName) {
    setIsUpdating(true);

    const { data: updatedFact, error } = await supabase
      .from('facts')
      .update({ [columnName]: fact[columnName] + 1 })
      .eq('id', id)
      .select();

    if(!error) {
      setFacts(prevFacts => prevFacts.map(prevFact => prevFact.id === id ? updatedFact[0] : prevFact));
    } else {
      alert('There was a problem updating a fact');
    }

    setIsUpdating(false);
  }

  async function handleDeleteFact() {
    setIsDeleting(true);

    const { error } = await supabase
      .from('facts')
      .delete()
      .eq('id', id)

    if(!error) {
      setFacts(prevFacts => prevFacts.filter(prevFact => prevFact.id !== id));
    } else {
      alert('There was a problem deleting a fact');
    }

    setIsDeleting(false);
  }
  
  const categoryColor = CATEGORIES.find(cat => cat.name === category).color;

  return (
    <li className="fact">
      <p>
        {text}
        <a
          className="source"
          href={source}
        >
          (Source)
        </a>
      </p>
      <span className="tag" style={{ backgroundColor: categoryColor }}>
        {category}
      </span>
      <div className="vote-buttons">
        <button 
          onClick={() => handleVote('votesInteresting')} 
          disabled={isUpdating || isDeleting}
        >
          👍 {votesInteresting}
        </button>

        <button 
          onClick={() => handleVote('votesMindblowing')} 
          disabled={isUpdating || isDeleting}
        >
          🤯 {votesMindblowing}
        </button>

        <button 
          onClick={() => handleVote('votesFalse')} 
          disabled={isUpdating || isDeleting}
        >
          ⛔️ {votesFalse}
        </button>

        <button
          onClick={handleDeleteFact}
          disabled={isUpdating || isDeleting}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
