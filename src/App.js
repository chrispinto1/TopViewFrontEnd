import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Bikes from './containers/BikeContainer'
import Home from './components/Home'
import Checkout from './components/checkout'
import Accessories from './containers/AccessoryContainer'
import Addons from './components/Addons'
import { fetchProducts } from './redux-files/actions'
import { connect } from 'react-redux'

class App extends React.Component{

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    return(
      <div className="app">
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/bikes" render={()=> <Bikes/>}/>
        <Route exact path="/accessories" render={()=> <Accessories/>}/>
        <Route exact path="/addons" render={()=> <Addons/>}/>
        <Route exact path="/checkout" render={(routerProps)=> <Checkout routerProps={routerProps}/>}/>
      </div>
    )
  }
}

export default connect(null, {
  fetchProducts
})(App)