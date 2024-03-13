import { useState } from "react"

export default function Counter()
{
    const handleAdd = () =>
    {
        setCount(count+1)
    }
    const handleReduce = () =>
    {
        setCount(count-1)
    }
    const [count , setCount] = useState(0);
    return (
        <div style={{border:'2px solid yellow'}}>
            <li>Counter: {count} </li>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Add Reduce</button>
        </div>
    )
}