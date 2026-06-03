import FactItem from "./FactItem";

export default function FactsList({ facts }) {
  if(!facts.length) return (
    <section>
      <p className="message">No facts for this category yet! Create the first one!</p>
    </section>
  );

  return (
    <section>
      <ul className="facts-list">
        {facts.map(fact => <FactItem fact={fact} key={fact.id}/>)}
      </ul>
    </section>
  );
}
