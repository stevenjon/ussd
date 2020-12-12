import './App.css';
import {MemoryRouter as Router,Switch,Route} from "react-router-dom"
import Nav from './Components/Nav';
import NonStopToplam from './Components/NonStopToplam';
import Kunlik from './Components/Kunlik'
import Footer from './Components/Footer'
function App() {
  return (
     <Router>
    <div className="App">
    <Nav/>
    <Route path='/' exact component={Kunlik}/>
    <Route path='/non' exact component={NonStopToplam}/>
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
