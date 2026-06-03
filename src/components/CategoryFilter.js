import { CATEGORIES } from "../data/categories";
import CategoryFilterItem from "./CategoryFilterItem";

export default function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button 
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory('all')}
          >
            All
          </button>
        </li>

        {CATEGORIES.map(category => (
          <CategoryFilterItem 
            category={category} 
            key={category.name}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
}
