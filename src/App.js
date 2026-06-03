import CategoryFilter from './components/CategoryFilter';
import FactsList from './components/FactsList';
import NewFactForm from './components/NewFactForm';
import Header from './components/Header';

import supabase from './services/supabase';

import './style.css';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      const { data: facts, error } = await supabase
        .from('facts')
        .select('*')
        .order('votesInteresting', { ascending: false })
        .limit(1000);

      if(!error) {
        setFacts(facts);
      } else {
        alert('There was problem getting data');  
      }

      setIsLoading(false);
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

        {isLoading ? <Loader /> : <FactsList facts={facts} />} 
      </main>
    </div>
  );
}

export default App;
