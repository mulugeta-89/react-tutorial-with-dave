
import './App.css';
import { useState} from 'react'
function App() {
  const[color, setColor] = useState("black")
  const[isBlack, setIsBlack] = useState(false)

  return (
    <>
      <div className="box" style={{
        backgroundColor: color,
        color: isBlack ? 'black' : 'white'
      }}>
        <h3>black</h3>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
      <input 
        type='text'
        placeholder='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}/>
        <button type="button" onClick={() => setIsBlack(!isBlack)}>
          Toggle text color
        </button>
      </form>
      
    </>
  );
}

export default App;
