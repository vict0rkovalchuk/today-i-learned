export default function CategoryFilterItem({ category: { name, color }, setCurrentCategory }) {
  return (
    <li className="category" key={name}>
      <button
        className="btn btn-category"
        style={{ backgroundColor: color }}
        onClick={() => setCurrentCategory(name)}
      >
        {name}
      </button>
    </li>
  )
}
