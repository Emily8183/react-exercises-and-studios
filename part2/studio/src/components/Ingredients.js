import recipedata from "./recipe.json";

function IngredientList() {
  const ingredientList = recipedata.map((data)=>{

    return (
   <div key = {recipedata.name}> 
    <h3>Ingredients</h3>
    {data.ingredients.map((ingredient,index)=> {
    return <li key={index}>{ingredient}</li>  
    })}    
   </div>
   )
  });

  return (
    <div>
      {ingredientList}
    </div>
  )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 