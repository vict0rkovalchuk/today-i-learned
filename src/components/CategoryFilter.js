import { CATEGORIES } from "../data/categories";
import CategoryFilterItem from "./CategoryFilterItem";

export default function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>

        {CATEGORIES.map(category => (
          <CategoryFilterItem 
            category={category} 
            key={category.name}
          />
        ))}
      </ul>
    </aside>
  );
}
