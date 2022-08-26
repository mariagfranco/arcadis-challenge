import React, { useEffect, useState } from 'react';
import './App.css';
import "antd/dist/antd.css";
import SpotCard from './components/Spots/SpotCard';
import NewSpotModal from './components/NewSpot/NewSpotModal';
const axios = require('axios');

interface getSpots {
  data: spot[]
}

interface spot {
  coords: {
      coordX: number,
      coordY: number
  },
  _id: string,
  name: string,
  params: param[]
}

interface param {
  paramName: string,
  value: number,
  unity: string,
  limit: string
}

function App() {
  const [spots, setSpots] = useState([{
    coords: {
        coordX: 2,
        coordY: 2
    },
    _id: '',
    name: '',
    params: [{
      paramName: '',
      value: 0,
      unity: '',
      limit: '',
    }]
  }]);

  useEffect(() => {
    axios.get("http://localhost:1800/spot").then((res: getSpots) => setSpots(res.data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Arcadis
        </p>
      </header>
      <br></br>
      <NewSpotModal/>
      <br></br>
      <SpotCard spots={spots}/>
    </div>
  );
}

export default App;
