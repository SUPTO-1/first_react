import { useEffect, useState } from 'react'
import './Enemies.css'
import Enemy from './Enemy';
export default function Enemies()
{
    const [enemies , setEnemies] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setEnemies(data))
    },[])
   return(
    <div className='box'>
        <h3>Enemies: {enemies.length}</h3>
        {
            enemies.map(enemy => <Enemy enemy = {enemy}></Enemy>)
        }
    </div>
   ) 
}