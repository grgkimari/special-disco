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

function triggerAudio(event){
  let audio = new Audio(audioMap[event.target.id.toLowerCase()])
  audio.play()
}

function App() {
  return (
    <div className="App" id="drum-machine">
      <div id="display"></div>
      <button className="drum-pad" id="q" onClick={triggerAudio}>Q <audio id="Q" className='clip' src="special-disco\src\assets\audio\Heater-1.mp3"></audio></button>
      <button className="drum-pad" id="w" onClick={triggerAudio}>W<audio id="W" className='clip' src=""></audio></button>
      <button className="drum-pad" id="e" onClick={triggerAudio}>E<audio id="E" className='clip' src=""></audio></button>
      <button className="drum-pad" id="a" onClick={triggerAudio}>A<audio id="A" className='clip' src=""></audio></button>
      <button className="drum-pad" id="s" onClick={triggerAudio}>S<audio id="S" className='clip' src=""></audio></button>
      <button className="drum-pad" id="d" onClick={triggerAudio}>D<audio id="D" className='clip' src=""></audio></button>
      <button className="drum-pad" id="z" onClick={triggerAudio}>Z<audio id="Z" className='clip' src=""></audio></button>
      <button className="drum-pad" id="x" onClick={triggerAudio}>X<audio id="X" className='clip' src=""></audio></button>
      <button className="drum-pad" id="c" onClick={triggerAudio}>C<audio id="C" className='clip' src=""></audio></button>
    </div>
  );
}

export default App;
