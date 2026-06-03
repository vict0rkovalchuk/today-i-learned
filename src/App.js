import CategoryFilter from './components/CategoryFilter';
import FactsList from './components/FactsList';
import NewFactForm from './components/NewFactForm';
import Header from './components/Header';

import supabase from './services/supabase';

import './style.css';
import { useEffect, useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(function () {
    async function getFacts() {
      const { data: facts, error } = await supabase
        .from('facts')
        .select('*');

      setFacts(facts);
    }

    getFacts();
  }, []);

  return (
    <div className="container">
      <Header showForm={showForm} setShowForm={setShowForm}/>
      {showForm && (
        <NewFactForm 
          setFacts={setFacts}
          setShowForm={setShowForm}
        />
      )}

      <main className="main">
        <CategoryFilter />
        <FactsList facts={facts} />
      </main>
    </div>
  );
}

export default App;
