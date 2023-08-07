import './styles.css';
import Button from './Button';
import oceans from './oceans.json'

// const listItem =(props) =>{
//    return props.map((ocean) => <div key = {props.id}><image src={props.image} alt={props.name} className="img" /></div>);
//  }

 const listItem = oceans.map (ocean =>
   <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
   <h1>Fun facts:</h1>
   <ol>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>.
   </ol>
   <Button />
   <img src={ocean.image} alt={ocean.name} className="img" />
     
   </div>
);

function Profile()
{   
   return(      
         <ul>
           {listItem}
          
         </ul>               
   );
}



export default Profile;