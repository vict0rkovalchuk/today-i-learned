export default function CategoryFilterItem({ category: { name, color } }) {
  return (
    <li className="category" key={name}>
      <button
        className="btn btn-category"
        style={{ backgroundColor: color }}
      >
        {name}
      </button>
    </li>
  )
}
