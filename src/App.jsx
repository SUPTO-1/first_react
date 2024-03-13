import Counter from './counter';
import './App.css'
import Team from './Team';
import User from './User';
import Enemies from './Enemies';
function App() {
  function handleclick()
  {
    alert("Button Clicked");
  }
  function handleClickTwo()
  {
    alert("Button 2 Clicked");
  }

  const addToFive = (x) =>
  {
    alert(x+5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Enemies></Enemies>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleclick}>Click Me</button>
      <button onClick={handleClickTwo}>Click 2</button>
      <button onClick={() =>{
        alert("Button 3 Clicked");
      }}>Third Button</button>
      <button onClick={() =>{
        addToFive(5)
      }}>Fourth Button</button>
    </>
  )
}

export default App
