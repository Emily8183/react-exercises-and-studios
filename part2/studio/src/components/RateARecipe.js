let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];



function RateARecipe(prop) {
   function GiveRating() {
    return <h3>{stars[prop.rating-1]}</h3>;
   }
   return 1 <= prop.rating <= 5 ? <GiveRating /> : null;
};

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
