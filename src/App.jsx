import { useState } from 'react'
import './App.css'

function App() {
  
  function zavibruj(){
    if("vibrate" in navigator){
      //zarizeni podporuje vibrace
      //funkce pro vibrace ,delka vibrace je v ms
      navigator.vibrate(500);
    }
    else{
      alert("Toto zařízení nepodporuje vibrace.")
    }
      

  }

  return (
    <div>
      <h1>Vibration App</h1>
      <button onClick={zavibruj}>Vibrate</button>
    </div>
  )
}

export default App
