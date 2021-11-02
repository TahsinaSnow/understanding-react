import logo from './logo.svg';
import './App.css';
import Device from './Components/Device';
import { useEffect, useState } from 'react';
import Books from './Books/Books';

function App() {
  let [steps, setSteps] = useState(0);

  const books = [
    {name: 'Small Giants', author: 'bo'},
    {name: 'Build to sell', author: 'john'},
    {name: 'Grind it', author: 'Ray'},
    {name: 'Shoe Dog', author: 'bo'}
  ]

  const handleIncreaseSteps = () => {

    const newSteps = steps + 1;
    setSteps(newSteps);
   
  }
  useEffect(() =>{
     console.log(steps);
  
  }, [steps])


  return (
    <div className="App">
      <h3 title="my awesome tooltip">My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>

    <Device name="phone" steps={steps} price="13500"/>

    <Books books={books}/>

    </div>
  );
}



export default App;
