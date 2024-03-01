import { CategoryType } from '../utils/types';

interface GameProps {
  category: CategoryType;
}

const Game = ({ category }: GameProps) => {
  return (
    <div id="game">
      <h1>Category: {category.name}</h1>
    </div>
  )
}

export default Game;
