import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Products from './components/products';
import ItemComponent from './components/item';
import Header from  './layouts/header'
import Notfound from './components/Notfound';
// import Authpage from './components/authpage';
import { useSelector } from "react-redux";
// import { ProtectedRoute } from "../src/components/protected-route";
export default function App() {
    const Item = useSelector((state) => state.shop.currentItem);
  
return (
  <Router>
    <div>
      <Switch>
        {/* <Route path="/auth" exact>
          <Authpage />
        </Route> */}
        <Header>
          <Route path="/" exact component={Products} />

          {!Item ? (
            <Redirect to="/" exact />
          ) : (
            <Route path="/item/:id" component={ItemComponent} exact />
          )}
          <Route component={Notfound} exact />
        </Header>
      </Switch>
    </div>
  </Router>
);
  
  
}
