import recipedata from "./recipe.json";

function RecipeName() {
 
  const recipeName = recipedata.map( data => {
    return (
    <h1 key={data.name}>{data.name}</h1>
    )
  });

  return (
    <div>
      {recipeName}
    </div>
  )

}

export default RecipeName;

//import return the name of the recipe as a level 1 header