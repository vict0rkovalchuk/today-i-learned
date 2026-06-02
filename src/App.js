import CategoryFilter from './components/CategoryFilter';
import FactsList from './components/FactsList';
import NewFactForm from './components/NewFactForm';
import Header from './components/Header';

import './style.css';

function App() {
  return (
    <div className="container">
      <Header />
      <NewFactForm />

      <main class="main">
        <CategoryFilter />
        <FactsList />
      </main>
    </div>
  );
}

export default App;
