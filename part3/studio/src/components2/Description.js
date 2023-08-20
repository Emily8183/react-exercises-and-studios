import React from 'react';
import styles from './Description.module.css'
import RecipeIngredients from "./Ingredients.js"

let recipeTitle = "The recipe of Chicago's deep pan pizza";
let recipeDescription = "Only few things you can make yummy pizza"

const RecipeAuthor = () =>{
    let authorLink = "https://sallysbakingaddiction.com/about/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally-300x300.jpg";
    let authorName = "Sally McKenney";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
            <div>
                 <h3>{authorName}</h3>
                 <a href={authorLink}>Amazing Kitchen</a> 
            </div>
        </div>
    );
}

const RecipePhoto = () => {
    return (
        <img src="https://sallysbakingaddiction.com/wp-content/uploads/2014/12/best-chicago-style-pizza-recipe-2.jpg" alt="" className = {styles.imageUpdates} height="450px" />
    )
}

const RecipeDescription = () => {

        return (
            <div> 
                <div>
                <h1>{recipeTitle}</h1>
                <p>{recipeDescription}</p>
                </div>

                <div>
                <RecipeAuthor />
                <RecipeIngredients />
                </div>
         </div>
        )
    }



export default function RecipeDisplay() {
    return (
        <div className ="recipePhotoBlock">
            <RecipePhoto />
            <div>
                <RecipeDescription />
            </div>
        </div>
    );
}

