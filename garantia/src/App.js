import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Userdashboard from './components/Dashboardcomponent/Userdashboard';
import Sidebar from './components/other/Sidebar';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState("bgk-warning");
  return (
    <div className= {`App ${color}`}>
      <Switch>
        <Route path="/Userdashboard"> <Sidebar/></Route>
        <Route  path="/Login">
          <Login />
        </Route>
        <Route  path="/About">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
