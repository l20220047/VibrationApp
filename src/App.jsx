import { useState } from 'react'
import './App.css'

function App() {
  
  const [delkaVibrace, setDelkaVibrace] = useState(100);

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

  function zavibrujSOS(){
    if("vibrate" in navigator){
      //zarizeni podporuje vibrace
      //funkce pro vibrace ,delka vibrace je v ms
      navigator.vibrate([200,100,200,100,200,100,600,100,600,100,600]);
    }
    else{
      alert("Toto zařízení nepodporuje vibrace.")
    }
  }

  function zavibrujCas(time){
    if("vibrate" in navigator){
      //zarizeni podporuje vibrace
      //funkce pro vibrace ,delka vibrace je v ms
      navigator.vibrate(time);
    }
    else{
      //zarizeni nepodporuje vibrace
      alert("Toto zařízení nepodporuje vibrace.")
    }
  }
    

  return (
    <div>
      <h1>Vibration App</h1>
      <button onClick={zavibruj}>Vibrate</button>
      <button onClick={zavibrujSOS}>Vibrate SOS</button>
      <button onClick={() => zavibrujCas(1000)}>Vibrate 1s</button>

      <label>
        délka vibrace: {delkaVibrace}ms
      </label>
      <input type="range" min="100" max="5000" value={delkaVibrace} onChange={ (e) => 
        setDelkaVibrace(Number(e.target.value)) } />
       

      <button onClick={() => zavibrujCas(delkaVibrace)}>Nastavitelna vibrace</button>

    </div>
    

    
  )
}

export default App
