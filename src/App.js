import CategoryFilter from './components/CategoryFilter';
import FactsList from './components/FactsList';
import NewFactForm from './components/NewFactForm';
import Header from './components/Header';

import './style.css';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container">
      <Header setShowForm={setShowForm}/>
      {showForm && <NewFactForm />}

      <main className="main">
        <CategoryFilter />
        <FactsList />
      </main>
    </div>
  );
}

export default App;
