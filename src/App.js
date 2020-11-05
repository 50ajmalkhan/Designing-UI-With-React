
import './App.css';
import Navbar from "./Components/Navbar"
import Card from './Components/Card';
import HeroSession1 from './Components/HeroSeesion';
import Detail from './Components/Details';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSession1 />
      <Card />
      <br></br><br></br>
      <Detail />
      <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;
