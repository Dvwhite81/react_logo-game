import { useState } from 'react';
import { CategoryType } from '../utils/types';
import { CATEGORIES } from '../utils/data';
import '../styles/Setup.css';

interface SetupProps {
  setCategory: (category: CategoryType) => void;
}

const Setup = ({ setCategory }: SetupProps) => {
  const [currentSelection, setCurrentSelection] = useState<CategoryType | null>(null);

  const handleSubmit = () => {
    if (currentSelection) {
      setCategory(currentSelection);
    }
  }

  const isSelected = (category: CategoryType) => currentSelection === category;

  return (
    <div id="setup">
      <div className="select category-select">
        {CATEGORIES.map((c) => (
          <div key={c.name} className="select-option category-select-option">
            <button
              type="button"
              className={`btn category-select-btn ${isSelected(c) ? 'selected-category' : ''}`}
              onClick={() => setCurrentSelection(c)}
            >
              {c.name}
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="btn" onClick={handleSubmit}>
        Play!
      </button>
    </div>
  );
}

export default Setup;
