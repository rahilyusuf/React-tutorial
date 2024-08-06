// functional componenet
import KgButton from "./kgbutton";
import Hello from "./hello";
import Random from "./random";
function App(){
  return <div>
    <h1>
    Hello World
    </h1>
    <button>subscribe</button>
    <KgButton></KgButton>
    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
  </div>
  // here return is jsxml here we cant write direct html in js file here react allows u to write this tml and converts this code to js by creating eleemnt like document . create is used in js here we dont need to define steps unlike js
}
export default App;