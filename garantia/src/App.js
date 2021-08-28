import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
