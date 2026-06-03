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
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from('facts').select('*');

      if(currentCategory !== 'all') query = query.eq('category', currentCategory);

      const { data: facts, error } = await query
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
  }, [currentCategory]);

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
        <CategoryFilter setCurrentCategory={setCurrentCategory}/>

        {isLoading ? <Loader /> : (
          <FactsList 
            facts={facts} 
            setFacts={setFacts}
          />
        )} 
      </main>
    </div>
  );
}

export default App;
