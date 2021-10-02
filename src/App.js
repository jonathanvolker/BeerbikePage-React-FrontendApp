
import './App.css';

import { Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Home from "./components/Home"

function App() {
  return (
    <>
     <Route exact path='/' component={Inicio} /> 
     <Route exact path="/home" component={Home} />
    </>
    );
}

export default App;
