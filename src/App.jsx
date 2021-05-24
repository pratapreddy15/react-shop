import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout/Layout';
import Home from './components/layout/Home/Home';
import Products from './pages/Products/Prducts';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
