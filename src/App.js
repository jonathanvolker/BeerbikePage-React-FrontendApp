
import './App.css';

import { Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <>
     <Route exact path='/' component={Inicio} /> 
     <Route exact path="/home" component={Home} />
     <Route exact path="/about" component={About} />

    </>
    );
}

export default App;
