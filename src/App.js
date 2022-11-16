import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import ColorBlock from './colorBlock'


function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
 
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  return (
    <div className="App">
    { colors.map((color, index) =>
    <ColorBlock color={color} key={color} />
    )}
    </div>
  );
}

export default App;

