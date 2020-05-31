import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import MetalsList from './components/MetalsList';
import Home from './components/Home'
import Header from './components/Header'
import UserReviews from './components/UserReviews';
import SubmitReviewForm from './components/SubmitReviewForm';
import Cart from './components/Cart';
import MetalPriceApi from './components/MetalPriceApi';
import News from './components/News';


function App() {
  return (
    <div className="App">
    <header className="Header">
    <Header />
    <MetalPriceApi />
      <Router>
        <div>
          <nav className="navBar">
            <ul>
              <li>
                <Link className="link" to ="/home"> Home </Link>
              </li>
              <li>
                <Link className="link" to ="/products">Purchase Metals</Link>
              </li>
              <li>
                <Link className="link" to ="/reviews">Reviews</Link>
              </li>
              <li>
                <Link className="cart" to ="/cart" >My Cart </Link>
              </li>
              <li>
                <Link className="link" to ="/latestnews" >News </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" exact ={true} component={Home} />
            <Route path="/products" component={MetalsList} />
            <Route path="/reviews" component={UserReviews} />
            <Route path="/leavereview" component={SubmitReviewForm} />
            <Route path="mycart" component={Cart} />
            <Route path="/latestnews" component={News} />
          </Switch>
        </div>
      </Router>
      <Cart />
    </header>
   
    
    
   </div>
  )
  
}


export default App;