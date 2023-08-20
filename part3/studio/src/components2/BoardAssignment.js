import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label:"Pizza",
       value:"pizza"},

      {label:"Chicago",
       value:"chicago"},

      {label:"Cooking",
       value:"cooking"}
   ];

   const boardOptions = boards.map((board,index) => {

      return (
         <select>
         <option value={boards.value} key={index}>{boards.label}</option>
         </select>
      )});

   
  const [boardName,setBoardName] = useState('no boards yet!')

  const handleChange = (event) => setBoardName(event.target.value);

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      {/* to make all the board labels shown in a drop down box */}
      <select value={boardName} onChange={handleChange}>{boardOptions}</select>

      <p>Saved to {boardName}!</p>
      </div>
   );

}
