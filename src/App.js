
import './App.css';
import { useEffect, useState} from 'react'
import Form from './components/Form';
function App() {
  const [data, setData] = useState([])
  const [reqType, setReqType] = useState("")
  const API_URL = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const reqUrl = `${API_URL}/${reqType}`
    const handleFetch = async() => {
      try {
        const response = await fetch(reqUrl)
        if(!response.ok) throw Error("Did not fetch the data")
        const haveData = await response.json();
        setData(haveData)
      }
      catch(err){
        const errMsg = err.message
        return errMsg
      }
    }
    (async () => await handleFetch())()
  },[reqType])
  
    
  return (
    <div>
      <Form data={data} reqType={reqType} setReqType={setReqType}/>
    </div>

    
    
  );
}

export default App;
