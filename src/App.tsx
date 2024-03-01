import { useState } from 'react';
import { CategoryType } from './utils/types';
import Game from './components/Game';
import Header from './components/Header';
import Setup from './components/Setup';
import './App.css';

function App() {
  const [category, setCategory] = useState<CategoryType | null>(null);
  return (
    <div id="app">
      <Header />
      {!category ? (
        <Setup setCategory={setCategory} />
      ) : (
        <Game category={category} />
      )}
    </div>
  );
}

export default App;
