import './App.css';
import RecipeDisplay from './components2/Description';
import React from 'react';
import BoardAssignment from './components2/BoardAssignment';
import StatusChange from './components2/StatusChange';

function App() {
  return (
      <div className = "App">
        <RecipeDisplay />
        <div className = 'recipePhotoBlock'>
          <BoardAssignment />
          <StatusChange />
         </div>
        </div>
  );
}

export default App;
