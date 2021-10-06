import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Products from './components/products';
import ItemComponent from './components/item';
import Header from  './layouts/header'
import Notfound from './components/Notfound';
import { useSelector } from "react-redux";
import Authpage from './components/authpage';
export default function App() {
    const Item = useSelector((state) => state.shop.currentItem);
    const auth = useSelector((state) => state.auth.user);
  if(auth){
    return(
      <div>
      < Authpage/>
      </div>
    )
  }

  else{
return (
  <Router>
    <div>
      <Header>
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>

          {!Item ? (
            <Redirect to="/" exact />
          ) : (
            <Route path="/item/:id" component={ItemComponent} exact />
          )}
          <Route component={Notfound} exact />
        </Switch>
      </Header>
    </div>
  </Router>
);
  }
  
}
