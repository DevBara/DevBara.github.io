import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import MetalsList from './components/MetalsList';
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
    <header className="Header">
    <Header />
      <Router>
        <div>
          <nav className="navBar">
            <ul>
              <li>
                <Link className="link" to ="/home"> Home </Link>
              </li>
              <li>
                <Link className="link" to ="/products">Tracked Currencies</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" exact ={true} component={Home} />
            <Route path="/products" component={MetalsList} />
          </Switch>
        </div>
      </Router>
    </header>
    
    
   </div>
  )
  
}


export default App;