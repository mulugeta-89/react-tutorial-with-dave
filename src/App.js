
import './App.css';
import { useState} from 'react'
import Box from './components/Box';
import Input from './components/Input';
function App() {
  const [color, setColor] = useState('red')
  const handleSubmit = () => {
    setColor(color)
  }
  return (
    <div className="main">
      <Box color={color}/>
      <Input color={color}
        setColor={setColor}
       handleSubmit={handleSubmit}/>
    </div>
    
  );
}

export default App;
