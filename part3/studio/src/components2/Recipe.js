const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/how-to-make-chicago-style-deep-dish-pizza/";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
   let authorName = "Sally McKenney";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "ingredients1",
      "ingredients2",
      "ingredients3",
      "ingredients4",
      "ingredients5",
   ]

   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
   });

   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2014/12/best-chicago-style-pizza-recipe.jpg" alt="pizza pic" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}