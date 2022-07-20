import React, {useState, useEffect} from "react";
import PhotoOfTheDay from './components/PhotoOfTheDay.js'
import axios from 'axios'
import "./App.css";

function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=2NfRHyz9krn1wF3p4Y5T1bCC28Bxm3cTSAUhJDdR')
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <p>
         NASA Photo of the Day
      </p>
      <PhotoOfTheDay spaceData={nasaData}/>
    </div>
  );
}

export default App;
