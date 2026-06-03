import FactItem from "./FactItem";

export default function FactsList({ facts }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map(fact => <FactItem fact={fact} key={fact.id}/>)}
      </ul>
    </section>
  )
}
