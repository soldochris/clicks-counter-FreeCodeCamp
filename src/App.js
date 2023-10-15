import './App.css';
import inspiredCodeLogo from "./Images/logo-large.png";

function App() {
  return (
    <div className="App">
      <div className='inspiredCode-logo-container'>
        <img 
          className='inspiredCode-logo'
          src={inspiredCodeLogo}
          alt='InspiredCode Logo'
        />
      </div>
    </div>
  );
}

export default App;
