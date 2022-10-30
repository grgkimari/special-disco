import './App.css';
import audioQ from './assets/audio/Heater-1.mp3'
import audioW from './assets/audio/Heater-2.mp3'
import audioE from './assets/audio/Heater-3.mp3'
import audioA from './assets/audio/Heater-4.mp3'
import audioS from './assets/audio/Cev_H2.mp3'
import audioD from './assets/audio/Heater-6.mp3'
import audioZ from './assets/audio/Dsc_Oh.mp3'
import audioX from './assets/audio/Kick_n_Hat.mp3'
import audioC from './assets/audio/RP4_KICK_1.mp3'



const audioMap = {
  'q' : audioQ,
  'w' : audioW,
  'e' : audioE,
  'a' : audioA,
  's' : audioS,
  'd' : audioD,
  'z' : audioZ,
  'x' : audioX,
  'c' : audioC,

}

const keyDownHandler = (event) => {
  let arr = Object.keys(audioMap).map(letter => letter.toUpperCase())
  let isPresent = arr.findIndex((element, index) => element == event.key ) != -1
  if(isPresent){
    triggerAudio({
      target: document.getElementById(event.key)
    })
  }
}

document.addEventListener('keydown', keyDownHandler)

function triggerAudio(event){
  switch (event.target.id){
    case 'q':
      document.getElementById("display").innerHTML = "Heater 1"
      break
    case 'w':
      document.getElementById("display").innerHTML = "Heater 2"
      break
    case 'e':
      document.getElementById("display").innerHTML = "Heater 3"
      break
    case 'a':
      document.getElementById("display").innerHTML = "Heater 4"
      break
    case 's':
      document.getElementById("display").innerHTML = "Clap"
      break
    case 'd':
      document.getElementById("display").innerHTML = "Open-HH"
      break
    case 'z':
      document.getElementById("display").innerHTML = "Kick-n'-Hat"
      break
    case 'x':
      document.getElementById("display").innerHTML = "Kick"
      break
    case 'c':
      document.getElementById("display").innerHTML = "Closed-HH"
      break
    default:
      document.getElementById("display").innerHTML = ""
  }
  document.getElementById(event.target.id.toUpperCase()).play()
}

function App() {
  return (
    <div className="App" id="drum-machine">
      <div id="display"></div>
      <button className="drum-pad" id="q" onClick={triggerAudio}>Q<audio id="Q" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" preload>Q</audio></button>
      <button className="drum-pad" id="w" onClick={triggerAudio}>W<audio id="W" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" preload>W</audio></button>
      <button className="drum-pad" id="e" onClick={triggerAudio}>E<audio id="E" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" preload>E</audio></button>
      <button className="drum-pad" id="a" onClick={triggerAudio}>A<audio id="A" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" preload>A</audio></button>
      <button className="drum-pad" id="s" onClick={triggerAudio}>S<audio id="S" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" preload>S</audio></button>
      <button className="drum-pad" id="d" onClick={triggerAudio}>D<audio id="D" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" preload>D</audio></button>
      <button className="drum-pad" id="z" onClick={triggerAudio}>Z<audio id="Z" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" preload>Z</audio></button>
      <button className="drum-pad" id="x" onClick={triggerAudio}>X<audio id="X" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" preload>X</audio></button>
      <button className="drum-pad" id="c" onClick={triggerAudio}>C<audio id="C" className='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" preload>C</audio></button>
    </div>
  );
}

export default App;
