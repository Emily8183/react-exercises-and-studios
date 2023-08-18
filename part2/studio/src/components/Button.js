import SaveButton from "./SaveButton.js";
import ClickedButton from "./ClickedButton.js";
import "./styling.css";


function Button(props) {
  const saveButton = props.saveButton;

  //return saveButton ? <saveButton /> : <ClickedButton />
  if(saveButton) {
    return (
    <SaveButton />
    );
  }
    return (
    <ClickedButton />
    );  
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 