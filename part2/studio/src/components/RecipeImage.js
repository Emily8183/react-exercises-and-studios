import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  const recipeImage = recipedata.map((data) => {
    return (
      <div key={data.name}>
        <img src={data.recipeImage} alt={data.name} className="recipeImage" />
      </div>
    )})
  return (
    <div>
      {recipeImage}
    </div>
  )

}

 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 