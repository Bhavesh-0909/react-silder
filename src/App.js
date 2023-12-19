import './App.css';
import Slider from './components/Slider';
import { useState } from 'react';

function App() {
  const [Toggler, setToggler] = useState(false);

  return (
    <div className="App">
      <Slider Toggler={Toggler} setToggler={setToggler}/>
      <div>{Toggler?"Night":"Day"}</div>
    </div>
  );
}

export default App;
