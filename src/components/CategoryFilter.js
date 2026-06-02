export default function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        <li className="category">
          <button
            className="btn btn-category"
            style={{ backgroundColor: '#3b82f6' }}
          >
            Technology
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-category"
            style={{ backgroundColor: '#16a34a' }}
          >
            Science
          </button>
        </li>
      </ul>
    </aside>
  );
}
