import { useState } from "react"

export default function Team()
{
    const [team , setTeam] = useState(11);
    const handleAdd = () =>
    {
       const newteam = team + 1;
       setTeam(newteam);
    }
    const handleRemove = () =>
    {
        const newteam = team - 1;
        setTeam(newteam);
    }
    const teamStyle =
    {
        border:'2px solid purple',
        margin :'20px',
        padding :'20px',
        borderRadius:'20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Playes: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}