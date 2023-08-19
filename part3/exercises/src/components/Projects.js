import data from "./../data.json";
import {useState} from 'react';


function MyProjects () {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length-1)
        {
            setIndex(index+1);
        } 
        else 
        {
            setIndex(0);
        }
    } 
    
        return (
        <div>
            <h3>Here are the movies I like</h3>
            <p>{data.projects[index].name}</p>
            <p>{data.projects[index].director}</p>
            <p>{data.projects[index].actor}</p>
            <p>{data.projects[index].country}</p>
            <button type="button" onClick={handleClick}>Next</button>

        </div>
        )
}

export default MyProjects;