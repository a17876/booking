import React from "react"
import './App.css';
import Navbar from './components/Navbar'
import Booking from './components/Booking'
import Calendar from './components/Calendar'
import FloorPlan from './components/FloorPlan'


function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="Container">
        <Calendar></Calendar>
        <Booking></Booking>
        <FloorPlan></FloorPlan>

      </div>

    </div>

  );
}

export default App;
