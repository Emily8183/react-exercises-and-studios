import React from 'react';
import styles from './Description.module.css'

let recipeTitle = "The recipe of Chicago's deep pan pizza";
let recipeDescription = "Only few things you can make yummy pizza"

function RecipeAuthor() {
    //const RecipeAuthor = () =>{}
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

class RecipeDescription extends React.Component{
    render() {
        return (
            <div> 
            <div>
               <h1>{recipeTitle}</h1>
               <p>{recipeDescription}</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
}

export default RecipeDescription;


