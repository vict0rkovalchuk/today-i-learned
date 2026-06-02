import { CATEGORIES } from "../data/categories";

export default function FactItem({ fact }) {
  const { 
    text, 
    source, 
    category, 
    votesInteresting, 
    votesMindblowing, 
    votesFalse
  } = fact;
  
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
        <button>👍 {votesInteresting}</button>
        <button>🤯 {votesMindblowing}</button>
        <button>⛔️ {votesFalse}</button>
      </div>
    </li>
  );
}
