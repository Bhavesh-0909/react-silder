import './App.css';
import Slider from './components/Slider';
import { useState } from 'react';

function App() {
  const [Toggler, setToggler] = useState(false);

  return (
    <div className={Toggler && "dark"}>
      <div className="bg-white dark:bg-black w-screen h-screen">
        <Slider Toggler={Toggler} setToggler={setToggler}/>
        <div className='text-black dark:text-white'>{Toggler?"Night":"Day"}</div>
      </div>
    </div>
    
  );
}

export default App;
