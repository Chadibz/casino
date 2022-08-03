import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import './App.css';
import Skillgame from "./components/Skillgame";
import VirtualGame from "./components/VirtualGame";

function App() {
  return (
    <div className="App">
   
       
  
  
 <Login/>

  <VirtualGame/>
  
  
    </div>
  );
}

export default App;
