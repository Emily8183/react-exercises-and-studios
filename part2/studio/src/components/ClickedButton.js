import "./styling.css";

function ClickedButton() {
  function handleClick (){
    alert("the pin has been saved and removed from the board")
  }
  return (
    <button onClick={handleClick} id="clickedButton">
    Saved
    </button>
  );

}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
