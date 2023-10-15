import './App.css';
import inspiredCodeLogo from "./Images/logo-large.png";
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='inspiredCode-logo-container'>
        <img 
          className='inspiredCode-logo'
          src={inspiredCodeLogo}
          alt='InspiredCode Logo'
        />
      </div>
      <div className='main-container'>
        <Counter
          numClicks={numClicks}
        />
        <Button 
          text="Click"
          isClickButton={true}
          clickHandler={clickHandler}
        />
        <Button 
          text="Reset"
          isClickButton={false}
          clickHandler={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
