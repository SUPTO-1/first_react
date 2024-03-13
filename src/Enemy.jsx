export default function Enemy(enemy)
{
    return(
        <div className="box">
            <h4>Name: {enemy.enemy.name}</h4>
            <h5>Email: {enemy.enemy.email} </h5>
        </div>
    )
}