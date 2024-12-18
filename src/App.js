import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/Home';
// import Actions from './components/Actions';
// import IM from './components/InteractiveModel';
import Podcast from './components/Podcast';
import ExplorePage from './components/ExplorePage';
import OceanCirculation from './components/OceanCirculation';
import TidesHeartRate from './components/TidesHeartRate';
import WaterCycleMetabolism from './components/WaterCycleMetabolism';
import MineralsElectrolytes from './components/MineralsElectrolytes';
import ActionPage from './components/ActionPage';



function App() {
  return (
    <Router>
      <div className="bg-primary text-base-100 min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/actions" element={<Actions />} /> */}
        {/* <Route path="/InteractiveModel" element={<IM />} /> */}
        <Route path="/Podcast" element={<Podcast />} />
        <Route path="/ExplorePage" element={<ExplorePage />} />
        <Route path="/OceanCirculation" element={<OceanCirculation />} />
        <Route path="/TidesHeartRate" element={<TidesHeartRate />} />
        <Route path="/WaterCycleMetabolism" element={<WaterCycleMetabolism />} />
        <Route path="/MineralsElectrolytes" element={<MineralsElectrolytes  />} />
        <Route path="/ActionPage" element={<ActionPage />} />
        {/* <Route path="/OceanCirculationChart" element={<OceanCirculationChart  />} /> */}
         {/* <Route path="/TidesHeartRateChart" element={<TidesHeartRateChart  />} /> */}


        
      </Routes>
      </div>
    </Router>
  );
}

export default App;
